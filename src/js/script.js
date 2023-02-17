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
    isPaused = false;
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


const changeColorBtn = document.getElementById('switch-shadow');
const colorDark = document.getElementById('bodyColor');
const subColorDark = document.getElementById('h2Color'); 
const startBtnDark = document.getElementById('startBtnDark');
const startBtnWhite = document.getElementById('startBtnWhite');
const pauseBtnDark = document.getElementById('pauseBtnDark'); 
const pauseBtnWhite = document.getElementById('pauseBtnWhite'); 
const resetBtnDark = document.getElementById('resetBtnDark'); 
const resetBtnWhite = document.getElementById('resetBtnWhite');
let changeColorParameter = false;

changeColorBtn.addEventListener("click", changeColor);

function changeColor(){
    
    if(!changeColorParameter){

        changeColorParameter = true;
        colorDark.style.backgroundColor='#000000';
        colorDark.style.color='#ffff';
        subColorDark.style.backgroundColor='#ffff';
        subColorDark.style.color='#000000';
        startBtnDark.style.display='none';
        startBtnWhite.style.display='inline';
        pauseBtnDark.style.display='none';
        pauseBtnWhite.style.display='inline';
        resetBtnDark.style.display='none';
        resetBtnWhite.style.display='inline';
    }    

    else{

        changeColorParameter = false;
        colorDark.style.backgroundColor='#ffff'
        colorDark.style.color='#000000';
        subColorDark.style.backgroundColor='#000000';
        subColorDark.style.color='#ffff';
        startBtnDark.style.display='inline';
        startBtnWhite.style.display='none';
        pauseBtnDark.style.display='inline';
        pauseBtnWhite.style.display='none';
        resetBtnDark.style.display='inline';
        resetBtnWhite.style.display='none';
    }
}

