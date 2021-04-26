import os
import json
import random

import numpy as np

from flask import Flask, render_template, request, session, url_for, redirect, flash
from werkzeug.utils import secure_filename

import webbrowser

SAMPLE_PATH = "static/samples_out"
SAMPLES = ['008','101','858']

# Server Setup ###################################################################################################################
app = Flask(__name__)
app.secret_key = str(random.random())

# Helpers ########################################################################################################################
def get_sample(sample_folder):
    original_midi_path = "{}/{}/mixed.mid".format(SAMPLE_PATH, sample_folder)
    notedic_path = "{}/{}/{}.npy".format(SAMPLE_PATH, sample_folder, sample_folder)
    chord_path = "{}/{}/chord.npy".format(SAMPLE_PATH, sample_folder)
    notedic = np.load(notedic_path, allow_pickle=True).item()
    chord = np.load(chord_path)
    root = np.zeros((16,12))
    bass = np.zeros((16,12))
    root[[i for i in range(16)],chord[:,0].astype(int)] = 1
    bass[[i for i in range(16)],chord[:,-1].astype(int)] = 1
    chord = np.concatenate((root,chord[:,1:-1],bass),axis=1)
    return original_midi_path, notedic, chord

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


# The Main Thing ##################################################################################################################
@app.route('/<sample_folder>', methods=['POST','GET'])
def index(sample_folder):
    original_midi_path, notedic, chord = get_sample(sample_folder)
    next_sample = SAMPLES[(SAMPLES.index(sample_folder)+1)%len(SAMPLES)]
    return render_template('index.html', original_midi_path=original_midi_path, notedic=notedic, original_chord_str=chd_to_str(chord), chd_mat=chord.tolist(), next_sample=next_sample)



if __name__ == '__main__':
    host = "127.0.0.1"
    port = 5000
    app.run(host, port, debug = True)
