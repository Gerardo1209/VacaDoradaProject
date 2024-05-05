const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const sql = require('../connection')


router.post('/platillos', (req, res) => {
    // Lógica para agregar un nuevo platillo a la base de datos
    res.send('Agregar un nuevo platillo');
  });

module.exports = router