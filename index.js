
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes/routes.js');
app.use(express.json());
app.use('/', routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
});

module.exports = app;