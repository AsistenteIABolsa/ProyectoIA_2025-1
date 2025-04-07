"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const [activeTab, setActiveTab] = useState("student")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    studentId: "",
    major: "",
    graduationYear: "",
    companyName: "",
    industry: "",
    companySize: "",
    adminId: "",
    department: "",
    accessLevel: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
  
    const role = activeTab // para enviar si es student, employer o admin
    const payload = { ...formData, role }
  
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        throw new Error(data.message || "Error en el registro")
      }
  
      // Registro exitoso
      alert("Registro exitoso 🎉")
      navigate("/login")
    } catch (error) {
      alert("error al registrar")
    } finally {
      setIsLoading(false)
    }
  }
  

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">Únete a la plataforma de asistente IA universitario</p>
        </div>

        <div className="card">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Registro</h3>
            <p className="text-sm text-gray-600">Elige tu tipo de cuenta y completa tus datos</p>
          </div>

          <div className="flex w-full border-b mb-4">
            <button
              className={`flex-1 pb-2 text-center ${activeTab === "student" ? "border-b-2 border-primary font-medium" : ""}`}
              onClick={() => setActiveTab("student")}
            >
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <span>Estudiante</span>
              </div>
            </button>
            <button
              className={`flex-1 pb-2 text-center ${activeTab === "employer" ? "border-b-2 border-primary font-medium" : ""}`}
              onClick={() => setActiveTab("employer")}
            >
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                  <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                </svg>
                <span>Empleador</span>
              </div>
            </button>
            <button
              className={`flex-1 pb-2 text-center ${activeTab === "admin" ? "border-b-2 border-primary font-medium" : ""}`}
              onClick={() => setActiveTab("admin")}
            >
              <div className="flex justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>Admin</span>
              </div>
            </button>
          </div>

          {activeTab === "student" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Juan"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido</label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Pérez"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="juan.perez@universidad.edu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="studentId">ID de estudiante</label>
                <input
                  id="studentId"
                  name="studentId"
                  className="form-control"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="E12345678"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="major">Carrera</label>
                <select
                  id="major"
                  name="major"
                  className="form-control"
                  value={formData.major}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona tu carrera</option>
                  <option value="cs">Informática</option>
                  <option value="business">Administración</option>
                  <option value="engineering">Ingeniería</option>
                  <option value="arts">Artes y Humanidades</option>
                  <option value="science">Ciencias</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="graduationYear">Año de graduación esperado</label>
                <select
                  id="graduationYear"
                  name="graduationYear"
                  className="form-control"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona el año</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrarse como Estudiante"}
              </button>
            </form>
          )}

          {activeTab === "employer" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-group">
                <label htmlFor="companyName">Nombre de la empresa</label>
                <input
                  id="companyName"
                  name="companyName"
                  className="form-control"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Empresa S.A."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contactName">Nombre de contacto</label>
                <input
                  id="contactName"
                  name="contactName"
                  className="form-control"
                  value={formData.contactName}
                  onChange={handleChange}
                  placeholder="María López"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="maria.lopez@empresa.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry">Industria</label>
                <select
                  id="industry"
                  name="industry"
                  className="form-control"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona la industria</option>
                  <option value="tech">Tecnología</option>
                  <option value="finance">Finanzas</option>
                  <option value="healthcare">Salud</option>
                  <option value="education">Educación</option>
                  <option value="manufacturing">Manufactura</option>
                  <option value="retail">Comercio</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tamaño de la empresa</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="small"
                      name="companySize"
                      value="small"
                      checked={formData.companySize === "small"}
                      onChange={handleChange}
                    />
                    <label htmlFor="small">1-50 empleados</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="medium"
                      name="companySize"
                      value="medium"
                      checked={formData.companySize === "medium"}
                      onChange={handleChange}
                    />
                    <label htmlFor="medium">51-200 empleados</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="large"
                      name="companySize"
                      value="large"
                      checked={formData.companySize === "large"}
                      onChange={handleChange}
                    />
                    <label htmlFor="large">201-1000 empleados</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="enterprise"
                      name="companySize"
                      value="enterprise"
                      checked={formData.companySize === "enterprise"}
                      onChange={handleChange}
                    />
                    <label htmlFor="enterprise">Más de 1000 empleados</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrarse como Empleador"}
              </button>
            </form>
          )}

          {activeTab === "admin" && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="firstName">Nombre</label>
                  <input
                    id="firstName"
                    name="firstName"
                    className="form-control"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Admin"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Apellido</label>
                  <input
                    id="lastName"
                    name="lastName"
                    className="form-control"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Usuario"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="admin@universidad.edu"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-control"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  type="password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="adminId">ID de administrador</label>
                <input
                  id="adminId"
                  name="adminId"
                  className="form-control"
                  value={formData.adminId}
                  onChange={handleChange}
                  placeholder="A12345"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Departamento</label>
                <select
                  id="department"
                  name="department"
                  className="form-control"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona departamento</option>
                  <option value="it">TI</option>
                  <option value="Servicios de Carrera">Servicios de Carrera</option>
                  <option value="academic">Asuntos Académicos</option>
                  <option value="student">Servicios Estudiantiles</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nivel de acceso</label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="standard"
                      name="accessLevel"
                      value="standard"
                      checked={formData.accessLevel === "standard"}
                      onChange={handleChange}
                    />
                    <label htmlFor="standard">Estándar</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="elevated"
                      name="accessLevel"
                      value="elevated"
                      checked={formData.accessLevel === "elevated"}
                      onChange={handleChange}
                    />
                    <label htmlFor="elevated">Elevado</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="superadmin"
                      name="accessLevel"
                      value="superadmin"
                      checked={formData.accessLevel === "superadmin"}
                      onChange={handleChange}
                    />
                    <label htmlFor="superadmin">Super Administrador</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoading}>
                {isLoading ? "Registrando..." : "Registrarse como Administrador"}
              </button>
            </form>
          )}

          <div className="mt-4 text-center text-sm">
            <p>
              Al registrarte, aceptas nuestros{" "}
              <Link to="#" className="text-primary hover:underline">
                Términos de Servicio
              </Link>{" "}
              y{" "}
              <Link to="#" className="text-primary hover:underline">
                Política de Privacidad
              </Link>
            </p>
            <p className="mt-2">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

