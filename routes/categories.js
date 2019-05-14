const express = require('express');
const router = express.Router();
const { Category } = require('../model/category');

router.get('/', async (req, res) => {
    const categories = await Category.find().sort('name');
    res.status(200).send(categories);
});
router.post('/', async (req, res) => {
    const category = new Category({
        name: req.body.name
    });
    await category.save();
    res.status(200).send(category)
})
module.exports = router;