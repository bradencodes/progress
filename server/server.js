const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()

const app = express();

// BodyParser Middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
const db = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@ds042888.mlab.com:42888/progressdb`;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`\n === Server running on port ${port} === \n`));