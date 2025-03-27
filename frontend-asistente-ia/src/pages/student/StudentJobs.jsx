"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function StudentJobs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filters, setFilters] = useState({
    location: "",
    jobType: [],
    experience: [],
    salary: "",
  })

  // Datos de ejemplo
  const jobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp Solutions",
      location: "Ciudad de México",
      type: "Tiempo completo",
      salary: "$18,000 - $25,000 MXN",
      experience: "0-2 años",
      posted: "Hace 2 días",
      description: "Estamos buscando un Desarrollador Frontend talentoso para unirse a nuestro equipo de ingeniería...",
      skills: ["JavaScript", "React", "HTML/CSS", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "Desarrollador Backend",
      company: "Innovatech",
      location: "Guadalajara",
      type: "Medio tiempo",
      salary: "$15,000 - $20,000 MXN",
      experience: "0-1 años",
      posted: "Hace 3 días",
      description: "Buscamos un Desarrollador Backend para trabajar en nuestros servicios y APIs...",
      skills: ["Node.js", "Express", "MongoDB", "API REST"],
    },
    {
      id: 3,
      title: "Desarrollador Full Stack",
      company: "DataSys",
      location: "Monterrey",
      type: "Tiempo completo",
      salary: "$25,000 - $35,000 MXN",
      experience: "1-3 años",
      posted: "Hace 1 semana",
      description: "Únete a nuestro equipo como Desarrollador Full Stack para trabajar en proyectos desafiantes...",
      skills: ["JavaScript", "React", "Node.js", "SQL", "AWS"],
    },
    {
      id: 4,
      title: "Diseñador UX/UI",
      company: "CreativeMinds",
      location: "Ciudad de México",
      type: "Tiempo completo",
      salary: "$20,000 - $28,000 MXN",
      experience: "0-2 años",
      posted: "Hace 5 días",
      description: "Buscamos un Diseñador UX/UI creativo para diseñar interfaces de usuario intuitivas...",
      skills: ["Figma", "Adobe XD", "Sketch", "Diseño Responsivo"],
    },
    {
      id: 5,
      title: "Analista de Datos",
      company: "DataInsights",
      location: "Querétaro",
      type: "Tiempo completo",
      salary: "$22,000 - $30,000 MXN",
      experience: "0-2 años",
      posted: "Hace 1 día",
      description: "Estamos buscando un Analista de Datos para ayudarnos a extraer insights valiosos...",
      skills: ["SQL", "Excel", "Power BI", "Python", "Estadística"],
    },
    {
      id: 6,
      title: "Desarrollador Mobile",
      company: "AppFactory",
      location: "Guadalajara",
      type: "Tiempo completo",
      salary: "$20,000 - $30,000 MXN",
      experience: "1-2 años",
      posted: "Hace 4 días",
      description: "Buscamos un Desarrollador Mobile para crear aplicaciones nativas para iOS y Android...",
      skills: ["React Native", "Swift", "Kotlin", "Firebase"],
    },
  ]

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target

    if (type === "checkbox") {
      setFilters((prev) => {
        const currentValues = [...prev[name]]
        if (checked) {
          return { ...prev, [name]: [...currentValues, value] }
        } else {
          return { ...prev, [name]: currentValues.filter((item) => item !== value) }
        }
      })
    } else {
      setFilters((prev) => ({ ...prev, [name]: value }))
    }
  }

  const resetFilters = () => {
    setFilters({
      location: "",
      jobType: [],
      experience: [],
      salary: "",
    })
    setSearchTerm("")
  }

  // Filtrar trabajos
  const filteredJobs = jobs.filter((job) => {
    // Filtro por término de búsqueda
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    // Filtro por ubicación
    const matchesLocation = filters.location === "" || job.location === filters.location

    // Filtro por tipo de trabajo
    const matchesJobType = filters.jobType.length === 0 || filters.jobType.includes(job.type)

    // Filtro por experiencia
    const matchesExperience = filters.experience.length === 0 || filters.experience.includes(job.experience)

    // Filtro por salario (simplificado)
    const matchesSalary = filters.salary === "" || true // Implementar lógica real según necesidades

    return matchesSearch && matchesLocation && matchesJobType && matchesExperience && matchesSalary
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Buscar Vacantes</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/student/dashboard" className="btn btn-outline">
            Dashboard
          </Link>
          <Link to="/student/profile" className="btn btn-outline">
            Mi Perfil
          </Link>
          <Link to="/student/jobs" className="btn btn-primary">
            Buscar Vacantes
          </Link>
          <Link to="/" className="btn btn-outline">
            Cerrar Sesión
          </Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filtros */}
        <div className="lg:col-span-1">
          <div className="card sticky top-4">
            <h2 className="text-xl font-bold mb-4">Filtros</h2>

            <div className="form-group">
              <label htmlFor="location">Ubicación</label>
              <select
                id="location"
                name="location"
                className="form-control"
                value={filters.location}
                onChange={handleFilterChange}
              >
                <option value="">Todas las ubicaciones</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Guadalajara">Guadalajara</option>
                <option value="Monterrey">Monterrey</option>
                <option value="Querétaro">Querétaro</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tipo de Empleo</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="fullTime"
                    name="jobType"
                    value="Tiempo completo"
                    checked={filters.jobType.includes("Tiempo completo")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="fullTime">Tiempo completo</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="partTime"
                    name="jobType"
                    value="Medio tiempo"
                    checked={filters.jobType.includes("Medio tiempo")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="partTime">Medio tiempo</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="internship"
                    name="jobType"
                    value="Prácticas"
                    checked={filters.jobType.includes("Prácticas")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="internship">Prácticas</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Experiencia</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="exp0-1"
                    name="experience"
                    value="0-1 años"
                    checked={filters.experience.includes("0-1 años")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="exp0-1">0-1 años</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="exp0-2"
                    name="experience"
                    value="0-2 años"
                    checked={filters.experience.includes("0-2 años")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="exp0-2">0-2 años</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="exp1-3"
                    name="experience"
                    value="1-3 años"
                    checked={filters.experience.includes("1-3 años")}
                    onChange={handleFilterChange}
                    className="mr-2"
                  />
                  <label htmlFor="exp1-3">1-3 años</label>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="salary">Salario</label>
              <select
                id="salary"
                name="salary"
                className="form-control"
                value={filters.salary}
                onChange={handleFilterChange}
              >
                <option value="">Cualquier salario</option>
                <option value="0-15000">Hasta $15,000 MXN</option>
                <option value="15000-25000">$15,000 - $25,000 MXN</option>
                <option value="25000-35000">$25,000 - $35,000 MXN</option>
                <option value="35000+">Más de $35,000 MXN</option>
              </select>
            </div>

            <button className="btn btn-outline w-full mt-4" onClick={resetFilters}>
              Limpiar Filtros
            </button>
          </div>
        </div>

        {/* Resultados */}
        <div className="lg:col-span-3">
          <div className="mb-6">
            <div className="form-group">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por título, empresa o palabras clave..."
                  className="form-control pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-text-light">{filteredJobs.length} vacantes encontradas</p>
          </div>

          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="card hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold mb-1">
                        <Link to={`/student/jobs/${job.id}`} className="hover:text-primary">
                          {job.title}
                        </Link>
                      </h3>
                      <p className="text-lg mb-2">{job.company}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{job.location}</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{job.type}</span>
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{job.experience}</span>
                      </div>
                      <p className="text-text-light mb-2">{job.salary}</p>
                      <p className="mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link to={`/student/jobs/${job.id}`}>
                        <button className="btn btn-primary w-full">Ver detalles</button>
                      </Link>
                      <p className="text-sm text-text-light text-center">{job.posted}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-4 text-text-light"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No se encontraron resultados</h3>
              <p className="text-text-light mb-4">Intenta con otros términos de búsqueda o ajusta los filtros</p>
              <button className="btn btn-primary" onClick={resetFilters}>
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

