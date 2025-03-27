"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  // Datos de ejemplo
  const stats = {
    students: 1245,
    employers: 87,
    jobs: 156,
    applications: 892,
    interviews: 215,
    placements: 68,
  }

  const recentUsers = [
    {
      id: 1,
      name: "Juan Pérez",
      email: "juan.perez@universidad.edu",
      type: "Estudiante",
      date: "20 de marzo, 2025",
      status: "Activo",
    },
    {
      id: 2,
      name: "TechCorp Solutions",
      email: "reclutamiento@techcorp.com",
      type: "Empleador",
      date: "18 de marzo, 2025",
      status: "Activo",
    },
    {
      id: 3,
      name: "María González",
      email: "maria.gonzalez@universidad.edu",
      type: "Estudiante",
      date: "15 de marzo, 2025",
      status: "Activo",
    },
    {
      id: 4,
      name: "Innovatech",
      email: "rh@innovatech.com",
      type: "Empleador",
      date: "12 de marzo, 2025",
      status: "Activo",
    },
    {
      id: 5,
      name: "Carlos Ramírez",
      email: "carlos.ramirez@universidad.edu",
      type: "Estudiante",
      date: "10 de marzo, 2025",
      status: "Inactivo",
    },
  ]

  const recentJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp Solutions",
      date: "15 de marzo, 2025",
      applications: 12,
      status: "Activa",
    },
    {
      id: 2,
      title: "Desarrollador Backend",
      company: "Innovatech",
      date: "10 de marzo, 2025",
      applications: 8,
      status: "Activa",
    },
    {
      id: 3,
      title: "Diseñador UX/UI",
      company: "CreativeMinds",
      date: "8 de marzo, 2025",
      applications: 5,
      status: "Activa",
    },
    {
      id: 4,
      title: "Analista de Datos",
      company: "DataInsights",
      date: "5 de marzo, 2025",
      applications: 7,
      status: "Activa",
    },
    {
      id: 5,
      title: "Desarrollador Mobile",
      company: "AppFactory",
      date: "1 de marzo, 2025",
      applications: 10,
      status: "Cerrada",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard de Administrador</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/admin/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
          <Link to="/admin/users" className="btn btn-outline">
            Usuarios
          </Link>
          <Link to="/admin/jobs" className="btn btn-outline">
            Vacantes
          </Link>
          <Link to="/admin/reports" className="btn btn-outline">
            Reportes
          </Link>
          <Link to="/" className="btn btn-outline">
            Cerrar Sesión
          </Link>
        </nav>
      </header>

      <div className="mb-6">
        <div className="flex border-b">
          <button
            className={`px-4 py-2 font-medium ${activeTab === "overview" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Resumen
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "users" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("users")}
          >
            Usuarios Recientes
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === "jobs" ? "border-b-2 border-primary" : ""}`}
            onClick={() => setActiveTab("jobs")}
          >
            Vacantes Recientes
          </button>
        </div>
      </div>

      {activeTab === "overview" && (
        <div>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Resumen de la Plataforma</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Estudiantes Registrados</h3>
                <p className="text-3xl font-bold mb-1">{stats.students}</p>
                <p className="text-sm text-text-light">+45 este mes</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Empresas Registradas</h3>
                <p className="text-3xl font-bold mb-1">{stats.employers}</p>
                <p className="text-sm text-text-light">+8 este mes</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Vacantes Publicadas</h3>
                <p className="text-3xl font-bold mb-1">{stats.jobs}</p>
                <p className="text-sm text-text-light">+23 este mes</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Aplicaciones</h3>
                <p className="text-3xl font-bold mb-1">{stats.applications}</p>
                <p className="text-sm text-text-light">+112 este mes</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Entrevistas</h3>
                <p className="text-3xl font-bold mb-1">{stats.interviews}</p>
                <p className="text-sm text-text-light">+35 este mes</p>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold mb-2">Contrataciones</h3>
                <p className="text-3xl font-bold mb-1">{stats.placements}</p>
                <p className="text-sm text-text-light">+12 este mes</p>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Usuarios Recientes</h3>
                <button className="btn btn-outline">Ver todos</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Nombre</th>
                      <th className="p-2 text-left">Tipo</th>
                      <th className="p-2 text-left">Fecha</th>
                      <th className="p-2 text-left">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentUsers.slice(0, 3).map((user) => (
                      <tr key={user.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{user.name}</td>
                        <td className="p-2">{user.type}</td>
                        <td className="p-2">{user.date}</td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              user.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {user.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Vacantes Recientes</h3>
                <button className="btn btn-outline">Ver todas</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Título</th>
                      <th className="p-2 text-left">Empresa</th>
                      <th className="p-2 text-left">Aplicaciones</th>
                      <th className="p-2 text-left">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentJobs.slice(0, 3).map((job) => (
                      <tr key={job.id} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{job.title}</td>
                        <td className="p-2">{job.company}</td>
                        <td className="p-2">{job.applications}</td>
                        <td className="p-2">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              job.status === "Activa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                            }`}
                          >
                            {job.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "users" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Usuarios Recientes</h2>
            <div>
              <button className="btn btn-outline mr-2">Exportar</button>
              <button className="btn btn-primary">Añadir Usuario</button>
            </div>
          </div>

          <div className="card">
            <div className="mb-4">
              <input type="text" placeholder="Buscar usuarios..." className="form-control" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Nombre</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Tipo</th>
                    <th className="p-3 text-left">Fecha de Registro</th>
                    <th className="p-3 text-left">Estado</th>
                    <th className="p-3 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentUsers.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{user.name}</td>
                      <td className="p-3">{user.email}</td>
                      <td className="p-3">{user.type}</td>
                      <td className="p-3">{user.date}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            user.status === "Activo" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button className="btn btn-outline py-1 px-2 text-sm">Ver</button>
                          <button className="btn btn-outline py-1 px-2 text-sm">Editar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-text-light">Mostrando 1-5 de 1245 usuarios</p>
              <div className="flex gap-2">
                <button className="btn btn-outline py-1 px-3">Anterior</button>
                <button className="btn btn-primary py-1 px-3">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "jobs" && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Vacantes Recientes</h2>
            <div>
              <button className="btn btn-outline mr-2">Exportar</button>
              <button className="btn btn-primary">Añadir Vacante</button>
            </div>
          </div>

          <div className="card">
            <div className="mb-4">
              <input type="text" placeholder="Buscar vacantes..." className="form-control" />
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left">Título</th>
                    <th className="p-3 text-left">Empresa</th>
                    <th className="p-3 text-left">Fecha de Publicación</th>
                    <th className="p-3 text-left">Aplicaciones</th>
                    <th className="p-3 text-left">Estado</th>
                    <th className="p-3 text-left">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentJobs.map((job) => (
                    <tr key={job.id} className="border-b hover:bg-gray-50">
                      <td className="p-3 font-medium">{job.title}</td>
                      <td className="p-3">{job.company}</td>
                      <td className="p-3">{job.date}</td>
                      <td className="p-3">{job.applications}</td>
                      <td className="p-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            job.status === "Activa" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}
                        >
                          {job.status}
                        </span>
                      </td>
                      <td className="p-3">
                        <div className="flex gap-2">
                          <button className="btn btn-outline py-1 px-2 text-sm">Ver</button>
                          <button className="btn btn-outline py-1 px-2 text-sm">Editar</button>
                          <button className="btn btn-outline py-1 px-2 text-sm text-red-500">Desactivar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-text-light">Mostrando 1-5 de 156 vacantes</p>
              <div className="flex gap-2">
                <button className="btn btn-outline py-1 px-3">Anterior</button>
                <button className="btn btn-primary py-1 px-3">Siguiente</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

