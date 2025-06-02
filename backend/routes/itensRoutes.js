const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', async (req, res) => {
    try {
        const itens = await Item.find();
        res.json(itens);
    } catch (err) {
        res.status(500).json({ error: 'Erro ao buscar itens' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ error: 'Veículo não encontrado' });
        res.json(item);
    } catch (err) {
        res.status(500).json({ error: 'Erro no servidor' });
    }
});

router.post('/cadastroProduto', async (req, res) => {
    const { marca, modelo, cor, valor, descricao, status, ano, quilometragem, categoria, imagem, detalhesTecnicos } = req.body;

    const novoItem = new Item({
        marca,
        modelo,
        cor,
        valor,
        descricao,
        status,
        ano,
        quilometragem,
        categoria,
        imagem,
        detalhesTecnicos
    });

    await novoItem.save();
    res.status(201).json({ message: 'Veículo cadastrado.' });
});

module.exports = router;

