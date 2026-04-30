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
├── without_CryptoRandomUUID_DeletedUsingIndex_ToggledUsingTheCurrentLoopObject.js
├── usingClasses.js
└── README.md

## Learning Purpose

This project was built as part of **The Odin Project** to practice:

- JavaScript objects and constructors
- Prototypes
- DOM manipulation
- Event handling
_________________________________________________________________________________

# Self Note — Why is there a long named script file?
## What is that file about?
An alternate version of the main JavaScript(`script.js`) that uses index (from forEach) as a **closure** instead of a unique book.id to identify books for deletion and toggling.

---

## Is this long named script file broken or bad?
No. For this project, both approaches work perfectly fine.

---

## Then why prefer UUID?
The only real reason is habit-building for the future.
When you start working with backends and databases, every item will already have a unique ID (like a database row ID). Getting used to identifying items by ID now means your thinking will naturally match how real-world apps work — instead of having to unlearn the index habit later.
That's it. No bug, no theoretical risk. Just the better habit to build early.

---

## What's a closure? (since that's why this long named script file exists)
This long named script file uses a **closure** to "remember" the index.
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
The long named script file is kept just to remember that the closure/index approach exists and works — but UUID(from `script.js`) is the better habit for when you move beyond simple frontend projects.

_________________________________________________________________________________

# Self Note — Why is there a file named `usingClasses.js`?
## Where does this come from?
This file is **not** part of the current chapter’s assignment.

The current chapter (Objects and Constructors) assigned this **Library project**, and later a chapter named **Classes**—which comes two chapters after this one—tasked me with refactoring it to use ES6 Classes via a **Git branch workflow**. However, I did not follow that approach. Instead, I created a separate file named `usingClasses.js` because I felt that using a Git branch workflow would either replace or add unnecessary complexity to my original code, making it harder to follow.

I wanted to avoid that because the old code (the current project's `script.js`) is still very important to me. It serves as a clear record of how my understanding began and acts as a helpful guide for revisiting the fundamentals. Most of the time, I need to come back to this project to revise things from the very beginning, so I prefer to keep the original code clean and unchanged for that purpose.

That is why I created `usingClasses.js` separately, which implements the same project using the class-based approach. This allows me to easily switch between the old file and the new one to compare them and verify that everything is working correctly (which it is).

So, for now, you do not need to worry about it, as you will eventually need to come back here—specifically to the `usingClasses.js` file—after being referred from the chapter named **Classes**.