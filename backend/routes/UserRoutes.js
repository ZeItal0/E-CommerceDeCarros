const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'ADS123';

router.post ('/login', async (req , res) => {
    const {email, password} = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ 
        message: 'Usuário não encontrado' 
    });
    const valido = await bcrypt.compare(password, usuario.senha);
    if (!valido) return res.status(400).json({
        message: 'Senha incorreta' 
    });

    const token = jwt.sign(
        {id: usuario._id, tipoUsuario: usuario.tipoUsuario },
        SECRET_KEY,
        {expiresIn: '1h'}
    );

    // if(password !== usuario.senha) return res.status(400).json({message: 'Senha incorreta' }); metodo sem usar
    res.status(200).json({
        message: 'Logado com sucesso',
        token,
        usuarioId: usuario._id, 
        nome: usuario.nome, 
        tipoUsuario:usuario.tipoUsuario
    });
});
module.exports = router;

router.post ('/RegistroUser', async (req , res) => {
    const {nome, email, password, tipoUsuario, endereco} = req.body;

    const usuarioExistente = await User.findOne({email});
    if (usuarioExistente) {
        return res.status(400).json({message: 'Email em uso'});
    }

    const salt = await bcrypt.genSalt(10);
    const senhaSecreta = await bcrypt.hash(password, salt);

    const novoUsuario = new User ({
        nome,
        email,
        senha: senhaSecreta,
        tipoUsuario,
        endereco,
    });
    await novoUsuario.save();
    res.status(201).json({message: 'Registrado com sucesso'});

});
module.exports = router;