const express = require('express');
const router = express.Router();
const Item = require('../models/item')

router.get('/', async (req, res) => {
    const itens = await Item.find();
    res.json(itens);
});
module.exports = router;

router.get('/:id', async (req, res) =>{
    try {
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({error: 'Inexistente'});
        res.json(item);
    }catch (err) {
        res.status(500).json({error:'erro no server'});
    }
});
module.exports = router;

