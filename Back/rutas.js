const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router();
const sql = require("./conection");
const altas = require('./peticiones/altas')
const bajas = require('./peticiones/bajas')
const cambios = require('./peticiones/cambios')
const consultas = require('./peticiones/consultas')

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
    let q = `SELECT CorreoElectronico, Nombre, Rol, Password FROM usuario WHERE CorreoElectronico="${body.CorreoElectronico}" AND contrasena="${body.contrasena}"`;
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
        res.send(sqlRes[0]);
    });
});

router.use('/alta', altas)
router.use('/baja', bajas)
router.use('/cambio', cambios)
router.use('/consulta', consultas)

module.exports = router;