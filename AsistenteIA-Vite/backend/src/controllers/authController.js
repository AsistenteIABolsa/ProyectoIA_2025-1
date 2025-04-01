const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Registro de usuario
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role, studentId, major, graduationYear, companyName, industry, companySize, adminId, department, accessLevel } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Crear nuevo usuario
    const newUser = new User({
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
    });

    await newUser.save();
    res.status(201).json({ message: "Usuario registrado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Verificar si el usuario existe
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Correo o contraseña incorrectos" });
    }

    // Comparar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Correo o contraseña incorrectos" });
    }

    // Generar token JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.status(200).json({ message: "Inicio de sesión exitoso", token, user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email: user.email, role: user.role } });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};
