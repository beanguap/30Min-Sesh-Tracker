const counter = document.querySelector('#counter');
let curValue = 0;

const plusBtn = document.querySelector('#plusBtn');
const resetBtn = document.querySelector('#resetBtn');
const subBtn = document.querySelector('#subBtn');

plusBtn.addEventListener('click', () => {
    curValue += 1;
    counter.textContent = curValue;

});
