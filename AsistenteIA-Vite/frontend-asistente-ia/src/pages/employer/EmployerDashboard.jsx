import { Link } from "react-router-dom"

export default function EmployerDashboard() {
  // Datos de ejemplo
  const activeJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      applications: 12,
      posted: "15 de marzo, 2025",
      status: "Activa",
      views: 145,
      location: "Ciudad de México",
      type: "Tiempo completo",
    },
    {
      id: 2,
      title: "Desarrollador Backend",
      applications: 8,
      posted: "10 de marzo, 2025",
      status: "Activa",
      views: 98,
      location: "Guadalajara",
      type: "Medio tiempo",
    },
    {
      id: 3,
      title: "Diseñador UX/UI",
      applications: 5,
      posted: "18 de marzo, 2025",
      status: "Activa",
      views: 76,
      location: "Ciudad de México",
      type: "Tiempo completo",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      name: "Ana Rodríguez",
      position: "Desarrollador Frontend",
      date: "20 de marzo, 2025",
      status: "Revisión pendiente",
      university: "Universidad Nacional",
      major: "Ingeniería en Sistemas",
    },
    {
      id: 2,
      name: "Carlos Méndez",
      position: "Desarrollador Frontend",
      date: "19 de marzo, 2025",
      status: "Revisión pendiente",
      university: "Universidad Tecnológica",
      major: "Ciencias de la Computación",
    },
    {
      id: 3,
      name: "Laura Sánchez",
      position: "Desarrollador Backend",
      date: "18 de marzo, 2025",
      status: "Entrevista programada",
      university: "Universidad Autónoma",
      major: "Ingeniería en Software",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard de Empleador</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/employer/dashboard" className="btn btn-primary">
            Dashboard
          </Link>
          <Link to="/employer/jobs/new" className="btn btn-outline">
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

      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenido, TechCorp Solutions</h2>
        <p className="mb-4">Aquí puedes ver un resumen de tus vacantes y aplicaciones</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Vacantes activas</h3>
            <p className="text-3xl font-bold mb-1">3</p>
            <p className="text-sm text-text-light">+1 nueva esta semana</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Aplicaciones recibidas</h3>
            <p className="text-3xl font-bold mb-1">25</p>
            <p className="text-sm text-text-light">+8 nuevas esta semana</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Entrevistas programadas</h3>
            <p className="text-3xl font-bold mb-1">4</p>
            <p className="text-sm text-text-light">Próxima: 22 de marzo</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Candidatos contratados</h3>
            <p className="text-3xl font-bold mb-1">2</p>
            <p className="text-sm text-text-light">Este año</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Vacantes Activas</h2>
          <Link to="/employer/jobs/new">
            <button className="btn btn-primary">Publicar Nueva Vacante</button>
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Título</th>
                <th className="p-3 text-left">Ubicación</th>
                <th className="p-3 text-left">Tipo</th>
                <th className="p-3 text-left">Publicada</th>
                <th className="p-3 text-left">Aplicaciones</th>
                <th className="p-3 text-left">Vistas</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {activeJobs.map((job) => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{job.title}</td>
                  <td className="p-3">{job.location}</td>
                  <td className="p-3">{job.type}</td>
                  <td className="p-3">{job.posted}</td>
                  <td className="p-3">{job.applications}</td>
                  <td className="p-3">{job.views}</td>
                  <td className="p-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{job.status}</span>
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
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Aplicaciones Recientes</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Candidato</th>
                <th className="p-3 text-left">Universidad</th>
                <th className="p-3 text-left">Carrera</th>
                <th className="p-3 text-left">Posición</th>
                <th className="p-3 text-left">Fecha</th>
                <th className="p-3 text-left">Estado</th>
                <th className="p-3 text-left">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {recentApplications.map((app) => (
                <tr key={app.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 font-medium">{app.name}</td>
                  <td className="p-3">{app.university}</td>
                  <td className="p-3">{app.major}</td>
                  <td className="p-3">{app.position}</td>
                  <td className="p-3">{app.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        app.status === "Revisión pendiente"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button className="btn btn-outline py-1 px-2 text-sm">Ver CV</button>
                      <button className="btn btn-primary py-1 px-2 text-sm">Contactar</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

