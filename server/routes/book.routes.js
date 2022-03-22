const BookController = require("../controllers/book.controller");
const Book = require("../models/book.model");

module.exports = (app)=>{
    app.get('/api/books', BookController.getAllBooks);
    app.post('/api/books', BookController.createBook);
    app.put('/api/books/:id', BookController.editBook);
    app.delete('/api/books/:id', BookController.deleteBook);
    app.get('/api/books/:id', BookController.getOneBook);
}