"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function StudentProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "Juan",
    lastName: "Pérez",
    email: "juan.perez@universidad.edu",
    phone: "555-123-4567",
    studentId: "E12345678",
    major: "Ingeniería en Sistemas",
    graduationYear: "2025",
    about:
      "Estudiante de Ingeniería en Sistemas con interés en desarrollo web y aplicaciones móviles. Busco oportunidades para aplicar mis conocimientos y adquirir experiencia profesional.",
    skills: ["JavaScript", "React", "HTML/CSS", "Node.js", "Git", "SQL"],
    education: [
      {
        institution: "Universidad Nacional",
        degree: "Ingeniería en Sistemas",
        startDate: "2021",
        endDate: "2025",
        description: "Promedio: 9.2/10",
      },
    ],
    experience: [
      {
        company: "TechStart",
        position: "Desarrollador Web (Prácticas)",
        startDate: "Junio 2023",
        endDate: "Agosto 2023",
        description: "Desarrollo de interfaces de usuario con React. Colaboración en proyectos de e-commerce.",
      },
    ],
    projects: [
      {
        title: "Sistema de Gestión de Biblioteca",
        description: "Aplicación web para gestionar préstamos y devoluciones de libros en la biblioteca universitaria.",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://github.com/juanperez/biblioteca",
      },
    ],
    languages: [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado (B2)" },
    ],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSkillChange = (index, value) => {
    const newSkills = [...profileData.skills]
    newSkills[index] = value
    setProfileData((prev) => ({
      ...prev,
      skills: newSkills,
    }))
  }

  const addSkill = () => {
    setProfileData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
  }

  const removeSkill = (index) => {
    const newSkills = [...profileData.skills]
    newSkills.splice(index, 1)
    setProfileData((prev) => ({
      ...prev,
      skills: newSkills,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para guardar los cambios
    setIsEditing(false)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Mi Perfil</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/student/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
          <Link to="/student/profile" className="btn btn-primary">
            Mi Perfil
          </Link>
          <Link to="/student/jobs" className="btn btn-outline">
            Buscar Vacantes
          </Link>
          <Link to="/" className="btn btn-outline">
            Cerrar Sesión
          </Link>
        </nav>
      </header>

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Información Personal</h2>
        <button className="btn btn-primary" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancelar" : "Editar Perfil"}
        </button>
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card">
            <h3 className="text-xl font-bold mb-4">Datos Básicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={profileData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={profileData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={profileData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="studentId">ID de Estudiante</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  className="form-control"
                  value={profileData.studentId}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="major">Carrera</label>
                <input
                  type="text"
                  id="major"
                  name="major"
                  className="form-control"
                  value={profileData.major}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="graduationYear">Año de Graduación</label>
                <input
                  type="text"
                  id="graduationYear"
                  name="graduationYear"
                  className="form-control"
                  value={profileData.graduationYear}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Acerca de Mí</h3>
            <div className="form-group">
              <label htmlFor="about">Descripción</label>
              <textarea
                id="about"
                name="about"
                rows="4"
                className="form-control"
                value={profileData.about}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Habilidades</h3>
            <div className="space-y-2">
              {profileData.skills.map((skill, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="form-control"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                  <button type="button" className="btn btn-outline text-red-500" onClick={() => removeSkill(index)}>
                    Eliminar
                  </button>
                </div>
              ))}
              <button type="button" className="btn btn-outline" onClick={addSkill}>
                Añadir Habilidad
              </button>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button type="button" className="btn btn-outline" onClick={() => setIsEditing(false)}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Guardar Cambios
            </button>
          </div>
        </form>
      ) : (
        <div className="space-y-6">
          <div className="card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-4xl">
                  {profileData.firstName.charAt(0)}
                  {profileData.lastName.charAt(0)}
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-lg text-text-light mb-2">{profileData.major}</p>
                <p className="mb-4">{profileData.about}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-text-light">Correo Electrónico</p>
                    <p className="font-medium">{profileData.email}</p>
                  </div>
                  <div>
                    <p className="text-text-light">Teléfono</p>
                    <p className="font-medium">{profileData.phone}</p>
                  </div>
                  <div>
                    <p className="text-text-light">ID de Estudiante</p>
                    <p className="font-medium">{profileData.studentId}</p>
                  </div>
                  <div>
                    <p className="text-text-light">Año de Graduación</p>
                    <p className="font-medium">{profileData.graduationYear}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Educación</h3>
            {profileData.education.map((edu, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="text-lg font-bold">{edu.institution}</h4>
                <p className="text-text-light">
                  {edu.degree} | {edu.startDate} - {edu.endDate}
                </p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Experiencia</h3>
            {profileData.experience.length > 0 ? (
              profileData.experience.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <h4 className="text-lg font-bold">{exp.position}</h4>
                  <p className="text-text-light">
                    {exp.company} | {exp.startDate} - {exp.endDate}
                  </p>
                  <p>{exp.description}</p>
                </div>
              ))
            ) : (
              <p>No has añadido experiencia laboral aún.</p>
            )}
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Proyectos</h3>
            {profileData.projects.map((project, index) => (
              <div key={index} className="mb-4 last:mb-0">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-100 rounded-md text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block"
                  >
                    Ver proyecto
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Idiomas</h3>
            <div className="space-y-2">
              {profileData.languages.map((lang, index) => (
                <div key={index} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-text-light">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

