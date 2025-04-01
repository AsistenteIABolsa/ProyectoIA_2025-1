import { Link } from "react-router-dom"

export default function StudentDashboard() {
  // Datos de ejemplo
  const recommendedJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend",
      company: "TechCorp Solutions",
      location: "Ciudad de México",
      type: "Tiempo completo",
    },
    { id: 2, title: "Desarrollador Backend", company: "Innovatech", location: "Guadalajara", type: "Medio tiempo" },
    { id: 3, title: "Desarrollador Full Stack", company: "DataSys", location: "Monterrey", type: "Tiempo completo" },
  ]

  const upcomingInterviews = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Desarrollador Frontend",
      date: "15 de marzo, 2025",
      time: "10:00 AM - 11:00 AM",
    },
    {
      id: 2,
      company: "Innovatech",
      position: "Desarrollador Full Stack",
      date: "18 de marzo, 2025",
      time: "2:00 PM - 3:30 PM",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard de Estudiante</h1>
        <nav className="flex flex-wrap gap-4 mb-4">
          <Link to="/student/dashboard" className="btn btn-primary">
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

      <section className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Bienvenido, Juan</h2>
        <p className="mb-4">Aquí puedes ver un resumen de tu actividad y oportunidades disponibles</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Aplicaciones activas</h3>
            <p className="text-3xl font-bold mb-1">4</p>
            <p className="text-sm text-text-light">+2 nuevas esta semana</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Entrevistas programadas</h3>
            <p className="text-3xl font-bold mb-1">2</p>
            <p className="text-sm text-text-light">Próxima: 15 de marzo</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Vacantes recomendadas</h3>
            <p className="text-3xl font-bold mb-1">12</p>
            <p className="text-sm text-text-light">Basadas en tu perfil</p>
          </div>

          <div className="card">
            <h3 className="text-lg font-semibold mb-2">Perfil completado</h3>
            <p className="text-3xl font-bold mb-1">85%</p>
            <p className="text-sm text-text-light">Añade certificaciones para mejorar</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Vacantes recomendadas</h2>
          <Link to="/student/jobs" className="btn btn-outline">
            Ver todas
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendedJobs.map((job) => (
            <div key={job.id} className="card">
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="mb-1">
                <strong>Empresa:</strong> {job.company}
              </p>
              <p className="mb-1">
                <strong>Ubicación:</strong> {job.location}
              </p>
              <p className="mb-4">
                <strong>Tipo:</strong> {job.type}
              </p>
              <Link to={`/student/jobs/${job.id}`}>
                <button className="btn btn-primary">Ver detalles</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Próximas entrevistas</h2>
        <div className="card">
          {upcomingInterviews.map((interview) => (
            <div key={interview.id} className="p-4 border-b last:border-b-0">
              <h3 className="text-xl font-bold mb-1">{interview.company}</h3>
              <p className="mb-1">
                <strong>Posición:</strong> {interview.position}
              </p>
              <p className="mb-1">
                <strong>Fecha:</strong> {interview.date}
              </p>
              <p className="mb-2">
                <strong>Hora:</strong> {interview.time}
              </p>
              <button className="btn btn-outline">Ver detalles</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

