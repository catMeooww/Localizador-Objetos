objects = [];
var target = "";
var Status = false;
objectDetector = "";
function setup() {
    canvas = createCanvas(330, 300);
    video = createCapture(VIDEO);
    video.size(330, 300);
    video.hide();
}
function Start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Identificando Objetos";
    target = document.getElementById("OInput").value;
    console.log(target);
}
function modelLoaded() {
    Status = true;
    console.log("Modelo Carregado");
}
function draw() {
    image(video, 0, 0, 330, 300);
    if (Status == true) {
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            if (objects[i].label == target) {
                document.getElementById("status").innerHTML = "Status: "+target+" localizado";
                fill("orange");
                stroke("red");
                text(objects[i].label, objects[i].x, objects[i].y)
                noFill()
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
    }
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    objects = results;
    console.log(objects);
}