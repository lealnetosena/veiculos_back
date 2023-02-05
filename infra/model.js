// const db = require("../infra/connection");

const sqlite3 = require('sqlite3').verbose();
const dbFile = './infra/banco.db';

const db = new sqlite3.Database(dbFile, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Banco criado com sucesso!');
});


const sqlCreateDb = `
  CREATE TABLE carros (
    id INTEGER not null PRIMARY KEY AUTOINCREMENT,
    Nome varchar(255) not null,
    Fabricante varchar(255) not null,
    Placa varchar(255) not null
  )

`
db.run(sqlCreateDb, function(err) {
    if(err) {
      console.log("Erro ao criar tabelas")
    } else {
    console.log("Tabelas criadas com sucesso")
    }
})

// const sqlCreateTable = `DELETE FROM customer WHERE id = '${id}'`
// db.run(sqlCreateDb, callback)

db.close();