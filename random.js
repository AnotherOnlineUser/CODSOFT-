const finalresult = document.getElementsByClassName('screen')[0];
const clearbutton = document.getElementsByClassName('clear-button')[0];
const bracketbutton = document.getElementsByClassName('bracket-button')[0];
const dividebutton= document.getElementsByClassName('divide-button')[0];
const multiplybutton = document.getElementsByClassName('multiply-button')[0];
const subtractbutton = document.getElementsByClassName('subtract-button')[0];
const additionbutton = document.getElementsByClassName('add-button')[0];
const signbutton = document.getElementsByClassName('sign-button')[0];
const dotbutton = document.getElementsByClassName('dot-button')[0];
const equalbutton = document.getElementsByClassName('equals-button')[0];
const numberbutton = document.querySelectorAll('.number-button');

let result = '';
let currentNumber = '';
let operator = '';
let sign = '';

// Function to perform addition
const add = (a, b) => a + b;
// Function to perform subtraction
const subtract = (a, b) => a - b;
// Function to perform multiplication
const multiply = (a, b) => a * b;
// Function to perform division
const divide = (a, b) => a / b;

numberbutton.forEach((button) => {
    button.addEventListener('click', () => {
        event.preventDefault()
        currentNumber += button.textContent;
        result += button.textContent;
        finalresult.value = result;
    })
})

clearbutton.addEventListener('click', () => {
    event.preventDefault()
    result = '';
    currentNumber = '';
    operator = '';
    sign = '';
    finalresult.value = result;
})

bracketbutton.addEventListener('click', () => {
    event.preventDefault()
    if (operator === '') {
        currentNumber += '(';
        result += '(';
    } else {
        currentNumber = '';
        operator = '';
        result += '(';
    }
    finalresult.value = result;
})

signbutton.addEventListener('click', () => {
    event.preventDefault()
    if (sign === '') {
        sign = '-';
        result = sign + result;
    } else {
        sign = '';
        result = result.substring(1); // Remove the negative sign
    }
    finalresult.value = result;
})

dotbutton.addEventListener('click', () => {
    event.preventDefault()
    currentNumber += '.';
    result += '.';
    finalresult.value = result;
})

additionbutton.addEventListener('click', () => {
    event.preventDefault()
    operator = '+';
    result += '+';
    finalresult.value = result;
})

subtractbutton.addEventListener('click', () => {
    event.preventDefault()
    operator = '-';
    result += '-';
    finalresult.value = result;
})

multiplybutton.addEventListener('click', () => {
    event.preventDefault()
    operator = '*';
    result += '*';
    finalresult.value = result;
})

dividebutton.addEventListener('click', () => {
    event.preventDefault()
    operator = '/';
    result += '/';
    finalresult.value = result;
})

const equalButton = document.getElementsByClassName('equals-button')[0];


equalButton.addEventListener('click', () => {
    event.preventDefault();

    // Ensure that both numbers and an operator are available
    if (result !== '' && currentNumber !== '' && operator !== '') {
        // Convert numbers to numeric values
        const num1 = parseFloat(result);
        const num2 = parseFloat(currentNumber);

        if (isNaN(num1) || isNaN(num2)) {
            finalresult.value = 'Error: Invalid input';
            return; // Exit the function early
        }

        // Perform the calculation based on the operator
        if (operator === '+') {
            result = add(num1, num2);
        } else if (operator === '-') {
            result = subtract(num1, num2);
        } else if (operator === '*') {
            result = multiply(num1, num2);
        } else if (operator === '/') {
            // Check for division by zero
            if (num2 !== 0) {
                result = divide(num1, num2);
            } else {
                finalresult.value = 'Error: Division by zero';
                return; // Exit the function early
            }
        }

        // Update the result display
        finalresult.value = Number(result);
    } else {
        // Display an error if the expression is incomplete
        finalresult.value = 'Error: Incomplete expression';
    }
});





