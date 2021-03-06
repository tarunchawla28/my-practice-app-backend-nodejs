const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Product,validate } = require('../model/product');

router.get('/', async (req, res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});

router.post('/', async (req, res) => {
    const error =validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        quantityRemaining: req.body.quantityRemaining,
        category: req.body.category
    })
    await product.save();
    res.send(product);
});

module.exports = router;