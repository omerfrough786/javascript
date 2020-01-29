//Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI(){}

//Add Book To List
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list')
    //Create tr element
    const row = document.createElement('tr')
    //Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`
  list.appendChild(row)
}

// Clear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// delete book
UI.prototype.deleteBook = function(target){
 if(target.className === 'delete'){
    target.parentElement.parentElement.remove();
 }
}
//Event Listeners
////Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //Get inputs values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    //Intantiate book
    const book = new Book(title, author, isbn);
    console.log(book)
    //Intantiate UI
    const ui = new UI();
    //Add book to list
    ui.addBookToList(book)
    //Clear fields
    ui.clearFields();

    e.preventDefault(); 
})
//// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    //Int UI
    const ui = new UI();

    //Delete book
    ui.deleteBook(e.target);

    e.preventDefault()
})