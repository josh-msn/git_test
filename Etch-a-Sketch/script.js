let squareQuantity = 10;

function createSquare(squareQuantity) {
  const square = document.createElement("div");
  const squareSize = 480 / squareQuantity;
  const squareWidth = `${squareSize}` + "px";
  const squareHeight = squareWidth;
  square.className = "square";
  square.style.width = squareWidth;
  square.style.height = squareHeight;
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

// changing the color after hovered square
function changeColor() {
  this.className = "square darken-25";
}

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
  return squareQuantity;
}

function clearGrid() {
  clearDom();
  createGrid(squareQuantity);
}

document.addEventListener("DOMContentLoaded", function () {
  // creating inital grid
  createGrid(squareQuantity);

  document.getElementById("input-btn").addEventListener("click", userGrid);
  document.getElementById("clear-btn").addEventListener("click", clearGrid);
});
