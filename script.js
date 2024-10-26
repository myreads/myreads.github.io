function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}

const bookInput = document.getElementById('book-input');
const addBookButton = document.getElementById('add-book');
const bookList = document.getElementById('book-list');

function loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(book => addBookToList(book));
}

function addBookToList(book) {
    const div = document.createElement('div');
    div.className = 'book';
    div.textContent = book;
    bookList.appendChild(div);
}

addBookButton.addEventListener('click', () => {
    const bookTitle = bookInput.value;
    if (bookTitle) {
        addBookToList(bookTitle);
        saveBook(bookTitle);
        bookInput.value = '';
    }
});

function saveBook(book) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

window.onload = loadBooks;
