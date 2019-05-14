const express = require('express');
const app = express();
require('./startup/db')();
require('./startup/routes')(app);
require('./startup/validation')();
app.listen(3011, () => console.log('App is running on port 3011'));