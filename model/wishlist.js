const mongoose = require('mongoose');
const { Customer } = require('../model/customer');
const { Product } = require('../model/product');
const Joi = require('joi');
const wishlistSchema = new mongoose.Schema({
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
const Wishlist = mongoose.model('Wishlist', wishlistSchema);
function validateWishlist(wishlist) {
    const schema = {
        customerId: Joi.ObjectId().required(),
        productId: Joi.ObjectId().required()
    }
    return Joi.validate(wishlist, schema);
}
exports.Wishlist = Wishlist;
exports.validate = validateWishlist;