const mongoose = require('mongoose')
const validator = require('validator')

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'Please tell us your username']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please Provide a password'],
        minlength: 6
    },
    fullname: {
        type: String,
        trim: true,
        required: [true, 'Please tell us your name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    // phone: {
    //     type: String,
    //     trim: true,
    //     unique: true,
    //     validate: [validator.isMobilePhone('en-NG'), 'Please provide a valid phone number']
    // },

    role: {
        type: String,
        required: [true, 'Please tell us the account type']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;