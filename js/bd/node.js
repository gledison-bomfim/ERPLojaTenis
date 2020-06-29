const mysql = require('mysql');
const express = require('express');
var app = express();
var cors = require('cors');
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use(cors({
  origin: "*"
}));

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

//Exemplo get all -> Chamada para obter é localhost:3000/usuarios
app.get('/usuarios', (req, res) => {
  con.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?'[req.param.usuario, req.param.senha], (err, rows, fields) => {
    if (!err)
      return true;
    else
      return false;
  })
});