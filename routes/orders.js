const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { Order } = require('../model/order');

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
});

router.post('/', async (req, res) => {
    const order = new Order({
        customer: req.body.customer,
        product: req.body.product,
        dateOfArrival: req.body.dateOfArrival
    })
    await order.save();
    res.send(order);
})
module.exports = router;