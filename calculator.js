//Buttons and vars
let bigArray = [];
operator = '';
let a = 0
let b = 0

one = document.querySelector('#one');
two = document.querySelector('#two');
three = document.querySelector('#three');
four = document.querySelector('#four');
five = document.querySelector('#five');
six = document.querySelector('#six');
seven = document.querySelector('#seven');
eight = document.querySelector('#eight');
nine = document.querySelector('#nine');
zero = document.querySelector('#zero');

add = document.querySelector('#add')
subtract = document.querySelector('#subtract');
multiply = document.querySelector('#multiply');
divide = document.querySelector('#divide');
equals = document.querySelector('#equals');

display = document.querySelector('#display');
divContent = document.querySelector('#content');
divContent.textContent = bigArray;

//Arithmetic buttons
add.addEventListener('click', () => {
    divContent.textContent = '+'
    operator = '+'
;})
subtract.addEventListener('click', () => {
    divContent.textContent = '-'
    operator = '-'
;})
multiply.addEventListener('click', () => {
    divContent.textContent = '*'
    operator = '*'
 ;})
divide.addEventListener('click', () => {
    divContent.textContent = '÷'
    operator = '÷'
 ;})
 equals.addEventListener('click', operate);


 //Number buttons
one.addEventListener('click', () => {
    divContent.textContent = '1';
    bigArray = 1
    operator === '' ? a += 1 : b += 1;

;})
two.addEventListener('click', () => {
    divContent.textContent = '2';
    operator === '' ? a += 2 : b += 2;

;})
three.addEventListener('click', () => {
    divContent.textContent = '3';
    operator === '' ? a += 3 : b += 3;

;})
four.addEventListener('click', () => {
    divContent.textContent = '4';
    operator === '' ? a += 4 : b += 4;

;})
five.addEventListener('click', () => {
    divContent.textContent = '5';
    operator === '' ? a += 5 : b += 5;

;})
six.addEventListener('click', () => {
    divContent.textContent = '6';
    operator === '' ? a += 6 : b += 6;

;})
seven.addEventListener('click', () => {
    divContent.textContent = '7';
    operator === '' ? a += 7 : b += 7;

;})
eight.addEventListener('click', () => {
    divContent.textContent = '8';
    operator === '' ? a += 8 : b += 8;

;})
nine.addEventListener('click', () => {
    divContent.textContent = '9';
    operator === '' ? a += 9 : b += 9;

;})
zero.addEventListener('click', () => {
    divContent.textContent = '0';
    operator === '' ? a += 0 : b += 0;

;})


//Create functions that take input and output sum depending on function used.
function addNumber() {
    return a + b
;}
function subtractNumber() {
    return a - b
;}
function multiplyNumber() {
    return a * b
;}
function divideNumber() {
    return a / b
;} 

//Create function that takes one of the above functions and uses it on a parameter
function operate() {
    switch(operator) { 
    case '+':
    addNumber(bigArray)
    divContent.textContent = addNumber();
    return addNumber;
    case '-':
    subtractNumber(bigArray)
    divContent.textContent = subtractNumber();
    return subtractNumber;
    case '*':
    multiplyNumber(bigArray)
    divContent.textContent = multiplyNumber();
    return multiplyNumber;
    case '/':
    divideNumber(bigArray)
    divContent.textContent = divideNumber();
    return divideNumber;
;}}

//Create function that populates display when clicking buttons

//Function that takes user input and sends it to operator
