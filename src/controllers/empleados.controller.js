const empleadoCtrl = {};

// Obtener todos los empleados
empleadoCtrl.getPrueba = (req, res) => {
  res.send("get PRUEBA");
};
empleadoCtrl.getEmpleados = (req, res) => {
  res.send("get empleddados");
};

// Crear un nuevo empleado
empleadoCtrl.createEmpleado= async(req,res)=>{ const empleado=new Empleado({
  nombre: req.body.nombre, cargo: req.body.cargo,
  departamento:req.body.departamento, sueldo:req.body.sueldo
  });
  console.log(empleado); await empleado.save();
  res.json('status: Datos guardados');
  }
  

// Obtener un empleado por su ID
empleadoCtrl.getEmpleado = (req, res) => {
  // Aquí puedes escribir el código para obtener un empleado por su ID desde la base de datos
};

// Editar un empleado por su ID
empleadoCtrl.editEmpleado = (req, res) => {
  // Aquí puedes escribir el código para editar un empleado por su ID en la base de datos
};

// Eliminar un empleado por su ID
empleadoCtrl.deleteEmpleado = (req, res) => {
  // Aquí puedes escribir el código para eliminar un empleado por su ID desde la base de datos
};

module.exports = empleadoCtrl;

// const Empleado = require("../models/Empleado");

// const empleadoCtrl = {
//   getEmpleados: async (req, res) => {
//     try {
//       const empleados = await Empleado.find();
//       res.json(empleados);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener los empleados" });
//     }
//   },

//   createEmpleado: async (req, res) => {
//     try {
//       const nuevoEmpleado = new Empleado(req.body);
//       await nuevoEmpleado.save();
//       res.status(201).json({ mensaje: "Empleado creado con éxito" });
//     } catch (error) {
//       res.status(500).json({ error: "Error al crear el empleado" });
//     }
//   },

//   getEmpleado: async (req, res) => {
//     try {
//       const empleado = await Empleado.findById(req.params.id);
//       if (!empleado) {
//         return res.status(404).json({ error: "Empleado no encontrado" });
//       }
//       res.json(empleado);
//     } catch (error) {
//       res.status(500).json({ error: "Error al obtener el empleado" });
//     }
//   },

//   editEmpleado: async (req, res) => {
//     try {
//       await Empleado.findByIdAndUpdate(req.params.id, req.body, { new: true });
//       res.json({ mensaje: "Empleado actualizado con éxito" });
//     } catch (error) {
//       res.status(500).json({ error: "Error al actualizar el empleado" });
//     }
//   },

//   deleteEmpleado: async (req, res) => {
//     try {
//       await Empleado.findByIdAndRemove(req.params.id);
//       res.json({ mensaje: "Empleado eliminado con éxito" });
//     } catch (error) {
//       res.status(500).json({ error: "Error al eliminar el empleado" });
//     }
//   },
//   prueba: (req, res) => {
//     res.json({ mensaje: "Esta es una prueba exitosa" });
//   },
// };

// module.exports = empleadoCtrl;
