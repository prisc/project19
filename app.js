var express = require('express');
var app = express();
var path = require('path');
var nodemailer = require('nodemailer');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Access realtor profile at  http://localhost:3000/realtor_profile
app.get('/realtor-profile', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/realtor-profile.html'));
});

//Access property detail at
app.get('/property-detail', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/property-detail.html'));
});

// Access the parse results as request.body
app.post('/send-mail', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');
