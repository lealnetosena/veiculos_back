const Carros = require("../dao/carrosDao");


exports.createOne = (req, res) => {

  Carros.create(req.body, function (err) {
    if (err) {
      res.status(400).send({ err });
    } else {
      res.status(201).send("Carro criado com sucesso");
    }
  });
  
};
exports.getAll = (req, res) => {
  Carros.findAll((err, data) => res.send(data));
};
exports.getOne = (req, res) => {
  Carros.findOne(req.params.id, (err, data) => {
    if (!data) {
      res.status(404).send({ err: "Carro não encontrado"});
    }
    res.status(200).send(data);
  })

};

exports.getOneName = (req, res) => {
    Carros.findOneName(req.params.nome, (err, data) => {
      if (!data) {
        res.status(404).send({ err: "Carro não encontrado"});
      }
      res.status(201).send(data);
    })
  
  };

exports.changeOne = (req, res) => {
  Carros.updatePartial(req.params.id, req.body, (err) => {
    if (err) {
        console.log(err)
      res.status(400).send({ msg: err });
    } else {
      res.status(204).end();
    }
  });
};
exports.removeOne = (req, res) => {
Carros.delete(req.params.id, (err) => {
  if(!err) {res.status(204).end()} else{ res.send(err) }
})
};


