var express = require('express');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// viewed at http://localhost:3000/realtor_profile
app.get('/realtor_profile', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(3000);