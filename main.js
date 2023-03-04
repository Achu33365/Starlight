var SpeechRecognition = window.webkitSpeechRecogntion;
var recognation = new SpeechRecognation();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognation.start();
}
recognation.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
}