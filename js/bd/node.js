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
  port: 3306,
  database: 'projetovendas',
  multipleStatements: true
});

con.connect(function (err) {
  if (!err)
    console.log('DB connection succeded.');
  else
    console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
});

app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

//Exemplo get all -> Chamada para obter é localhost:3000/usuarios
app.post('/usuarios', (req, res) => {
  con.query('SELECT Count(*) as Count FROM usuarios WHERE nome = ? AND senha = ?', [req.body.usuario, req.body.senha], (err, rows, fields) => {
    if (!err) {
      if (rows[0].Count > 0) {
        res.send("Conectado");
      } else {
        res.send("Não Conectou");
      }
    }
    else {
      res.send("Erro");
    }
  })
});

// Pesquisar Produtos
app.get('/produtos', (req, res) => {
  con.query('SELECT produtos.*, ifnull(estoque.qtdeEstoque, 0) as estoque FROM produtos LEFT JOIN estoque ON estoque.idProduto = produtos.id', (err, rows, fields) => {
    if (!err) {
      var ProdutosJSON = [];
      rows.forEach(function (row) {
        ProdutosJSON.push({ "id": row.id, "codigo": row.codigo, "descricao": row.descricao, "fotoURL": row.fotoURL, "dataEmissao": row.dataEmissao, "codBarras": row.codBarras, "unidade": row.unidade, "foraLinha": row.foraLinha , "estoque": row.estoque});
      });

      res.send(JSON.stringify(ProdutosJSON));
    }
    else {
      res.send("Erro");
      console.log("Erro");
    }
  })
});