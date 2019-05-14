const mongoose = require('mongoose');
const { Customer } = require('./customer');
const Joi = require('joi');
const { Product } = require('./product');
const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true,
        trim: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
        trim: true
    },
    dateOfOrdering: {
        type: Date,
        default: Date.now,
        required: true
    },
    dateOfArrival: {
        type: Date,
        trim: true
    }
})
const Order = mongoose.model('Order', orderSchema);
function validateOrder(order) {
    const schema = {
        customerId: Joi.objectId().required(),
        productId: Joi.objectId().required(),
        dateOfArrival: Joi.date()
    }
    return Joi.validate(order, schema);
}
exports.Order = Order;
exports.validate = validateOrder;