var hours = document.querySelector("#hours");
var tenMinutes = document.querySelector("#ten-minutes");
var unityMinutes = document.querySelector("#unity-minutes");
var tenSeconds = document.querySelector("#ten-seconds");
var unitySeconds = document.querySelector("#unity-seconds");

var tenSecond = 0;
var tenMinute = 0;


setInterval(() => {
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();
        const sec = date.getSeconds();
        unitySeconds.innerHTML = sec;
        unityMinutes.innerHTML = min;
        hours.innerHTML = hour;
        if(sec >= 10) {
            tenSeconds.style = ("display: none;");
        }   
        if (sec < 10) {
            tenSeconds.style = ("display: block;");
        }
        if (min >=10) {
            tenMinutes.style = ("display: none;");
            unityMinutes.style = ("margin-right: 30px;")
        } 
        if (min < 10) {
            tenMinutes.style.display = "block";
            unityMinutes.style = ("margin-right: 0px;")
        }
        if (hour >= 10) {
            hours.style = ("margin-right: 35px;")
        }
        if (hour < 10) {
            hours.style = ("margin-right: 0px;")
        }
}, 1000)
