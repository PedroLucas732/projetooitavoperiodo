const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carroSchema = Schema({
    marca: String,
    modelo: String,
    placa: String
});
module.exports = mongoose.model("Carro", carroSchema);