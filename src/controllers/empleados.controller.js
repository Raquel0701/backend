const Empleado = require("../models/Empleado"); 

const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo empleado
empleadoCtrl.createEmpleado = async (req, res) => {
  try {
    const { nombre, cargo, departamento, sueldo } = req.body;
    const nuevoEmpleado = new Empleado({
      nombre,
      cargo,
      departamento,
      sueldo,
    });
    await nuevoEmpleado.save();
    res.status(201).json({ mensaje: "Empleado creado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un empleado por su ID
empleadoCtrl.getEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
    res.json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Editar un empleado por su ID
empleadoCtrl.editEmpleado = async (req, res) => {
  try {
    const { nombre, cargo, departamento, sueldo } = req.body;
    await Empleado.findByIdAndUpdate(req.params.id, {
      nombre,
      cargo,
      departamento,
      sueldo,
    });
    res.json({ mensaje: "Empleado actualizado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un empleado por su ID
empleadoCtrl.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id);
    if (!empleado) {
      return res.status(404).json({ mensaje: "Empleado no encontrado" });
    }
    await Empleado.findByIdAndRemove(req.params.id); 
    res.json({ mensaje: "Empleado eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = empleadoCtrl;
