const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    useName: {
        type: String,
        require: true,
        maxlength: [20, "user name can not be more than 20 characters"],
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true

    }
});
module.exports = mongoose.Schema(User, UserSchema);