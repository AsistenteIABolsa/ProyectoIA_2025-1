const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["student", "empresario", "admin"], required: true },
  
  // Datos específicos según el rol
  studentId: { type: String, required: function () { return this.role === "student"; } },
  major: { type: String },
  graduationYear: { type: Number },
  
  companyName: { type: String, required: function () { return this.role === "employer"; } },
  industry: { type: String },
  companySize: { type: String },
  
  adminId: { type: String, required: function () { return this.role === "admin"; } },
  department: { type: String },
  accessLevel: { type: String }
}, { timestamps: true });

// Middleware para encriptar la contraseña antes de guardar
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Student = mongoose.model("Estudiantes", UserSchema);
const Empresario = mongoose.model("Empresarios", UserSchema);
const Admin = mongoose.model("Administradores", UserSchema);

module.exports = { Student, Empresario, Admin };

