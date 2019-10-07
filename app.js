var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


// viewed at http://localhost:3000/realtor_profile
app.get('/realtor-profile', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/realtor-profile.html'));
});
app.get('/property-detail', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/property-detail.html'));
});

app.listen(3000);