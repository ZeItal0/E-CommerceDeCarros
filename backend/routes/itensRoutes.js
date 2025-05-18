const express = require('express');
const router = express.Router();
const Item = require('../models/item')

router.get('/', async (req, res) => {
    const itens = await Item.find();
    res.json(itens);
});
module.exports = router;
