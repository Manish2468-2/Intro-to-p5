function preload(){

}

function setup(){
canvas=createCanvas(500,475)
canvas.position(110,250)
video=createCapture(VIDEO)
video.hide()
filterColor=""
}

function draw(){

fill("#00C853")
stroke("#00C853")
rect(40, 50, 420, 400);
fill("#FF1744")
stroke("#FF1744")
circle(60, 60, 75);
circle(450, 60, 75);
circle(60, 425, 75);
circle(450, 425, 75);
image(video, 105, 105, 300, 275);
}

function take_snapshot(){
save('My snapshot.png')
}