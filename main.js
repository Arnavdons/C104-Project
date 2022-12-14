//https://teachablemachine.withgoogle.com/models/-vYmc5RXV/model.json

Webcam.set({
width:350,
height:350,
image_format:"jpeg",
jpeg_quality:90
});


camera=document.getElementById("cam");
Webcam.attach("#cam")


function snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
});
}

console.log("ml5 version",ml5.version);
classifyer=ml5.imageClassifyer("https://teachablemachine.withgoogle.com/models/-vYmc5RXV/model.json",modelLoded);
function modelLoded(){
console.log("model loaded!")
}