var express = require('express');
var app = express();
var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error: '));
    db.once( 'open', function() {
      console.log('connected to the database');
    });
var route = require('./route');

app.use(express.static('public'));
app.use('/',route);

var server = app.listen('3000', function() {
  console.log('Listening port 3000');
});
