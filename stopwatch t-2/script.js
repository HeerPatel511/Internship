let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            milliseconds += 10;
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            display.textContent = 
                (minutes < 10 ? "0" : "") + minutes + ":" +
                (seconds < 10 ? "0" : "") + seconds + ":" +
                (milliseconds < 100 ? "0" : "") + milliseconds;
        }, 10);
    }
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    display.textContent = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
