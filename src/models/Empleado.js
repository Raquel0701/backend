const { Schema, model } = require("mongoose");
const empleadoSchema = new Schema(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    departamento: { type: String, required: true },
    sueldo: { type: Number, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Empleado", empleadoSchema);

// models/Empleado.js
// const mongoose = require('mongoose');

// const empleadoSchema = new mongoose.Schema(
//   {
//     nombre: { type: String, required: true },
//     cargo: { type: String, required: true },
//     departamento: { type: String, required: true },
//     sueldo: { type: Number, required: true }
//   },
//   {
//     timestamps: true,
//     versionKey: false
//   }
// );

// module.exports = mongoose.model('Empleado', empleadoSchema);
