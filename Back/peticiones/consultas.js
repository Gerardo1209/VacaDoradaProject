const express = require('express')
const {body, validationResult} = require('express-validator')
const router = express.Router()
const sql = require('../conection')

app.get('/platillos', (req, res) => {
    sql.query(`Select * from Platillo`, (sqlErr,sqlRes)=>{
        if(sqlErr){
            res.send({success:false, err:sqlErr.message})
            return
        }
        res.send(sqlRes)
    })
  });

  module.exports = router;