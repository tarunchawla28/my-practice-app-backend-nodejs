const mongoose = require('mongoose');
const { Customer } = require('../model/customer');
const { Product } = require('../model/product');
const Joi = require('joi');
const cartSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        min: 1
    }
});
const Cart = mongoose.model('Cart', cartSchema);
function validateCart(cart) {
    const schema = {
        customerId: Joi.ObjectId().required(),
        productId: Joi.ObjectId().required()
    }
    return Joi.validate(cart, schema);
}
exports.Cart = Cart;
exports.validate = validateCart;