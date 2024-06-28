Webcam.set({
    height:350,
    width:350,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#webcam")


function captureImg(){
    console.log("Image Captured")
    Webcam.snap(function(dataURL){
        document.getElementById("results").innerHTML = "<img id='capturedImg' src='" + dataURL + "'>"
    })
    document.getElementById("vid").style.height = "1030" 
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lz5PKYtkN/model.json",modelLoader)

function modelLoader(){
    console.log("Model Loaded")
}

function identifyImg(){
    console.log("Image Identified")
    var image = document.getElementById("capturedImg")
    classifier.classify(image, gotResults)
}

function gotResults(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
        document.getElementById("person").innerHTML = results[0].label
    }
}








