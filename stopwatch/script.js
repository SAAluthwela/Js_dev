var seconds= 00;
var tens = 00;

var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var startButton = document.getElementById("start-button");
var stopButton = document.getElementById("stop-button");
var resetButton = document.getElementById("reset-button");
var interval; //to store time


//The main function

function startTimer(){
    tens++;
    if(tens < 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML= tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendSeconds.innerHTML= "0" + seconds ;
    }
    if( seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
}

startButton.onclick = function(){
    interval = setInterval(startTimer);
}
stopButton.onclick = function(){
     clearInterval(interval);
 }
resetButton.onclick = function(){
    clearInterval(interval);
    tens="00";
    seconds="00";
    appendSeconds.innerHTML=seconds;
    appendTens.innerHTML= tens;
}