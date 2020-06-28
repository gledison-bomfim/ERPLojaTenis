var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');

var con = mysql.createConnection({
  host: "localhost",
  user: "usrteste",
  password: "usrteste",
  port     : 3306,
  database : 'projetovendas'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Conectou!");
});

app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

var port = process.env.port || 8000;

app.listen(port);