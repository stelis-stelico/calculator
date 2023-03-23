function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2
}
function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}
function calculator(num1, num2, operator){
    return operator(num1, num2)
}

function calculate() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let operator = document.getElementById("operator").value;

	switch (operator) {
		case "add":
			result = calculator(num1, num2, add);
			break;
		case "subtract":
			result = calculator(num1, num2, subtract);
			break;
		case "multiply":
			result = calculator(num1, num2, multiply);
			break;
		case "divide":
			result = calculator(num1, num2, divide);
			break;
	}

	document.getElementById("result").innerHTML = result;
}
