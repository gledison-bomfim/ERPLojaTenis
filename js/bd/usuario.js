con.query('SELECT * FROM usuarios', (err,rows) => {
  if(err) throw err;

  console.log(rows);
});