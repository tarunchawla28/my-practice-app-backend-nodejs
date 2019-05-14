const mongoose = require('mongoose');
const Joi = require('joi');
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 10
    },
    address: {
        type: String,
        minlength: 10
    },
    phoneNumber: {
        type: Number,
        required: true,
        min: 10,
    },
    emailId: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 20,
    }
})
const Customer = mongoose.model('Customer', customerSchema);
exports.customerSchema = customerSchema;
exports.Customer = Customer;