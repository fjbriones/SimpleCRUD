var express = require('express');
var mysql = require('mysql');

var app = express();

const port = 3000;

app.set('view engine', 'ejs');

app.listen(port);