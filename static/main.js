// Visualiser ///////////////////////////////////////////////////////////////////////
const cfg = {
    noteHeight: 4,
    pixelsPerTimeStep: 100,
    minPitch: 20,
    maxPitch: 90,
    noteSpacing: 1
  };

original_vis.config = cfg

// Chord Dial, repurposed////////////////////////////////////////////////////////////
const dial_r_outer = 100
const dial_r_center = dial_r_outer/2

const outer_text = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"]

var current_chord_idx = 999;
var prev_chord_idx = 999

function draw_dial(){
    let g = d3.select("#dial_svg").append('g').attr('class', 'g').attr("transform", "translate("+(dial_r_outer+5)+","+(dial_r_outer+5)+")");

    // Outer Ring
    for (let i=0; i < outer_text.length; i++){
        let arc = d3.arc()
        .innerRadius(dial_r_center)
        .outerRadius(dial_r_outer)
        .startAngle(2*i*Math.PI / outer_text.length)
        .endAngle(2*(i+1)*Math.PI / outer_text.length)
    
        g.append("path")
            .attr("d", arc)
            .attr("id", 'outer_path'+i)
            .attr("class", "outer_path")
            .on("click", function(){outer_on_click(i)})
            .on("mouseover", function(){
                d3.select("#outer_path"+i).classed("outer_path_mouseover",true)
            })
            .on("mouseout", function(){
                d3.select("#outer_path"+i).classed("outer_path_mouseover",false)
            })
        
        g.append("text") 
        .attr("dx", (dial_r_outer+dial_r_center)/2*Math.cos(2*i*Math.PI / outer_text.length + (-0.5+1/7)*Math.PI))
        .attr("dy", (dial_r_outer+dial_r_center)/2*Math.sin(2*i*Math.PI / outer_text.length + (-0.5+1/7)*Math.PI))
        .attr("class", "outer_text")
        .attr("id", "outer_text"+i)
        .text(outer_text[i])
        .on("click", function(){outer_on_click(i)})
        .on("mouseover", function(){
            d3.select("#outer_path"+i).classed("outer_path_mouseover",true)
        })
        .on("mouseout", function(){
            d3.select("#outer_path"+i).classed("outer_path_mouseover",false)
        })
    }

    g.append('circle')
        .attr('x',0)
        .attr('y',0)
        .attr('r',dial_r_center)
        .attr("class", "center_path")
        .on("click", function(){center_on_click()})
        

    g.append("text") 
        .attr("class", "center_text")
        .attr("id","center_text")
        .text("")
        .on("click", function(){center_on_click()})
}

function outer_on_click(i){
    current_chord_idx = i;
    d3.select("#center_text").text(outer_text[i])
    d3.selectAll(".outer_path_active").attr("class", "outer_path")
    d3.select("#outer_path"+i).classed("outer_path_active",true)

    if (play_block == 1 && altered_play.innerHTML=="Pause"){
        play_block = 0
        mod_play(global_time)
    }
}

function center_on_click(){
}

draw_dial()

// Interfacing /////////////////////////////////////////////////////////////////////
function list_to_noteseq(notes_in, filter_start=0, filter_end=16, pad=true){
    notes_out = []
    for (let i=0; i<notes_in.length; i++){
        let start = notes_in[i][0]
        let end = notes_in[i][1]
        let pit = notes_in[i][2]
        let velo = notes_in[i][3]
        if (filter_start >= 8){
            start += 8
            end += 8
        }
            if (start>=filter_start && start<filter_end){
                notes_out.push({pitch:pit, startTime:start, endTime:end, velocity:velo})
            }
    }
    return notes_out
}

let note_seq_placeholder = {notes:list_to_noteseq(notedic["0"]["[0, 0, 0, 0]"]), totalTime:16}
var note_seq = {notes:[], totalTime: 16}
var chord_seq = []

