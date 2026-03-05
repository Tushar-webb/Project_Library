const myLibrary = [];

function Book(title, author, pages, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleReadStatus = function () {
    this.readStatus = !this.readStatus;
};

function addToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus);
    myLibrary.push(book);
}

const form = document.querySelector(".details");
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("page_no").value;
    const readStatus = document.getElementById("readStatus").checked;

    addToLibrary(title, author, pages, readStatus);
    displayBooks();
    form.reset();
});



function displayBooks() {
    const bookShelf = document.querySelector(".bookShelf");
    bookShelf.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("book-card");
        card.dataset.id = book.id;

        const title = document.createElement("h3");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = "Author: " + book.author;

        const page = document.createElement("p");
        page.textContent = "Pages: " + book.pages;

        const read = document.createElement("p");
        if (book.readStatus) {
            read.textContent = "✓ Read";
            read.classList.add("statusRead");

        }
        else {
            read.textContent = "✗ Not Read";
            read.classList.add("statusUnread");

        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener('click', (e) => {
            const bookId = e.target.parentElement.dataset.id;
            const bookIndex = myLibrary.findIndex(
                (book) => book.id === bookId
            );
            myLibrary.splice(bookIndex, 1);
            displayBooks();
        });

        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Toggle Read";
        toggleButton.addEventListener("click", (e) => {
            const bookId = e.target.parentElement.dataset.id;
            const book = myLibrary.find(
                (book) => book.id === bookId
            );
            book.toggleReadStatus();
            displayBooks();
        });

        card.append(title, author, page, read, toggleButton, deleteButton);

        bookShelf.appendChild(card);
    });
}