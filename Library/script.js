const myLibrary = [];

document
  .getElementById("input-btn")
  .addEventListener("click", addBookToLibrary);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary() {
  const title = prompt("Book Title:");
  const author = prompt("Author:");
  const pages = prompt("Pages:");
  const read = prompt("Read");

  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
}

function displayBooks() {
  document.getElementById("book-list").innerHTML = myLibrary;
  myLibrary.map((item) => {"Titel": Book.title});
}
 