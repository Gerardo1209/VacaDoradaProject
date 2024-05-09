const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const sql = require('../connection')


router.post('/platillos', (req, res) => {
    // Lógica para agregar un nuevo platillo a la base de datos
    res.send('Agregar un nuevo platillo');
  });

  router.post('/altaCodigo', (req, res) => {
    //Inserta el codigo generado de la mesa en la BD
      const { newCodigo } = req.body;
      sql.query(`
      UPDATE Mesa
      SET codigo = '?'
      WHERE NoMesa=?;
      `, newIngredient, (sqlErr, sqlRes) => {
      if(sqlErr){
          res.send({success:false, err:sqlErr.message});
          return;
      }
      res.send({success: true, message: "Codigo actualizado correctamente"});
  });
});

module.exports = router