// Player/vis setup
altered_vis = new mm.PianoRollCanvasVisualizer(note_seq_placeholder, document.getElementById('altered_canvas'), cfg)
player = new mm.SoundFontPlayer('https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus')
player.loadAllSamples().then(function(){ 
    altered_play.classList.remove("btn-light")
    altered_play.classList.add("btn-primary")
    altered_play.innerHTML = "Play"
    altered_play.onclick = function(){
        if (mod_st == 0){
            altered_play.innerHTML = "Pause"
            altered_play.classList.remove("btn-primary")
            altered_play.classList.add("btn-secondary")
            mod_st = 1
            mod_end = 0
            global_time_clean(global_time)
            mod_play(global_time)
        }
        else{
            altered_play.innerHTML = "Play"
            altered_play.classList.remove("btn-secondary")
            altered_play.classList.add("btn-primary")
            mod_st = 0
            mod_end = 1
            for (let i=0; i<note_seq.notes.length; i++){
                let note = note_seq.notes[i]
                player.playNoteUp({pitch: note.pitch})
            }
        }
    }
})

altered_reset.onclick = function(){
    altered_play.innerHTML = "Play"
    altered_play.classList.remove("btn-secondary")
    altered_play.classList.add("btn-primary")
    mod_st = 0
    mod_end = 1
    for (let i=0; i<note_seq.notes.length; i++){
        let note = note_seq.notes[i]
        player.playNoteUp({pitch: note.pitch})
    }
    note_seq.notes = []
    chord_seq = []
    altered_vis.noteSequence = note_seq
    altered_vis.redraw()
    clear_altered_table()
    init_swapped_chd()
    update_overlay()
    global_time = 0
    prev_chord_idx = 0
}

var prev_time = 0
var gctr = 0
// Update chord_seq
function altered_step(t, no_input=false){
    global_time = t
    if (chord_seq.length == 4){
        chord_seq = []
    }
    let query = JSON.parse(JSON.stringify(chord_seq))
    while (query.length < 4){
        if (no_input){
            document.getElementById("altered"+t).innerHTML = ''
        }
        else{
            document.getElementById("altered"+t).innerHTML = outer_text[current_chord_idx]
        }
        query.push(current_chord_idx)
    }
    chord_seq.push(current_chord_idx)
    updated_swapped_chd(t, current_chord_idx)
    update_overlay()
    query = "["+query.join(", ")+"]"
    let note_list = notedic[(t-t%8)/8][query]
    let new_notes = list_to_noteseq(note_list, t, t+2, true)
    note_seq.notes = note_seq.notes.concat(new_notes)

    altered_vis.noteSequence = note_seq
    altered_vis.redraw()
}

var mod_st = 0
var mod_end = 0
var global_time = 0
var play_block = 0
function mod_play(t){
    console.log(gctr)
    console.log(Date.now()-prev_time)
    prev_time = Date.now()
    gctr++
    if (t < 16 & mod_end == 0){
        if (! (t % 2 == 0 && current_chord_idx == 999 && document.getElementById("original_prog"+t).innerHTML.replace(/\s/g, '').length)){
            setTimeout(() => {  mod_play(t); }, 250*60/bpm);
        }
        if (t % 2 == 0){
            let no_input = false
            if (current_chord_idx == 999 && !document.getElementById("original_prog"+t).innerHTML.replace(/\s/g, '').length){
                current_chord_idx = prev_chord_idx
                no_input = true
            }
            if (current_chord_idx == 999){
                play_block = 1
                global_time = t
                for (let i=0; i<note_seq.notes.length; i++){
                    let note = note_seq.notes[i]
                }
                return
            }
            
            if (t == 0){
                clear_altered_table()
                init_swapped_chd()
            }
            altered_step(t, no_input)
            prev_chord_idx = current_chord_idx
            current_chord_idx = 999
            d3.selectAll(".outer_path_active").attr("class", "outer_path")
        }
        for (let i=0; i<note_seq.notes.length; i++){
            let note = note_seq.notes[i]
            if (note.startTime == t){
                mm.Player.tone.context.resume();
                player.playNoteDown({pitch: note.pitch})
                altered_vis.redraw(note)
            }
            if (note.endTime <= t){
                player.playNoteUp({pitch: note.pitch})
            }
        }
        t += 1/4;
        if (t == 16){
            t = 0
            note_seq.notes = []
        }
    }
}

function global_time_clean(t){
    chord_seq.pop()
    let new_notes = []
    swapped_chd[t] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    swapped_chd[t+1] = swapped_chd[t]
    for (let i=0; i<note_seq.notes.length; i++){
        let note = note_seq.notes[i]
        if (note.startTime < t){
            new_notes.push(note)
        }
    }
    note_seq.notes = new_notes
}

