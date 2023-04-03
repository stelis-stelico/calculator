// Selecting all the buttons and the result display
var buttons = document.querySelectorAll('button');
var resultDisplay = document.getElementById('result');

// Define the variables as an empty string
let currentInput = '';
let storedInput = '';
let previousResult = '';

// Define a function to update the result display
function updateDisplay(value) {
  resultDisplay.innerText = value;
}

// Looping through all the buttons and adding click event listeners
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    const buttonValue = buttons[i].innerText;

    // Checking if the button clicked is a number or decimal point
    if (!isNaN(buttonValue) || buttonValue === '.') {
      currentInput += buttonValue;
      updateDisplay(storedInput + currentInput);
    } else {

      // Checking if the button clicked is an operator
      if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
        if (previousResult !== '') {
          storedInput = previousResult + buttonValue;
          previousResult = '';
        } else {
          storedInput += currentInput + buttonValue;
        }
        currentInput = '';
        updateDisplay(storedInput);
      } else if (buttonValue === '=') {
        storedInput += currentInput;
        currentInput = '';
        previousResult = eval(storedInput);
        updateDisplay(previousResult);
        storedInput = '';
      } else if (buttonValue === 'C') {
        // Clear the variables and update the display
        currentInput = '';
        storedInput = '';
        previousResult = '';
        updateDisplay('');
      }
      else if (buttonValue === 'DEL') {
        // Delete the last character from the current input
        currentInput = currentInput.slice(0, -1);
        updateDisplay(storedInput + currentInput);
      }
    }
  });
}
