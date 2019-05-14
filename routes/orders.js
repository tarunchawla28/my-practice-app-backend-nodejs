const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Order, validate } = require('../model/order');

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const order = new Order({
        customer: req.body.customerId,
        product: req.body.productId,
        dateOfArrival: req.body.dateOfArrival
    })
    await order.save();
    res.send(order);
})
module.exports = router;