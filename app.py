import os
import json
import random

import numpy as np

from flask import Flask, render_template, request, session, url_for, redirect, flash
from flask_cors import CORS, cross_origin

import pretty_midi
from pretty_midi import constants

SAMPLE_PATH = "static/samples_out"
SAMPLES = ['008','101','858']

# Server Setup ###################################################################################################################
app = Flask(__name__)
CORS(app)
app.secret_key = str(random.random())

# Helpers ########################################################################################################################
def get_sample(sample_folder):
    original_midi_path = "{}/{}/mixed.mid".format(SAMPLE_PATH, sample_folder)
    notedic_path = "{}/{}/{}.npy".format(SAMPLE_PATH, sample_folder, sample_folder)
    chord_path = "{}/{}/chord.npy".format(SAMPLE_PATH, sample_folder)
    sustain_path = "{}/{}/{}_sustain.npy".format(SAMPLE_PATH, sample_folder, sample_folder)
    notedic = np.load(notedic_path, allow_pickle=True).item()
    chord = np.load(chord_path)
    root = np.zeros((16,12))
    bass = np.zeros((16,12))
    root[[i for i in range(16)],chord[:,0].astype(int)] = 1
    bass[[i for i in range(16)],chord[:,-1].astype(int)] = 1
    chord = np.concatenate((root,chord[:,1:-1],bass),axis=1)
    sustain = np.load(sustain_path)
    return original_midi_path, notedic, chord, sustain

def chd_to_str(c_mat):
    out = []
    pitches = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B']
    for c in c_mat:
        root = np.argmax(c[:12])
        root_s = pitches[root]
        chroma = np.array([i for i in range(12)])[c[12:24]==1]
        chroma = (chroma - root) % 12
        bass = np.argmax(c[24:])
        if len(chroma) == 3:
            if 7 in chroma:
                if 4 in chroma:
                    c_type = ''
                if 3 in chroma:
                    c_type = 'm'
                if 1 in chroma or 2 in chroma:
                    c_type = 'sus2'
                if 5 in chroma or 6 in chroma:
                    c_type = 'sus4'
            else:
                c_type = '6'
        else:
            c_type = ''
        if bass == 0:
            bass_s = ''
        else:
            bass_s = '/' + pitches[(root + bass) % 12]
        out.append('{}{}{}'.format(root_s, c_type, bass_s))
    for i in range(len(out)-1, 0, -1):
        if out[i] == out[i-1]:
            out[i] = ''
    return out

def midi_to_noteseq(midi_path):
    midi = pretty_midi.PrettyMIDI(midi_path)
    note_seq = {'notes': [], 'totalTime':16}
    for note in midi.instruments[0].notes:
        note_seq['notes'].append({'pitch': note.pitch, 'startTime':note.start, 'endTime':note.end})
    return note_seq

# The Main Thing ##################################################################################################################
@app.route('/', methods=['GET'])
def index():
    return render_template("index.html")

@app.route('/favicon.ico', methods=['GET'])
def serve_favicon():
    return app.send_static_file('favicon.ico')

@app.route('/js/<path>')
def serve_js(path):
    return app.send_static_file('js/'+path)

@app.route('/css/<path>')
def serve_css(path):
    return app.send_static_file('css/'+path)

@app.route('/get_data', methods=['GET'])
def test():
    songID = request.args.get("song")
    if songID == "000":
        sample_folder = SAMPLES[0]
    else:
        sample_folder = SAMPLES[(SAMPLES.index(songID)+1)%len(SAMPLES)]
    original_midi_path, notedic, chord, sustain = get_sample(sample_folder)
    out =  {'songID': sample_folder,
            'original_chd_str': chd_to_str(chord),
            'original_chd_mat': chord.tolist(),
            'original_noteseq': midi_to_noteseq(original_midi_path),
            'notedic': notedic,
            'sustain': sustain.tolist()}
    return json.dumps(out)

if __name__ == '__main__':
    app.run(debug=False,port=os.getenv('PORT',5000))
