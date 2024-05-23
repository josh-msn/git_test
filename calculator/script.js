let inputNumber = "";
let a = "";
let b = "";
let operator = "";
let totalInput = "";

document.addEventListener("DOMContentLoaded", function () {
  const clickedButton = document.querySelectorAll("button");
  clickedButton.forEach((clickedButton) => {
    clickedButton.addEventListener("click", generateInput);
  });
});

function generateInput() {
  const valueInput = this.value;
  totalInput = totalInput + valueInput;
  console.log(totalInput);
}

function add(a, b) {
  const result = a + b;
  return result;
}

function substract(a, b) {
  const result = a - b;
  return result;
}

function multiply(a, b) {
  const result = a * b;
  return result;
}

function divide(a, b) {
  const result = a / b;
  return result;
}

function operate(a, b) {}
