const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const sql = require('../connection')

router.get('/platillos', (req, res) => {
    sql.query(`Select * from Platillo;`, (sqlErr,sqlRes)=>{
        if(sqlErr){
            res.send({success:false, err:sqlErr.message})
            return
        }
        res.send(sqlRes)
    })
  });



//-------------------------------------------------------------------Vistas de ANA
  // Consulta para obtener los platillos pendientes de preparación
router.get('/platillos-pendientes', (req, res) => {
    sql.query(`
        SELECT Platillo.Nombre, DetalleComanda.Cantidad
        FROM DetalleComanda
        INNER JOIN Platillo ON DetalleComanda.IdPlatillo = Platillo.IdPlatillo
        INNER JOIN Comanda ON Comanda.IdComanda = DetalleComanda.IdComanda
        WHERE DetalleComanda.Estado = 'Por hacer';
    `, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send(sqlRes);
    });
});

// Consulta para obtener los detalles de un pedido específico
router.get('/detalle-pedido/:idComanda', (req, res) => {
    const idComanda = req.params.idComanda;
    sql.query(`
        SELECT Platillo.Nombre, DetalleComanda.Cantidad, DetalleComanda.Estado
        FROM DetalleComanda
        INNER JOIN Platillo ON DetalleComanda.IdPlatillo = Platillo.IdPlatillo
        WHERE DetalleComanda.IdComanda = ?
    `, idComanda, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send(sqlRes);
    });
});


// Consulta para obtener los ingredientes existentes
router.get('/ingredientes', (req, res) => {
    sql.query(`SELECT Nombre FROM Ingrediente`, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send(sqlRes);
    });
});

//Consulta para obtener los datos de las mesas
router.get('/mesas', (req,res) => {
    sql.query(`SELECT * FROM Mesa;`, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send(sqlRes);
    });
})



//----------------------------------------------------------------------------------------Pruebas



  module.exports = router;