let squareQuantity = 10;

document.addEventListener("DOMContentLoaded", function () {
  // creating inital grid
  createGrid(squareQuantity);

  document.getElementById("input-btn").addEventListener("click", userGrid);
  document.getElementById("clear-btn").addEventListener("click", clearGrid);
});

function createSquare(squareQuantity) {
  const square = document.createElement("div");
  const squareSize = 480 / squareQuantity;
  const squareWidth = `${squareSize}` + "px";
  const squareHeight = squareWidth;
  square.className = "square";
  square.style.width = squareWidth;
  square.style.height = squareHeight;
  square.style.opacity = "1";
  document.getElementById("container").appendChild(square);
}

function createGrid(squareQuantity) {
  const totalAmount = squareQuantity * squareQuantity;
  for (let i = 0; i < totalAmount; i++) {
    createSquare(squareQuantity);
  }
  // detecting hovered square
  const square = document.querySelectorAll(".square");
  square.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
  });
}

// changing the opacity
function changeColor() {
  this.style.opacity = this.style.opacity - 0.1;
}

//Clearing Grid before creating a new one
function clearDom() {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

//user Input for squares per row
function userGrid() {
  squareQuantity = parseInt(
    prompt("How many squares per row do want? (max 100)"),
    10
  );
  if (squareQuantity > 100) {
    squareQuantity = 100;
  }
  clearDom();
  createGrid(squareQuantity);
}

function clearGrid() {
  clearDom();
  createGrid(squareQuantity);
}
