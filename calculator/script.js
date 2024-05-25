let a = "";
let b = "";
let operator = "";
let totalInput = "";
let interimResult = "";
let numFlag = false;

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
document.getElementById("equal").addEventListener("click", handleOperate);

function updateDisplay(value) {
  document.getElementById("output").innerHTML = value;
}

function clearCalculations() {
  a = "";
  b = "";
  operator = "";
  totalInput = "";
  interimResult = "";
  numFlag = false;
  updateDisplay(totalInput);
}

function removeDigit() {
  totalInput = totalInput.replace(/.$/, "");
  updateDisplay(totalInput);
}

// saving input for later use in handleNumbers function
function generateNumber() {
  const valueInput = this.value;
  totalInput = totalInput + valueInput;
  updateDisplay(totalInput);
}

// saving the inputs to the variables a and b + saving the operator in variable
function handleNumbers() {
  if (!numFlag) {
    operator = this.value;
    a = parseFloat(totalInput);
    totalInput = "";
    numFlag = true;
  } else {
    //console.log(`Zwischen: '${interimResult}'`);
    interimResult = handleOperate();
    a = interimResult;
    b = "";
    numFlag = true;
  }
}

function handleOperate() {
  b = parseFloat(totalInput);
  totalInput = "";
  numFlag = false;
  return operate(a, b, operator);
}

function operate(a, b, operator) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(a, b);
      return result;
    case "-":
      result = substract(a, b);
      return result;
    case "*":
      result = multiply(a, b);
      return result;
    case "/":
      result = divide(a, b);
      return result;
  }

  function add(a, b) {
    const result = a + b;
    updateDisplay(result);
    return result;
  }

  function substract(a, b) {
    const result = a - b;
    updateDisplay(result);
    return result;
  }

  function multiply(a, b) {
    const result = a * b;
    updateDisplay(result);
    return result;
  }

  function divide(a, b) {
    const result = a / b;
    updateDisplay(result);
    return result;
  }
}
