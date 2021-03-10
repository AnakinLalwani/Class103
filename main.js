
Webcam.set({
    width:350,
    height: 300,
    image_format: "png",
    image_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    });
}

console.log("ml5:"+ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/UcS_gNGPO/model.json", modelLoaded);

function modelLoaded() {
    console.log("Model has been loaded!");
}
function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }else{
        console.log(result);
        document.getElementById("resultobject").innerHTML = result[0].label;
        document.getElementById("resultaccuracy").innerHTML = result[0].confidence.toFixed(3);
    }
}