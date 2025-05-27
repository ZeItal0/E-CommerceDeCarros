const mongoose = require ('mongoose');

const pedidosSchema = new mongoose.Schema({
usuarioid:mongoose.Schema.Types.ObjectId,
  veiculoEscolhido: [
    {
      veiculoId: String,
      quantidade: Number,
      valorVeiculo: Number
    }
  ],
  valorTotal: Number,
  status: String,
  dataPedido: Date

});

module.exports = mongoose.model('pedidos', pedidosSchema, 'Pedidos');