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

router.post('/atualizarespada/:id', (req, res) => {
    const id = req.params.id;
    const { nome, dano, elemento } = req.body;
    Espada.findByPk(id).then(espada => {
        if (!espada) {
            return res.status(404).send("Espada não encontrada!");
        } else {
            Espada.update({
                nome: nome || espada.nome,
                dano: dano || espada.dano,
                elemento: elemento || espada.elemento
            }, { where: { id: id } })
            res.send("Espada atualizada!");
        }
    })
})

router.delete('/deletarespada/:id', (req, res) => {
    const id = req.params.id;
    Espada.destroy({ where: { id: id } }).then(() => {
        res.send(`Espada deletada!`);
    })
})


module.exports = router;