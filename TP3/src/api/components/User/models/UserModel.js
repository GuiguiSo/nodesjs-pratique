const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    } ,
    lastName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true,
    } ,
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
        required: true,
    } ,
    password: {
        type: String,
        trim : true,
        min: 8,
        max: 256,
        require: true,
    },
    phone: {
        type: String,
        trim: true,

    } ,
    creationDate: {
        type: Date,
        default: new Date()

    } ,
    role: {
        type: String,
        enum: ['Customer', 'Admin'],
        default: 'Customer'

    } ,
});

module.exports = mongoose.model('User', UserSchema);