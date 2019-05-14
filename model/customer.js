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
function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(5).required(),
        password: Joi.string().min(5).max(10).required(),
        address: Joi.string().min(10),
        phoneNumber: Joi.number().min(10).required(),
        emailId: Joi.string().min(5).max(20).required(),
    }
    return Joi.validate(customer, schema);
}
exports.customerSchema = customerSchema;
exports.Customer = Customer;
exports.validate = validateCustomer;