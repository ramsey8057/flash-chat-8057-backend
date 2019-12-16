// jshint esversion: 6

const express = require('express');
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
routes(app);

const server = app.listen(port, () => {

    console.log(`App running on port ${server.address().port}`);

});
