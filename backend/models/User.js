const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    nome: String,
    email: String,
    senha: String,
    tipoUsuario: String,
    endereco: {
        rua: String,
        bairro: String,
        numero: String,
        cep: String
    }
});
module.exports = mongoose.model('User', UserSchema, 'Usuario');
