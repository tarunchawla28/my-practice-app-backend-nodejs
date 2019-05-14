const mongoose = require('mongoose');
const Joi = require('joi');
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantityRemaining: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
})
const Product = mongoose.model('Product', productSchema);
function validateProduct(product) {
    const schema = {
        name: Joi.string().required(),
        price: Joi.number().required(),
        quantityRemaining: Joi.number().required(),
        category: Joi.string().required()
    }
    return Joi.validate(product, schema);
}
exports.Product = Product;
exports.validate = validateProduct;