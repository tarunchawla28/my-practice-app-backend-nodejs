const mongoose = require('mongoose');
module.exports = function () {
    mongoose.connect('mongodb://localhost/ecommerce_backend')
        .then(() => console.log('Connected to Database'))
        .catch(() => console.error('Could not connect to database'));
}
