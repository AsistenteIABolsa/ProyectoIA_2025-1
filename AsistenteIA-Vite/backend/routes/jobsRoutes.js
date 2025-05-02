const express = require("express");
const router = express.Router();
const Job = require("../models/jobModel");

// Ruta para crear un nuevo trabajo
router.post("/jobs", async (req, res) => {
  try {
    console.log("Solicitud POST recibida en /api/jobs");
    console.log("Body recibido:", req.body);

    const jobData = req.body;

    if (!jobData.title || !jobData.location || !jobData.jobType || !jobData.skills) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    const newJob = new Job(jobData);
    const savedJob = await newJob.save();

    res.status(201).json({ message: "Vacante publicada correctamente", job: savedJob });
  } catch (error) {
    console.error("Error al guardar vacante:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

module.exports = router;
