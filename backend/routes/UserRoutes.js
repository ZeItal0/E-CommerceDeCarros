const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');

router.post ('/login', async (req , res) => {
    const {email, password} = req.body;

    const usuario = await User.findOne({ email });
    if (!usuario) return res.status(400).json({ message: 'Usuário não encontrado' });
    const valido = await bcrypt.compare(password, usuario.senha);
    // if (!valido) return res.status(400).json({ message: 'Senha incorreta' });\\ aqui realiza a validacao do login porem tem criptografia\\
    if(password !== usuario.senha) return res.status(400).json({message: 'Senha incorreta' });
    res.status(200).json({message: 'Logado com sucesso', usuarioId: usuario._id, nome: usuario.nome, tipoUsuario:usuario.tipoUsuario});
});
module.exports = router;