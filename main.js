var detect = "";
var Status = false;
function setup(){
    canvas = createCanvas(330,300);
    video = createCapture(VIDEO);
    video.hide();
}
function Start(){
    objectDetector = ml5.objectDetector("cocoSSD",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Identificando Objetos";
    detect = document.getElementById("OInput").value;
}
function modelLoaded(){
    Status = true;
    console.log("Modelo Carregado");
}
function draw(){
    image(video,0,0,330,300);
}