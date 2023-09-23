const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Configuración
app.set('puerto', process.env.PORT || 3000);
app.set('nombreApp', 'Gestión de empleados');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas (las crearás más adelante)

module.exports = app;
