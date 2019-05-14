const mongoose = require('mongoose');
const { Customer } = require('./customer');
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
        trim:true
    }
})
const Order = mongoose.model('Order', orderSchema);
exports.Order = Order;