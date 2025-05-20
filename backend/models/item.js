const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    categoria : String,
    cor : String,
    valor: Number,
    descricao: String,
    status: String,
    ano: Number,
    quilometragem: Number
});
module.exports = mongoose.model('Item', itemSchema, 'Automoveis');