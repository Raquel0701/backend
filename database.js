const mongoose = require("mongoose");

// Corrige la URL de conexión
const URI = "mongodb://127.0.0.1/usuarios_db";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("Conexión exitosa a la base de datos"))
  .catch((err) => console.error("Error de conexión a la base de datos:", err));

module.exports = mongoose;
