// Importa los paquetes necesarios
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');
// Habilita CORS
app.use(cors());
// Crea una conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 20,
  enableKeepAlive: true
});

// Conecta a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
const PORT = process.env.PORT || 3000; // Puerto de tu aplicación, 3000 es un ejemplo




// Define más rutas según sea necesario



