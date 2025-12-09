const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const auxiliarSchema = Schema({
    cod: String,
    nome: String,
    setor: String
});
module.exports = mongoose.model("Auxiliar", auxiliarSchema);