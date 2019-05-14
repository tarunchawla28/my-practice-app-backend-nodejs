const express = require('express');
const router = express.Router();
const { Customer, validate } = require('../model/customer');
router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
})
router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const customer = new Customer({
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        emailId: req.body.emailId
    });
    await customer.save();
    res.status(200).send(customer)
})
module.exports = router;