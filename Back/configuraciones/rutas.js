const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const sql = require("./connection");
const altas = require('./paquetes/altas')
const bajas = require('./paquetes/bajas')
const cambios = require('./paquetes/cambios')
const consultas = require('./paquetes/consultas')

router.post('/login',
[
    body('CorreoElectronico').not().isEmpty().isString(),
    body('contrasena').not().isEmpty().isString(),
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.json({success:false, err:JSON.stringify(errors)});
        return;
    }
    let body = req.body;
    console.log(body)
    let q = `SELECT * FROM Usuario WHERE CorreoElectronico="${body.CorreoElectronico}" AND Password="${body.contrasena}"`;
    sql.query(q, (sqlErr, sqlRes) => {
        if(sqlErr){
            console.log(sqlErr);
            res.send({success:false, err: sqlErr.message});
            return;
        }else if(sqlRes.length == 0){
            console.log(sqlRes);
            res.send({success:false});
            return;
        }
        console.log(sqlRes[0])
        res.send(sqlRes[0]);
    });
});
router.get('/', (req, res) => {
    res.send('¡Hola mundo!');
  });
router.use('/alta', altas)
router.use('/baja', bajas)
router.use('/cambio', cambios)
router.use('/consulta', consultas)

module.exports = router;