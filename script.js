
let inputOne = document.getElementById("inputOne");
let inputTwo = document.getElementById("inputTwo");

const addButton = document.getElementById("addition");
const minusButton = document.getElementById("subtraction");
const timesButton = document.getElementById("multiplication");
const divideButton = document.getElementById("division");

let resultSpan = document.getElementById("result");

let valueOne = 0;
let valueTwo = 0;

inputOne.addEventListener('change', (event) => {
    valueOne = Number(event.target.value);
})

inputTwo.addEventListener('change', (event) => {
    valueTwo = Number(event.target.value);
})

addButton.addEventListener('click', () => {
    resultSpan.innerHTML = valueOne + valueTwo;
})

minusButton.addEventListener('click', () => {
    resultSpan.innerHTML = valueOne - valueTwo;
})

timesButton.addEventListener('click', () => {
    resultSpan.innerHTML = valueOne * valueTwo;
})

divideButton.addEventListener('click', () => {
    resultSpan.innerHTML = valueOne / valueTwo;
})
