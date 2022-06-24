var hours = document.querySelector("#hours");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");

setInterval(() => {
    
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    seconds.innerHTML = sec;
    minutes.innerHTML = min;
    hours.innerHTML = hour;  
    
    if (sec < 10) {
        seconds.innerHTML = `0${sec}`;
    };
    if (min < 10) {
        minutes.innerHTML = `0${min}`;   
    };
    if (hour < 10) {
        hours.innerHTML = `0${hour}`;
    };  
}, 1000);

