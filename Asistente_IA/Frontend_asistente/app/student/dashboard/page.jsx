import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Bell,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  ChevronRight,
  Clock,
  FileText,
  GraduationCap,
  MapPin,
  Search,
  User,
} from "lucide-react"

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniConnect</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@usuario" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] md:gap-6 lg:gap-10 px-4 py-6">
        {/* Sidebar */}
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 py-2">
            <Link href="/student/dashboard">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Briefcase className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/student/profile">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <User className="h-5 w-5" />
                Mi perfil
              </Button>
            </Link>
            <Link href="/student/jobs">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Search className="h-5 w-5" />
                Buscar vacantes
              </Button>
            </Link>
            <Link href="/student/applications">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-5 w-5" />
                Mis aplicaciones
              </Button>
            </Link>
            <Link href="/student/calendar">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Calendar className="h-5 w-5" />
                Calendario
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex w-full flex-col gap-6">
          {/* Welcome Section */}
          <section className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Bienvenido, Juan</h1>
              <p className="text-muted-foreground">
                Aquí puedes ver un resumen de tu actividad y oportunidades disponibles
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aplicaciones activas</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">+2 nuevas esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Entrevistas programadas</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2</div>
                  <p className="text-xs text-muted-foreground">Próxima: 15 de marzo</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vacantes recomendadas</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">Basadas en tu perfil</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Perfil completado</CardTitle>
                  <User className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">85%</div>
                  <p className="text-xs text-muted-foreground">Añade certificaciones para mejorar</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recommended Jobs */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Vacantes recomendadas</h2>
              <Link href="/student/jobs">
                <Button variant="ghost" className="gap-1">
                  Ver todas <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((job) => (
                <Card key={job} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=Co${job}`} alt="Company logo" />
                          <AvatarFallback>CO{job}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">Desarrollador Frontend</CardTitle>
                          <CardDescription>TechCorp Solutions</CardDescription>
                        </div>
                      </div>
                      <Badge>Nuevo</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> Ciudad de México
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Tiempo completo
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <GraduationCap className="h-3 w-3" /> Recién egresado
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      Buscamos desarrollador frontend con conocimientos en React, Next.js y experiencia en diseño de
                      interfaces de usuario.
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="text-sm text-muted-foreground">Publicado hace 2 días</div>
                    <Link href={`/student/jobs/${job}`}>
                      <Button size="sm">Ver detalles</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Upcoming Interviews */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">Próximas entrevistas</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Entrevista con TechCorp Solutions</h3>
                      <p className="text-sm text-muted-foreground">Posición: Desarrollador Frontend</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">15 de marzo, 2025</p>
                      <p className="text-sm text-muted-foreground">10:00 AM - 11:00 AM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg border">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">Entrevista con Innovatech</h3>
                      <p className="text-sm text-muted-foreground">Posición: Desarrollador Full Stack</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">18 de marzo, 2025</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - 3:30 PM</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
      </div>
    </div>
  )
}

