const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        maxlength: [20, "title can not be more than 20 charactes"]
    },
    author: {
        honorific: {
            type: String,
            trim: true
        },
        firstName: {
            type: String,
            require: true,
            trim: true

        },
        lastName: {
            type: String,
            require: true,
            trim: true
        }
    },
    gener: {
        type: String,
        require: true,
        trim: true
    },
    year: {
        type: Date,
        default: Date.now
    },
    edition: {
        type: String,
        default: "First"
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    coverImage: {
        type: String,

    },
    price: {
        type: Number,
        require: true,
        trim: true
    },
    rate: {
        type: Number,
        default: 0,
        trim: true
    }

})
module.exports = mongoose.Schema(Book, BookSchema);