function clear_altered_table(){
    for (let i=0; i<16; i++){
        document.getElementById("altered"+i).innerHTML = "";
    }
}

// Back
altered_back.onclick = function(){
    if (altered_play.innerHTML == "Pause"){
        altered_play.onclick()
    }
    if (global_time > 0){
        document.getElementById("altered"+global_time).innerHTML = ""
        global_time_clean(global_time)
        global_time -= 2;
        document.getElementById("altered"+global_time).innerHTML = ""
        global_time_clean(global_time)
        altered_vis.redraw()
        update_overlay()
    }
}

// Keyboard events ////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('keydown', function(event){ 
    let key = event.key
    if (['1','2','3','4','5','6','7'].includes(key)){ 
        event.preventDefault()
        outer_on_click(key-1)
    }
    if (key == " "){
        event.preventDefault()
        altered_play.onclick()
    }if (key == "Backspace" || key == "q"){
        event.preventDefault()
        altered_back.onclick()
    }
    if (key == "r"){
        event.preventDefault()
        altered_reset.onclick()
    }
})

// Disable button activation on space key up
document.addEventListener('keyup', function(event){
    if (event.key == " "){
        event.preventDefault() 
    }
})

// Bar lines ///////////////////////////////////////////////////////////////////////////////////////
function draw_barlines_original(){
    d3.selectAll(".barline_original").remove().exit()
    let top_rect = document.getElementById("time1").getBoundingClientRect();
    let bottom_rect = document.getElementById("original_prog0").getBoundingClientRect();

    let l1 = top_rect.left + window.pageXOffset || document.documentElement.scrollLeft
    let l2 = top_rect.right + window.pageXOffset || document.documentElement.scrollLeft
    let t = top_rect.top + window.pageYOffset || document.documentElement.scrollTop
    let b = bottom_rect.bottom + window.pageYOffset || document.documentElement.scrollTop

    for (let i=1; i<4; i++){
        d3.selectAll("#original_barline")
        .append('rect')
        .attr('x', l1 + i*4*(l2-l1))
        .attr('y', t)
        .attr('width', 3)
        .attr('height', b-t)
        .attr('class', 'barline barline_original')
    }
}
setTimeout(() => {
    draw_barlines_original()
    draw_barlines_altered()
    place_player_original()
}, 500);

function draw_barlines_altered(){
    d3.selectAll(".barline_altered").remove().exit()

    let top_rect = document.getElementById("time_altered1").getBoundingClientRect();
    let bottom_rect = document.getElementById("altered0").getBoundingClientRect();

    let l1 = top_rect.left + window.pageXOffset || document.documentElement.scrollLeft
    let l2 = top_rect.right + window.pageXOffset || document.documentElement.scrollLeft
    let t = top_rect.top + window.pageYOffset || document.documentElement.scrollTop
    let b = bottom_rect.bottom + window.pageYOffset || document.documentElement.scrollTop

    for (let i=1; i<4; i++){
        d3.selectAll("#altered_barline")
        .append('rect')
        .attr('x', l1 + i*4*(l2-l1))
        .attr('y', t)
        .attr('width', 3)
        .attr('height', b-t)
        .attr('class', 'barline barline_altered')
    }
}

function place_player_original(){
    let top_rect = document.getElementById("time16").getBoundingClientRect();
    let bottom_rect = document.getElementById("original_prog15").getBoundingClientRect();

    let l1 = top_rect.left + window.pageXOffset || document.documentElement.scrollLeft
    let l2 = top_rect.right + window.pageXOffset || document.documentElement.scrollLeft
    let t = top_rect.top + window.pageYOffset || document.documentElement.scrollTop
    let b = bottom_rect.bottom + window.pageYOffset || document.documentElement.scrollTop

    d3.select("#original_player")
    .style("position","absolute")
    .style("left",l2+"px")
    .style("top", (t+2*b)/3+"px")
    .style("-webkit-transform","scale(0.65)")
    .raise()
}

window.onresize = function(){
    setTimeout(()=>{
        draw_barlines_original()
        draw_barlines_altered()
        place_player_original()
    },200)
}

