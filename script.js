document.getElementById("start").onclick = startTimer;
document.getElementById("pause").onclick = pause;
document.getElementById("reset").onclick = restart;


let isPaused = true;
let timer;
let remainingTime = 70;

function startTimer() {
    if (!isPaused) return;
    isPaused = false;
    
    let minutes = Math.floor(remainingTime / 60);
    let seconds = remainingTime % 60;
    
    document.getElementById("timer").innerHTML =
        minutes + " : " + (seconds < 10 ? "0" : "") + seconds;

    timer = setInterval(function () {
        if (isPaused || remainingTime <= 0) {
            clearInterval(timer);
            return;
        }

        if (remainingTime === 60) {
            toggleAlert();
        }

        remainingTime--;
        
        minutes = Math.floor(remainingTime / 60);
        seconds = remainingTime % 60;
        
        document.getElementById("timer").innerHTML =
            minutes + " : " + (seconds < 10 ? "0" : "") + seconds;

        if (remainingTime <= 0) {
            clearInterval(timer);
            document.getElementById("timer").innerHTML = "Take a break!";
        }
    }, 1000);
}


function pause() {

    if (isPaused === true){
        startTimer();
        document.getElementById("pause").innerText = "Pause";
    }
    else{
        isPaused = true;
        document.getElementById("pause").innerText = "Resume";
        clearInterval(timer);
    }

}

function restart(){
    
    document.getElementById("timer").innerHTML = "25" + " : " + "00";
    
    if (remainingTime < 60) {
        toggleAlert()
    }
    remainingTime = 1500;
    
}

function toggleAlert() {
    document.getElementById("timer").classList.toggle("alert");
}

