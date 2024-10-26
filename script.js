const bookInput = document.getElementById('book-input');
const addBookButton = document.getElementById('add-book');
const bookList = document.getElementById('book-list');

// Load Books from Local Storage
function loadBooks() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(book => addBookToList(book));
}

// Add Book to List
function addBookToList(book) {
    const div = document.createElement('div');
    div.className = 'book';
    div.textContent = book;
    bookList.appendChild(div);
}

// Save Book to Local Storage
function saveBook(book) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}

// Event Listener for Add Book
addBookButton.addEventListener('click', () => {
    const bookTitle = bookInput.value;
    if (bookTitle) {
        addBookToList(bookTitle);
        saveBook(bookTitle);
        bookInput.value = '';
    }
});

// Load books when page loads
window.onload = loadBooks;