// Chord pitch overlay ////////////////////////////////////////////////////////////////////////
const root_overlay_check = document.getElementById("root_overlay");
const chord_overlay_check = document.getElementById("chord_overlay");

var root_overlay = true;
var chord_overlay = false;

const original_svg = d3.select(".original_svg");
const swapped_svg = d3.select(".swapped_svg");

root_overlay_check.onclick = function(){
    if (root_overlay){
        root_overlay = false;
        if (! chord_overlay){
            clear_overlay();
        }
    }
    else{
        root_overlay = true;
        if (! chord_overlay){
            draw_root_overlay();
        }
    }
}

chord_overlay_check.onclick = function(){
    if (chord_overlay){
        chord_overlay = false;
        clear_overlay();
        if (root_overlay){
            draw_root_overlay();
        }
    }
    else{
        chord_overlay = true;
        if (root_overlay){
            clear_overlay();
        }
        draw_chord_overlay();
    }
}

var swapped_chd = [];
function init_swapped_chd(){
    let swapped_chd_new = []
    for (let i=0; i<16; i++){
        let new_chd = []
        for (let j=0; j<36; j++){
            new_chd.push(0)
        }
        swapped_chd_new.push(new_chd)
    }
    swapped_chd = swapped_chd_new
}
init_swapped_chd()

const deg_to_idx = [0,2,4,5,7,9,11]
function updated_swapped_chd(t, chord_idx){
    let idx = deg_to_idx[chord_idx]
    swapped_chd[t][idx] = 1
    let fifth = 7
    if (chord_idx == 6){
        fifth = 6
    }
    let third = 3
    if ([0,3,4].includes(chord_idx)){
        third = 4
    }
    swapped_chd[t][idx+12] = 1
    swapped_chd[t][(idx+third)%12+12] = 1
    swapped_chd[t][(idx+fifth)%12+12] = 1
    swapped_chd[t+1] = swapped_chd[t]
}


function draw_root_overlay(){
    for (let i=0; i<original_chd.length; i++){
        let chd = original_chd[i];
        let root = chd.slice(0,12).indexOf(1);
        draw_overlay_bar(original_svg, i, root, get_color(0));
        if (swapped_chd[i].slice(0,12).indexOf(1) >= 0){
            draw_overlay_bar(swapped_svg, i, swapped_chd[i].slice(0,12).indexOf(1), get_color(0));
        }
    }
}

function draw_chord_overlay(){
    for (let i=0; i<original_chd.length; i++){
        let chd = original_chd[i];
        let root = chd.slice(0,12).indexOf(1);
        for (let j=0; j<12; j++){
            if (chd[12+j] == 1){
                draw_overlay_bar(original_svg, i, j, get_color((j-root)%12));
            }
            if (swapped_chd[i][12+j] == 1){
                draw_overlay_bar(swapped_svg, i, j, get_color((j-swapped_chd[i].slice(0,12).indexOf(1))%12));
            }
        }
    }
}

function draw_overlay_bar(svg, x, pitch, color){
    x *= 100;
    while (pitch <= 90){
        if (pitch >= 30){
            svg.append('rect')
            .attr('fill', color)
            .attr('opacity', 0.3)
            .attr('x', x)
            .attr('y', cfg.noteHeight * (cfg.maxPitch - pitch))
            .attr('width', 100)
            .attr('height', 4)
            .attr('class', 'overlay');
        }
    
        pitch += 12;
    }
}

function clear_overlay(){
    d3.selectAll(".overlay").remove().exit()
}

function get_color(pitch){
    return d3.interpolateSinebow((pitch/12+0.6)%1)
}

function update_overlay(){
    clear_overlay()
    if (chord_overlay){
        draw_chord_overlay()
    }
    else if (root_overlay){
        draw_root_overlay()
    }
}

draw_root_overlay();

// BPM ////////////////////////////////////////////////////////////////////////////////
var bpm = 60
bpm_slider.oninput = function(){
    bpm = bpm_slider.value 
    bpm_text.innerHTML = bpm
}
// Help: popover ////////////////////////////////////////////////////////////////////
$(function () {
    $('[data-toggle="popover"]').popover()
  }) 

// Next Sample //////////////////////////////////////////////////////////////////////
resample.onclick = function(){
    window.open('/'+resample.value,"_self")
}