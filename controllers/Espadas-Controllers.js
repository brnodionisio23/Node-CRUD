const express = require('express');
const router = express.Router();
const Espada = require('../models/Espada');

router.post('/salvarespada', (req, res) => {
    const { nome, dano, elemento } = req.body;
    Espada.create({
        nome: nome,
        dano: dano,
        elemento: elemento
    })
    res.send("Espada salva!");
})

module.exports = router;