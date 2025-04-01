"use client"

import { useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function JobDetail() {
  const { id } = useParams()
  const [isSaved, setIsSaved] = useState(false)
  const [isApplying, setIsApplying] = useState(false)

  // Datos de ejemplo
  const job = {
    id: Number(id),
    title: "Desarrollador Frontend",
    company: "TechCorp Solutions",
    location: "Ciudad de México",
    type: "Tiempo completo",
    mode: "Híbrido (3 días presencial)",
    salary: "$18,000 - $25,000 MXN",
    experience: "0-2 años",
    education: "Licenciatura",
    posted: "15 de marzo, 2025",
    description:
      "Estamos buscando un Desarrollador Frontend talentoso para unirse a nuestro equipo de ingeniería. Como Desarrollador Frontend, serás responsable de implementar interfaces de usuario visuales para nuestras aplicaciones web. Trabajarás en estrecha colaboración con diseñadores, desarrolladores backend y otros miembros del equipo para crear experiencias de usuario excepcionales.",
    responsibilities: [
      "Desarrollar interfaces de usuario responsivas utilizando React y Next.js",
      "Colaborar con diseñadores para implementar diseños y asegurar una experiencia de usuario consistente",
      "Optimizar aplicaciones para máxima velocidad y escalabilidad",
      "Implementar diseños responsivos y asegurar la compatibilidad entre navegadores",
      "Participar en revisiones de código y proporcionar comentarios constructivos a otros desarrolladores",
      "Mantenerse actualizado con las últimas tendencias y mejores prácticas en desarrollo frontend",
    ],
    requirements: [
      "Licenciatura en Ingeniería en Sistemas, Informática o campo relacionado",
      "Experiencia con React, Next.js y JavaScript moderno",
      "Conocimiento sólido de HTML, CSS y diseño responsivo",
      "Experiencia con Tailwind CSS o frameworks similares",
      "Familiaridad con herramientas de control de versiones como Git",
      "Capacidad para trabajar en equipo y comunicarse efectivamente",
      "Atención al detalle y compromiso con la calidad del código",
    ],
    benefits: [
      "Salario competitivo",
      "Horario flexible",
      "Oportunidades de crecimiento profesional",
      "Seguro médico",
      "Bonos por desempeño",
      "Ambiente de trabajo colaborativo",
    ],
    skills: ["JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Git", "Responsive Design"],
    companyDescription:
      "TechCorp Solutions es una empresa líder en desarrollo de software que ofrece soluciones innovadoras para empresas de todos los tamaños. Nuestro enfoque se centra en crear productos de alta calidad que resuelvan problemas reales.",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/student/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
          <Link to="/student/profile" className="btn btn-outline">
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

      <div className="mb-4">
        <Link to="/student/jobs" className="btn btn-outline mb-4">
          ← Volver a vacantes
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
          <p className="text-xl mb-2">{job.company}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{job.location}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{job.type}</span>
            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Recién egresado</span>
          </div>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <button className="btn btn-outline" onClick={() => setIsSaved(!isSaved)}>
            {isSaved ? "❤️ Guardado" : "🤍 Guardar"}
          </button>
          {!isApplying && (
            <button className="btn btn-primary" onClick={() => setIsApplying(true)}>
              Aplicar ahora
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="card mb-6">
            <h2 className="text-2xl font-bold mb-4">Descripción de la vacante</h2>
            <p className="mb-4">{job.description}</p>

            <h3 className="text-xl font-bold mb-2">Responsabilidades</h3>
            <ul className="list-disc pl-5 mb-4">
              {job.responsibilities.map((resp, index) => (
                <li key={index} className="mb-1">
                  {resp}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-2">Requisitos</h3>
            <ul className="list-disc pl-5 mb-4">
              {job.requirements.map((req, index) => (
                <li key={index} className="mb-1">
                  {req}
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-2">Beneficios</h3>
            <ul className="list-disc pl-5">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="mb-1">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="card mb-6">
            <h3 className="text-xl font-bold mb-4">Detalles de la vacante</h3>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Fecha de publicación</span>
              <span className="font-medium">{job.posted}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Ubicación</span>
              <span className="font-medium">{job.location}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Tipo de empleo</span>
              <span className="font-medium">{job.type}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Modalidad</span>
              <span className="font-medium">{job.mode}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Salario</span>
              <span className="font-medium">{job.salary}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Experiencia</span>
              <span className="font-medium">{job.experience}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light">Educación</span>
              <span className="font-medium">{job.education}</span>
            </div>
          </div>

          <div className="card mb-6">
            <h3 className="text-xl font-bold mb-4">Habilidades requeridas</h3>
            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold mb-4">Acerca de la empresa</h3>
            <p className="mb-4">{job.companyDescription}</p>
            <button className="btn btn-outline w-full">Ver perfil de la empresa</button>
          </div>
        </div>
      </div>

      {isApplying && (
        <div className="card mt-8">
          <h3 className="text-xl font-bold mb-4">Aplicar a esta vacante</h3>
          <p className="mb-4">Completa el formulario para enviar tu aplicación</p>

          <div className="form-group">
            <label>Carta de presentación</label>
            <textarea
              rows="6"
              className="form-control"
              placeholder="Escribe una breve carta de presentación explicando por qué eres un buen candidato para este puesto..."
            ></textarea>
            <p className="text-sm text-text-light mt-1">
              Tu carta de presentación debe ser concisa y destacar tus habilidades relevantes para el puesto.
            </p>
          </div>

          <div className="form-group">
            <label>Currículum</label>
            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">Juan_Perez_CV.pdf</p>
                <p className="text-sm text-text-light">Última actualización: 10 de marzo, 2025</p>
              </div>
              <button className="btn btn-outline">Cambiar</button>
            </div>
            <p className="text-sm text-text-light mt-1">
              Se utilizará la versión más reciente de tu CV. Puedes actualizarlo desde tu perfil.
            </p>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button className="btn btn-outline" onClick={() => setIsApplying(false)}>
              Cancelar
            </button>
            <button className="btn btn-primary">Enviar aplicación</button>
          </div>
        </div>
      )}
    </div>
  )
}

