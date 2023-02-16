const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const milisecondsEl = document.getElementById('miliseconds');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const resetBtn = document.getElementById('resetBtn');

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let interval;
let isPaused = false; 

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(){

    interval = setInterval(() => {

        if(!isPaused){

            miliseconds += 10

            if(miliseconds === 1000){
                seconds++;
                miliseconds = 0;
            }

            if(seconds === 60){
                minutes++;
                seconds = 0;
            }

            minutesEl.textContent = formatTimer(minutes);
            secondsEl.textContent = formatTimer(seconds);
            milisecondsEl.textContent = formatMiliseconds(miliseconds);
        }                
    }, 10)

    startBtn.style.display="none";
    pauseBtn.style.display="inline"
}

function pauseTimer(){
    isPaused = true;
    pauseBtn.style.display="none";
    resumeBtn.style.display="inline";
}

function resumeTimer(){
    isPaused = false;
    resumeBtn.style.display="none";
    pauseBtn.style.display="inline";
}

function resetTimer(){
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    miliseconds = 0;
    
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    milisecondsEl.textContent = "000";
    
    startBtn.style.display="inline";
    pauseBtn.style.display="none";
    resumeBtn.style.display="none";
}

function formatTimer(time) {
    return time < 10 ? `0${time}` : time;
}

function formatMiliseconds(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

