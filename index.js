const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('./queries');
const port = process.env.PORT || 5000
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(
    bodyParser.json()
);//support parsing of application/x-www-form-urlencoded post data

app.post('/api/respondents', db.createRespondent)
app.get('/api/respondents', db.getRespondents)
app.listen(port);

console.log(`App listening on port ${port}`);