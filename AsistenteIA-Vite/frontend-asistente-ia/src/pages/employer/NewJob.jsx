"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function NewJob() {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    jobType: "",
    workMode: "",
    salaryMin: "",
    salaryMax: "",
    experience: "",
    education: "",
    description: "",
    responsibilities: "",
    requirements: "",
    benefits: "",
    skills: [],
  })
  const [currentSkill, setCurrentSkill] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSkillAdd = () => {
    if (currentSkill.trim() !== "") {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()],
      }))
      setCurrentSkill("")
    }
  }

  const handleSkillRemove = (index) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost:5000/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      console.log(data);
  
      if (res.ok) {
        alert("Vacante publicada correctamente");
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error("Error al enviar solicitud:", err);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Publicar Nueva Vacante</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/employer/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
          <Link to="/employer/jobs/new" className="btn btn-primary">
            Publicar Vacante
          </Link>
          <Link to="/employer/profile" className="btn btn-outline">
            Perfil de Empresa
          </Link>
          <Link to="/" className="btn btn-outline">
            Cerrar Sesión
          </Link>
        </nav>
      </header>

      <div className="card">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="title">Título de la Vacante *</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                placeholder="Ej. Desarrollador Frontend"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="location">Ubicación *</label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ej. Ciudad de México"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="jobType">Tipo de Empleo *</label>
              <select
                id="jobType"
                name="jobType"
                className="form-control"
                value={formData.jobType}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Tiempo completo">Tiempo completo</option>
                <option value="Medio tiempo">Medio tiempo</option>
                <option value="Prácticas">Prácticas</option>
                <option value="Proyecto">Proyecto</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="workMode">Modalidad de Trabajo *</label>
              <select
                id="workMode"
                name="workMode"
                className="form-control"
                value={formData.workMode}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Presencial">Presencial</option>
                <option value="Remoto">Remoto</option>
                <option value="Híbrido">Híbrido</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="salaryMin">Salario Mínimo (MXN)</label>
              <input
                type="number"
                id="salaryMin"
                name="salaryMin"
                className="form-control"
                value={formData.salaryMin}
                onChange={handleChange}
                placeholder="Ej. 15000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="salaryMax">Salario Máximo (MXN)</label>
              <input
                type="number"
                id="salaryMax"
                name="salaryMax"
                className="form-control"
                value={formData.salaryMax}
                onChange={handleChange}
                placeholder="Ej. 25000"
              />
            </div>

            <div className="form-group">
              <label htmlFor="experience">Experiencia Requerida *</label>
              <select
                id="experience"
                name="experience"
                className="form-control"
                value={formData.experience}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Sin experiencia">Sin experiencia</option>
                <option value="0-1 años">0-1 años</option>
                <option value="1-2 años">1-2 años</option>
                <option value="2-3 años">2-3 años</option>
                <option value="3-5 años">3-5 años</option>
                <option value="5+ años">5+ años</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="education">Nivel Educativo *</label>
              <select
                id="education"
                name="education"
                className="form-control"
                value={formData.education}
                onChange={handleChange}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Estudiante">Estudiante universitario</option>
                <option value="Pasante">Pasante</option>
                <option value="Licenciatura">Licenciatura</option>
                <option value="Maestría">Maestría</option>
                <option value="Doctorado">Doctorado</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción de la Vacante *</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe la vacante y el rol que desempeñará el candidato..."
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="responsibilities">Responsabilidades *</label>
            <textarea
              id="responsibilities"
              name="responsibilities"
              rows="4"
              className="form-control"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder="Lista las principales responsabilidades del puesto..."
              required
            ></textarea>
            <p className="text-sm text-text-light mt-1">Separa cada responsabilidad con un salto de línea</p>
          </div>

          <div className="form-group">
            <label htmlFor="requirements">Requisitos *</label>
            <textarea
              id="requirements"
              name="requirements"
              rows="4"
              className="form-control"
              value={formData.requirements}
              onChange={handleChange}
              placeholder="Lista los requisitos necesarios para el puesto..."
              required
            ></textarea>
            <p className="text-sm text-text-light mt-1">Separa cada requisito con un salto de línea</p>
          </div>

          <div className="form-group">
            <label htmlFor="benefits">Beneficios</label>
            <textarea
              id="benefits"
              name="benefits"
              rows="4"
              className="form-control"
              value={formData.benefits}
              onChange={handleChange}
              placeholder="Lista los beneficios que ofrece la empresa..."
            ></textarea>
            <p className="text-sm text-text-light mt-1">Separa cada beneficio con un salto de línea</p>
          </div>

          <div className="form-group">
            <label>Habilidades Requeridas *</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="form-control"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                placeholder="Ej. JavaScript"
              />
              <button type="button" className="btn btn-outline" onClick={handleSkillAdd}>
                Añadir
              </button>
            </div>

            {formData.skills.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                    <span>{skill}</span>
                    <button
                      type="button"
                      onClick={() => handleSkillRemove(index)}
                      className="text-blue-800 hover:text-blue-900"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <Link to="/employer/dashboard">
              <button type="button" className="btn btn-outline">
                Cancelar
              </button>
            </Link>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Publicando..." : "Publicar Vacante"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

