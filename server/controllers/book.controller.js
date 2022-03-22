const Book = require('../models/book.model');

module.exports = {
    
    createBook: (req, res)=>{
        Book.create(req.body)
            .then((newBook)=>{
                console.log(newBook);
                res.json(newBook)
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    getOneBook: (req, res)=>{
        Book.findById({_id: req.params.id})
            .then((oneBook)=>{
                res.json(oneBook);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    getAllBooks:(req, res)=>{
        Book.find({})
            .then((allBooks)=>{
                res.json(allBooks);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    deleteBook: (req, res)=>{
        Book.deleteOne({_id: req.params.id})
            .then((deletedBook)=>{
                res.json(deletedBook);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },

    editBook:(req, res)=>{
        Book.findByIdAndUpdate({_id: req.params.id},
            req.body,
            {
                new: true,
                runValidators: true
            })
            .then((updatedBook)=>{
                res.json(updatedBook);
            })
            .catch((err)=>{
                console.log(err);
                res.status(400).json(err);
            })
    },
}