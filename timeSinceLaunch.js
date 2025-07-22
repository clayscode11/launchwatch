let timerEl= document.getElementById("timer-el")
let dateEl= document.getElementById('date-el')
let buttonEl= document.getElementById('start-btn')
let displayEl= document.getElementById('display-el')
buttonEl.addEventListener('click', startTimer, { once: false });

let intervalId;
let ss= String(0).padStart(2,'0');
let mm= String(0).padStart(2,'0');
let hh= String(0).padStart(2,'0');
let totalTime= `${hh}:${mm}:${ss}`;

const date= dayjs().format('MM/DD/YYYY')
dateEl.textContent= date

const now = dayjs()
function startTimer() {
    let timeStart= dayjs()
        intervalId = setInterval(() => {
        const diffMilliseconds= dayjs().diff(timeStart)
        const totalSeconds= Math.floor(diffMilliseconds / 1000)
        const seconds= totalSeconds % 60
        const minutes= Math.floor(totalSeconds / 60) % 60
        const hours= Math.floor (minutes / 60) % 60
        ss= String(seconds).padStart(2,'0')// we want to turn our variables in strings that can be manipulated
        mm= String(minutes).padStart(2,'0')
        hh= String(hours).padStart(2,'0') // we need single digit moments like 1:06, not 1:6. the padStart func's accomplishes that, first var defines how many characters long the padding will be, second sets the filler character '0'
        totalTime= `${hh}:${mm}:${ss}`
        timerEl.textContent= totalTime;
        buttonEl.disabled= true;
    }, 1000)
}


function displayTime () {
    clearInterval(intervalId);
    displayEl.textContent += totalTime + ' - ';
    timerEl.textContent= totalTime;
    buttonEl.disabled= false;
}


