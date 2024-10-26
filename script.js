function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

const bookInput = document.getElementById('book-input');
const addBookButton = document.getElementById('add-book');
const bookList = document.getElementById('book-list');

// Load books from Local Storage
function loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(book => {
        addBookToList(book);
    });
}

// Add book to the list
function addBookToList(book) {
    const div = document.createElement('div');
    div.className = 'book';
    div.textContent = book;
    bookList.appendChild(div);
}

// Add book button click event
addBookButton.addEventListener('click', () => {
    const bookTitle = bookInput.value;
    if (bookTitle) {
        addBookToList(bookTitle);
        saveBook(bookTitle);
        bookInput.value = '';
    }
});

// Save book to Local Storage
function saveBook(book) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

// Load books on page load
window.onload = loadBooks;
