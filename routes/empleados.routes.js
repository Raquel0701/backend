const express = require('express');
const router = express.Router();
const empleadoCtrl = require('../controllers/empleados.controller');

// Otras rutas existentes
router.post('/', empleadoCtrl.createEmpleado);
router.get('/:id', empleadoCtrl.getEmpleado);
router.put('/:id', empleadoCtrl.editEmpleado);
router.delete('/:id', empleadoCtrl.deleteEmpleado);

// Nueva ruta de prueba
router.get('/prueba', empleadoCtrl.prueba);

module.exports = router;
