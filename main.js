sound=""
 document.getElementById("function_stop").style.display="none"

function preload(){
    sound=loadSound("Full Song- Muqabla - Street Dancer 3D -A.R. Rahman, Prabhudeva, Varun D, Shraddha K, Tanishk B.mp3")
}

function setup(){
    canvas=createCanvas(500,450)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,500,500)
}

function play_sound(){
    sound.play();
    sound.setVolume(1)
    sound.rate(1)
    document.getElementById("function_stop").style.display="block"
    document.getElementById("function_play").style.display="none"
}
function  stop(){
    sound.stop()
    document.getElementById("function_stop").style.display="none"
    document.getElementById("function_play").style.display="block"
}