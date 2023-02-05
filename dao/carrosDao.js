const db = require("../infra/connection");

class Carros {
  create(data, callback) {
    const {nome, fabricante, placa} = data
    const sql = `INSERT INTO carros (
            nome, fabricante, placa
          ) 
          values ('${nome}', '${fabricante}', '${placa}')`;
    db.run(sql, callback);
  }

  findAll(callback) {
    const sql = "SELECT * FROM carros";
    db.all(sql, callback);

  }

  findOne(id,callback) {

    const sql = `SELECT * FROM carros where id = '${id}'`;

    db.get(sql, callback);
  }
  findOneName(nome,callback) {

    const sql = `SELECT * FROM carros where nome LIKE '%${nome}%'`;

    db.all(sql, callback);
  }


  delete(id, callback){

    const sql = `DELETE FROM carros WHERE id = '${id}'`
  
    db.run(sql, callback)


    
  }
  updatePartial(id, data, callback) {
    let carrosData = Object.entries(data);
    let fields = [];
    for (let i = 0; i < carrosData.length; i++) {
      fields.push(`${carrosData[i][0]} = '${carrosData[i][1]}'`);
    }

    const sql = `UPDATE carros SET 
                    ${fields.join(",")}
                WHERE
                    id = '${id}'`;

    db.run(sql, callback);

  }

}

module.exports = new Carros();
