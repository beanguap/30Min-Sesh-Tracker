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



start.addEventListener('click', function(){
    //initialize the variable startTimer
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval()
})


reset.addEventListener('click', function(){
    m.value = 0;
    s.value = 0;
    stopTimer()
})