function displayBooks(books) {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td>
                <button class="btn btn-primary btn-sm" onclick="editBook(${index})">Edit</button>
                <button class="btn btn-info btn-sm" onclick="reviewBook(${index})">Review</button>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">Delete</button>
            </td>
        `;
        bookList.appendChild(row);
    });
}

// Edit Book
window.editBook = function(index) {
    const book = books[index];
    document.getElementById('bookTitle').value = book.title;
    document.getElementById('bookAuthor').value = book.author;
    document.getElementById('bookYear').value = book.year;
    document.getElementById('bookQuanity').value = book.quantity;
    books.splice(index, 1);
    displayBooks(books);
};

// Review Book
window.reviewBook = function(index) {
    const book = books[index];
    alert(`Title: ${book.title}\nAuthor: ${book.author}\nYear: ${book.year}\nQuantity: ${book.quantity}`);
};

// Delete Book
window.deleteBook = function(index) {
    books.splice(index, 1);
    displayBooks(books);
};