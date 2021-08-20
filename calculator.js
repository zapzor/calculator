//Buttons and vars

one = document.querySelector('#one')
two = document.querySelector('#two')
three = document.querySelector('#three')
four = document.querySelector('#four')
five = document.querySelector('#five')
six = document.querySelector('#six')
seven = document.querySelector('#seven')
eight = document.querySelector('#eight')
nine = document.querySelector('#nine')
zero = document.querySelector('#zero')

plus = document.querySelector('#plus')
subtract = document.querySelector('#subtract')
multiply = document.querySelector('#multiply')
divide = document.querySelector('#divide')

display = document.querySelector('#display')
divContent = document.querySelector('#content')

one.addEventListener('click', screen)
two.addEventListener('click', screen)
three.addEventListener('click', screen)
four.addEventListener('click', screen)
five.addEventListener('click', screen)
six.addEventListener('click', screen)
seven.addEventListener('click', screen)
eight.addEventListener('click', screen)
nine.addEventListener('click', screen)
zero.addEventListener('click', screen)

plus.addEventListener('click', addNumber);
subtract.addEventListener('click', subtractNumber);
multiply.addEventListener('click', multiplyNumber);
divide.addEventListener('click', divideNumber);

//Create functions that take input and output sum depending on function used.

function addNumber(a, b) {
   divContent.textContent = '+';
   return a + b;
}

function subtractNumber(a, b) {
   divContent.textContent = '-'
   return a + b;
}
 
function multiplyNumber(a, b) {
    divContent.textContent = '*'
    return a * b;
}

function divideNumber(a, b) {
    divContent.textContent = '÷'
    return a / b;
} 

//Create function that takes one of the above functions and uses it on a parameter

function operate(a, b) {
    addNumber(a,b)
    subtractNumber(a,b)
    multiplyNumber(a,b)
    divideNumber(a,b)
}

//Create function that populates display when clicking buttons

function screen() {
one.addEventListener('click', () => {
    divContent.textContent = '1' 
})
two.addEventListener('click', () => {
    divContent.textContent = '2' 
})
three.addEventListener('click', () => {
    divContent.textContent = '3' 
})
four.addEventListener('click', () => {
    divContent.textContent = '4' 
})
five.addEventListener('click', () => {
    divContent.textContent = '5'
     
})
six.addEventListener('click', () => {
    divContent.textContent = '6' 
})
seven.addEventListener('click', () => {
    divContent.textContent = '7' 
})
eight.addEventListener('click', () => {
    divContent.textContent = '8' 
})
nine.addEventListener('click', () => {
    divContent.textContent = '9' 
})
zero.addEventListener('click', () => {
    divContent.textContent = '0' 
})
}