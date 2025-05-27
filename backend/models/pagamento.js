const mongoose = require('mongoose');

const pagamentoSchema = new mongoose.Schema ({
formaPagamento:String,
statusPagamento:String,
dataPagamento:Date,
pedidoid:mongoose.Schema.Types.ObjectId,
usuarioid:mongoose.Schema.Types.ObjectId

});

module.exports = mongoose.model('pagamento', pagamentoSchema, 'Pagamento');