let displayString = "";
let inputString = "";
let inputArray = [];
const numButtons = document.querySelectorAll(".num-buttons");
const funcButtons = document.querySelectorAll(".func-buttons");
const displayDiv = document.querySelector(".display");
const clearButton = document.querySelector("#clear-button");
const equalButton = document.querySelector("#equals-button");

for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', function() {
        displayString = displayString + numButtons[i].innerText;
        inputString = inputString + numButtons[i].innerText;
        displayDiv.innerHTML = displayString;
    });
};

for (let i = 0; i < funcButtons.length; i++) {
    funcButtons[i].addEventListener('click', function() {
        inputArray.push(inputString);
        inputArray.push(funcButtons[i].innerText);
        displayString = displayString + funcButtons[i].innerText;
        displayDiv.innerHTML = displayString;
        inputString = "";
    });
};

clearButton.addEventListener('click', function() {
    displayString = "";
    inputString = "";
    inputArray = [];
    displayDiv.innerHTML = "...";
});

equalButton.addEventListener('click', function() {
    inputArray.push(inputString);
    while (inputArray.length > 1) {
        var newValue = operate(inputArray[0], inputArray[1], inputArray[2])
        inputArray.shift();
        inputArray.shift();
        inputArray.shift();
        inputArray.unshift(newValue);
    };
    displayString = inputArray[0];
    inputString = inputArray[0];
    displayDiv.innerHTML = displayString;
});

function addition(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtraction(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiplication(a, b) {
    return a * b;
};

function division(a, b) {
    return a / b;
};

function operate(num1, operator, num2) {
    switch (operator) {
        case "+" :
            return addition(num1, num2);
        case "-" :
            return subtraction(num1, num2);
        case "X" :
            return multiplication(num1, num2);
        case "/" :
            return division(num1, num2);
    };
};

