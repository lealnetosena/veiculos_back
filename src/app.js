
const express = require("express");
const { PORT } = require("dotenv").config().parsed;
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json())

const carros = require("../routes/carros")

app.use("/carros", carros)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})