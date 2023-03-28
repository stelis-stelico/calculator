// Selecting all the buttons and the result display
var buttons = document.querySelectorAll('button');
var resultDisplay = document.getElementById('result');

// Define the variables as an empty string
let firstNumber = '';
let secondNumber = '';
let operator = '';

// Define a function to update the result display
function updateDisplay(value) {
  resultDisplay.innerText = value;
}

// Define a function to perform the calculation
function calculate() {

  // Convert the variables to numbers
  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

    // Performing the calculations based on the operator clicked
    if (operator === '+') {
      updateDisplay(num1 + num2);
    } else if (operator === '-') {
      updateDisplay(num1 - num2);
    } else if (operator === 'x') {
      updateDisplay(num1 * num2);
    } else if (operator === '/') {
      updateDisplay(num1 / num2);
    }

  // Reset the variables to their initial state
  firstNumber = '';
  secondNumber = '';
  operator = '';
}

// Looping through all the buttons and adding click event listeners
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const buttonValue = buttons[i].innerText;

    // Checking if the button clicked is a number
    if (!isNaN(buttonValue) || buttonValue === '.') {

      // Checking if an operator has not been selected
      if (operator === '') {
        firstNumber += buttonValue;
        updateDisplay(firstNumber);
      } else {
        secondNumber += buttonValue;
        updateDisplay(secondNumber);
      }
    } else {

      // Checking if the button clicked is an operator
      if (buttonValue === '+' || buttonValue === '-' || buttonValue === 'x' || buttonValue === '/') {

        // Setting the operator variable and updating the display
        operator = buttonValue;
        updateDisplay(operator);
      } else if (buttonValue === '=') {
        calculate();
      } else if (buttonValue === 'C') {
        // Clear the variables and update the display
        firstNumber = '';
        secondNumber = '';
        operator = '';
        updateDisplay('');
      }
    }
  });
}
