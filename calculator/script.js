let a = "";
let b = "";
let operator = "";
let totalInput = "";
let interimResult = "";
let result = "";
let numFlag = false;
let euqalFlag = false;

document.addEventListener("DOMContentLoaded", function () {
  const clickedButton = document.querySelectorAll(".num-button");
  clickedButton.forEach((clickedButton) => {
    clickedButton.addEventListener("click", generateNumber);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const clickedButton = document.querySelectorAll(".op-button");
  clickedButton.forEach((clickedButton) => {
    clickedButton.addEventListener("click", handleNumbers);
  });
});

document.getElementById("clear").addEventListener("click", clearCalculations);
document.getElementById("delete").addEventListener("click", removeDigit);
document.getElementById("equal").addEventListener("click", handleEqual);

function updateDisplay(value) {
  document.getElementById("output").innerHTML = value;
}

// checking if decimal point is used and deactivating the button
function checkDecimal(value) {
  if (value.includes(".")) {
    document.getElementById("dot").disabled = true;
  } else {
    document.getElementById("dot").disabled = false;
  }
}

function clearCalculations() {
  a = "";
  b = "";
  result = "";
  operator = "";
  totalInput = "";
  interimResult = "";
  numFlag = false;
  equalFlag = false;
  updateDisplay(totalInput);
}

function removeDigit() {
  totalInput = totalInput.replace(/.$/, "");
  checkDecimal(totalInput);
  updateDisplay(totalInput);
}

// saving input for later use in handleNumbers function
function generateNumber() {
  checkDecimal(totalInput);
  const valueInput = this.value;
  totalInput = totalInput + valueInput;
  updateDisplay(totalInput);
}

// saving the inputs to the variables a and b + saving the operator in variable
function handleNumbers() {
  if (!(totalInput === "")) {
    if (!numFlag) {
      operator = this.value;
      a = parseFloat(totalInput);
      totalInput = "";
      numFlag = true;
    } else {
      if (!equalFlag) {
        interimResult = handleOperate();
        operator = this.value;
        a = interimResult;
      } else {
        operator = this.value;
      }
    }
  }
}

function roundToX(num, decimals) {
  return +(Math.round(num + "e" + decimals) + "e-" + decimals);
}

function handleEqual() {
  if (totalInput === "" && operator === "") {
    console.log("nope");
  } else {
    const result = handleOperate();
    a = result;
    equalFlag = true;
  }
}

function handleOperate() {
  b = parseFloat(totalInput);
  totalInput = "";
  return operate(a, b, operator);
}

function operate(a, b, operator) {
  switch (operator) {
    case "+":
      result = add(a, b);
      return result;
    case "-":
      result = subtract(a, b);
      return result;
    case "*":
      result = multiply(a, b);
      return result;
    case "/":
      result = divide(a, b);
      return result;
  }
}

//mathematical operations
function add(a, b) {
  let result = a + b;
  result = roundToX(result, 4);
  updateDisplay(result);
  return result;
}

function subtract(a, b) {
  let result = a - b;
  result = roundToX(result, 4);
  updateDisplay(result);
  return result;
}

function multiply(a, b) {
  let result = a * b;
  result = roundToX(result, 4);
  updateDisplay(result);
  return result;
}

function divide(a, b) {
  if (b === 0) {
    result = "nope";
    updateDisplay(result);
  } else {
    let result = a / b;
    result = roundToX(result, 4);
    updateDisplay(result);
    return result;
  }
}
