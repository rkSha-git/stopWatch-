let timer = 'started';
let count = document.getElementById('counter'); 
let timeInterval = 0;

let startStop = document.getElementById('play')
let restart = document.getElementById('restart');

let hour = 0;
let min = 0;
let sec = 0;

let leadSec = 0;
let leadMin = 0;
let leadHour = 0;

function stopWatch(){
    sec++;
    if(sec / 60 === 1){
        sec = 0;
        min++;
    }
    if(min / 60 === 1){
        min = 0;
        hour++;
    }
    if(sec < 10){
        leadSec = "0" + sec.toString();
    }else{
        leadSec = sec;
    }
    if(min < 10){
        leadMin = "0" + min.toString();
    }else{
        leadMin = min;
    }
    if(hour < 10){
        leadHour = "0" + hour.toString();
    }else{
        leadHour = hour;
    }
    count.innerText = leadHour + ':' + leadMin + ':' + leadSec;
}

startStop.addEventListener('click', function(){
    if(timer === 'started'){
        timeInterval = window.setInterval(stopWatch, 1000);
        startStop.innerHTML = '<i class="fa-solid fa-pause fa-xl" style="color:white;"></i>';
        timer = 'stopped';
    }else{
        window.clearInterval(timeInterval);
        timer = 'started';
        startStop.innerHTML = '<i class="fa-solid fa-play fa-xl" style="color: white;"></i>'
    }
});

restart.addEventListener('click', function(){
    window.clearInterval(timeInterval);
    sec = 0;
    min = 0;
    hour = 0;
    count.innerText = '00:00:00';
    startStop.innerHTML = '<i class="fa-solid fa-play fa-xl" style="color:white;"></i>';
    timer = 'started';
});