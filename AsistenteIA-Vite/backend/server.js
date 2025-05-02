const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", authRoutes);
app.use("/api", jobsRoutes);

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  ssl: true,
 // prueba esto si estás en Windows y te lanza error de certificados
})

.then(() => {
  console.log("🚀 Conectado a MongoDB");
  app.listen(PORT, () => console.log(`✅ Servidor corriendo en el puerto ${PORT}`));
  console.log("se conecto")
})
.catch(error => console.error("Error de conexión a MongoDB:", error));
