const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  marca: String,
  modelo: String,
  cor: String,
  valor: Number,
  descricao: String,
  status: String,
  ano: Number,
  quilometragem: Number,
  categoria: String,
  imagem: String,
  detalhesTecnicos: {
    motorizacao: String,
    peso: Number,
    combustivel: String,
    velocidadeMaxima: String
  }
});

module.exports = mongoose.model('Item', itemSchema, 'Automoveis');
