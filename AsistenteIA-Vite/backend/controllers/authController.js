const { Student, Empresario, Admin } = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Registro de usuario
exports.register = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body); 
    const {
      firstName,
      lastName,
      email,
      password,
      role,
      studentId,
      major,
      graduationYear,
      companyName,
      industry,
      companySize,
      adminId,
      department,
      accessLevel
    } = req.body;

    // Verificar si el correo ya está registrado (en todas las colecciones)
    const existsInStudent = await Student.findOne({ email });
    const existsInEmpresario = await Empresario.findOne({ email });
    const existsInAdmin = await Admin.findOne({ email });

    if (existsInStudent || existsInEmpresario || existsInAdmin) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    let newUser;

    if (role === "student") {
      newUser = new Student({ firstName, lastName, email, password, role, studentId, major, graduationYear });
    } else if (role === "empresario") {
      newUser = new Empresario({ firstName, lastName, email, password, role, companyName, industry, companySize });
    } else if (role === "admin") {
      newUser = new Admin({ firstName, lastName, email, password, role, adminId, department, accessLevel });
    } else {
      return res.status(400).json({ message: "Rol no válido" });
    }

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado con éxito" });

  } catch (error) {
    console.error("❌ Error al registrar:", error.message);
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;

    // Selección del modelo según el rol
    if (role === "student") {
      user = await Student.findOne({ email });
    } else if (role === "employer") {
      user = await Empresario.findOne({ email });
    } else if (role === "admin") {
      user = await Admin.findOne({ email });
    } else {
      return res.status(400).json({ message: "Rol no válido" });
    }

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "2h"
    });

    res.status(200).json({ message: "Login exitoso", token, user });
  } catch (error) {
    console.error("❌ Error en login:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};