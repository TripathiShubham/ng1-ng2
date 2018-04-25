var express  = require('express');
mongoose = require('mongoose');
var bodyParser = require("body-parser");
var app = express();
var db = require( './server/config/db');
var user = require('./server/routes/user');
var shopingList = require('./server/routes/shopingList');

app.use(bodyParser.json({limit: '50mb', parameterLimit: 1000000}));

app.use('/bower_components', express.static('bower_components'));
app.use('/node_modules', express.static('node_modules'));
app.use('/src', express.static('src'));
app.use('/dist', express.static('dist'));
app.use('/app', express.static('app'));
app.use('/assets', express.static('assets'));

app.post('/api/save', user.addUser);
app.get('/api/getUsers', user.getUsers);
app.get('/api/getShopingList/:id', shopingList.getShopingList);
app.put('/api/updateStatus/:id', user.updateStatus);

app.get('/index.html', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen((process.env.PORT || 3000), function() {
    console.log('server started');
});