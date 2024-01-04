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

router.get('/pesquisarespadas', (req, res) => {
    Espada.findAll().then(espada => {
        res.json(JSON.stringify(espada))
    })
})

module.exports = router;