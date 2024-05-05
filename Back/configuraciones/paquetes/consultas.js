const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const sql = require('../connection')

router.get('/platillos', (req, res) => {
    sql.query(`Select * from Platillo`, (sqlErr,sqlRes)=>{
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
        INNER JOIN Platillo ON DetalleComanda.IdPlato = Platillo.Id
        WHERE DetalleComanda.Estado = 'Por hacer'
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
        INNER JOIN Platillo ON DetalleComanda.IdPlato = Platillo.Id
        WHERE DetalleComanda.IdComanda = ?
    `, idComanda, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send(sqlRes);
    });
});

// Consulta para insertar un nuevo platillo
router.post('/nuevo-platillo', (req, res) => {
    const { dishType, dishName, price, dishDescription, dishImage, selectedIngredients } = req.body;

    sql.query(`
        INSERT INTO Platillo (Nombre, Tipo, Precio, Descripcion, Imagen)
        VALUES (?, ?, ?, ?, ?)
    `, [dishName, dishType, price, dishDescription, dishImage], (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        
        // Si hay ingredientes seleccionados, insertarlos en la tabla de relación PlatilloIngredientes
        if (selectedIngredients && selectedIngredients.length > 0) {
            const platilloId = sqlRes.insertId; // Obtener el ID del platillo recién insertado
            const ingredientesValues = selectedIngredients.map(ingrediente => [platilloId, ingrediente]);
            sql.query(`
                INSERT INTO PlatilloIngredientes (IdPlatillo, IdIngrediente)
                VALUES ?
            `, [ingredientesValues], (ingrErr, ingrRes) => {
                if (ingrErr) {
                    res.send({ success: false, err: ingrErr.message });
                    return;
                }
                res.send({ success: true, message: "Platillo registrado correctamente" });
            });
        } else {
            res.send({ success: true, message: "Platillo registrado correctamente" });
        }
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

// Consulta para insertar un nuevo ingrediente
router.post('/nuevo-ingrediente', (req, res) => {
    const { newIngredient } = req.body;
    sql.query(`
        INSERT INTO Ingrediente (Nombre)
        VALUES (?)
    `, newIngredient, (sqlErr, sqlRes) => {
        if(sqlErr){
            res.send({success:false, err:sqlErr.message});
            return;
        }
        res.send({success: true, message: "Ingrediente registrado correctamente"});
    });
});

//----------------------------------------------------------------------------------------Pruebas



  module.exports = router;