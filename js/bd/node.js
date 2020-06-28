const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var con = mysql.createConnection({
  host: "localhost",
  user: "usrteste",
  password: "usrteste",
  port     : 3306,
  database : 'projetovendas',
  multipleStatements: true
});

con.connect(function(err) {
  if (!err)
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

//Exemplo get all -> Chamada para obter é localhost:3000/employees
app.get('/employees', (req, res) => {
  mysqlConnection.query('SELECT * FROM Employee', (err, rows, fields) => {
    if (!err)
      res.send(rows);
    else
      console.log(err);
  })
});