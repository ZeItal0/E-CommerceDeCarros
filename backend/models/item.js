const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    marca: String,
    modelo: String,
    cor : String,
    valor: Number,
    descricao: String,
    status: String,
    ano: Number,
    quilometragem: Number,
    categoria : String,
    imagem : String
});
module.exports = mongoose.model('Item', itemSchema, 'Automoveis');