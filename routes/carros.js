const express = require("express");
const router = express.Router();
const carrosController = require("../controller/carrosController.js");



// Criar um Cliente
router.post("/", carrosController.createOne);

// Recuperar Todos os Clientes
router.get("/", carrosController.getAll );

// Recurear um Cliente Específico
router.get("/buscaid/:id", carrosController.getOne);

router.get("/buscanome/:nome", carrosController.getOneName);


// Atualiza um Cliente
router.patch("/:id", carrosController.changeOne );

// Remover um Cliente
router.delete("/:id",carrosController.removeOne );

module.exports = router;
