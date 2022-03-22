const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true, "Book must have a Title!"],
        minlength:[3, "Book Title must be at least 3 characters."]
    },
    genre:{
        type:String,
        required:[true, "Book must have a genre!"],
        minlength:[3, "Book genre must be at least 3 characters"]
    },
    description:{
        type:String,
        required:[true, "Book must have a description!"],
        minlength:[3, "Book description must be at least 3 characters"]
    },
    sugg1: {type:String}, //Suggestions are optional 0-3

    sugg2: {type:String},

    sugg3: {type:String},

    likes: {type:Number, default:0}

}, {timestamps: true})

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;