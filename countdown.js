const start = document.getElementById('start');
const reset = document.getElementById('reset');

let m = document.getElementById('minute');
let s = document.getElementById('seconds');


//store a reference to the variable
let startTimer = 0;

function timer(){
   if(m.value == 0 && s.value == 0){
    m.value = 0;
    s.value = 0;

    let audio = new Audio('beep.mp3');
    audio.volume = 0.5;
        audio.play();

   } else if (s.value != 0){
        s.value--;
   } else if(m.value != 0 && s.value == 0){
    s.value = 59;
    m.value--;
   }
}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function () {
    // Check if the timer is already running, and if so, stop it before starting a new one
    if (startTimer) {
        clearInterval(startTimer);
    }

    // Initialize the variable startTimer
    function startInterval() {
        startTimer = setInterval(function () {
            timer();
        }, 1000);
    }

    startInterval();
});


reset.addEventListener('click', function(){
    m.value = 30;
    s.value = '00';
    stopTimer()
})

const resetButton = document.getElementById('reset');

reset.addEventListener('mouseover', () => {
  const tooltip = document.createElement('span');
  tooltip.innerText = 'Click the Reset button to end timer sound.';
  tooltip.style.position = 'absolute';
  tooltip.style.backgroundColor = '#333';
  tooltip.style.color = '#fff';
  tooltip.style.padding = '5px';
  tooltip.style.borderRadius = '5px';
  tooltip.style.zIndex = '1';

  resetButton.appendChild(tooltip);

  // Remove the tooltip after a delay
  setTimeout(() => {
    resetButton.removeChild(tooltip);
  }, 2000); // Remove after 2 seconds
});