var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    speak();
}
 
function speak(){
    var synth=window.speechSynthesis;
    data=document.getElementById("textbox").value;
    var utter=new SpeechSynthesisUtterance(data)
    synth.speak(utter)
    Webcam.attach("camera")
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
});
camera=document.getElementById("camera")

