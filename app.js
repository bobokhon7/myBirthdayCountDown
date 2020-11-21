
const days = document.getElementById("days");
const hours =  document.getElementById("hours");
const minutes =  document.getElementById("minutes");
const seconds =  document.getElementById("seconds");
const countdown = document.getElementById("countdown");

const currentYear = new Date().getFullYear();

const myBirthday = new Date(`September 12 ${currentYear + 1} 00:00:00`);

function updateTime(){
    const   currentTime = new Date();

    const timeLeft = myBirthday - currentTime;

    const day = Math.floor(timeLeft/1000/60/60/24);
    const hour = Math.floor(timeLeft/1000/60/60) % 24;
    const min = Math.floor(timeLeft/1000/60) % 60;
    const sec = Math.floor(timeLeft/1000) % 60;

    //update in UI

    days.innerHTML = day;
    hours.innerHTML = hour < 10 ? "0" + hour : hour;
    minutes.innerHTML = min < 10 ? "0" + min : min;
    seconds.innerHTML = sec < 10 ? "0" + sec : sec;
    
}

setInterval(updateTime, 1000);

function removeBtn(){
    console.log("done");
}










