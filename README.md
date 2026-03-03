# Odin Library

A simple web application to keep track of books in your personal library.  
You can add books, mark them as read/unread, and delete them from the library.

## Features

- Add a book with:
  - Title
  - Author
  - Number of pages
  - Read status
- Display all books as cards
- Toggle the read/unread status of a book
- Delete books from the library

## Technologies Used

- HTML
- CSS
- JavaScript (DOM manipulation)

## How It Works

1. Fill in the book details in the form.
2. Click **"Add a book"** to add it to the library.
3. The book will appear on the bookshelf as a card.
4. Use:
   - **Toggle Read** to change read status.
   - **Delete** to remove the book.

## Project Structure

project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md

## Learning Purpose

This project was built as part of **The Odin Project** to practice:

- JavaScript objects and constructors
- Prototypes
- DOM manipulation
- Event handling
_________________________________________________________________________________

# Self Note — Why is there a second script file?
## What's the second file?
An alternate version of the main JavaScript that uses index (from forEach) as a **closure** instead of a unique book.id to identify books for deletion and toggling.

---

## Is the second file broken or bad?
No. For this project, both approaches work perfectly fine.

---

## Then why prefer UUID?
The only real reason is habit-building for the future.
When you start working with backends and databases, every item will already have a unique ID (like a database row ID). Getting used to identifying items by ID now means your thinking will naturally match how real-world apps work — instead of having to unlearn the index habit later.
That's it. No bug, no theoretical risk. Just the better habit to build early.

---

## What's a closure? (since that's why this file exists)
The second file uses a **closure** to "remember" the index.
When you write:
-----------------------
myLibrary.forEach((book, index) => {
    deleteButton.addEventListener('click', () => {
        myLibrary.splice(index, 1); // this "index" is captured from outer scope
    });
});
-----------------------
The click handler *closes over* `index` — meaning it locks in the value of `index` from when the card was first created. That's a closure: an inner function remembering a variable from its outer function even after the outer function is done.

---

## Summary
The second file is kept just to remember that the closure/index approach exists and works — but UUID is the better habit for when you move beyond simple frontend projects.