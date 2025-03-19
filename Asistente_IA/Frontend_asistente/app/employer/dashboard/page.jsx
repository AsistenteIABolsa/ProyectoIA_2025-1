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
  ChevronRight,
  Clock,
  FileText,
  LayoutDashboard,
  Plus,
  Settings,
  User,
  Users,
} from "lucide-react"

export default function EmployerDashboard() {
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
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] md:gap-6 lg:gap-10 px-4 py-6">
        {/* Sidebar */}
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 py-2">
            <Link href="/employer/dashboard">
              <Button variant="secondary" className="w-full justify-start gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/employer/company">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Building className="h-5 w-5" />
                Mi empresa
              </Button>
            </Link>
            <Link href="/employer/jobs">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Briefcase className="h-5 w-5" />
                Vacantes
              </Button>
            </Link>
            <Link href="/employer/applications">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-5 w-5" />
                Aplicaciones
              </Button>
            </Link>
            <Link href="/employer/candidates">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-5 w-5" />
                Candidatos
              </Button>
            </Link>
            <Link href="/employer/settings">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-5 w-5" />
                Configuración
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex w-full flex-col gap-6">
          {/* Welcome Section */}
          <section className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Bienvenido, TechCorp</h1>
              <p className="text-muted-foreground">Aquí puedes ver un resumen de tus vacantes y aplicaciones</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vacantes activas</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                  <p className="text-xs text-muted-foreground">+1 nueva esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aplicaciones recibidas</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">+12 nuevas esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Entrevistas programadas</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">Próxima: hoy a las 15:00</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Candidatos en proceso</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">En diferentes etapas</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Applications */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Aplicaciones recientes</h2>
              <Link href="/employer/applications">
                <Button variant="ghost" className="gap-1">
                  Ver todas <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[1, 2, 3, 4].map((application) => (
                    <div key={application} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={`/placeholder.svg?height=40&width=40&text=S${application}`} alt="Student" />
                          <AvatarFallback>S{application}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">Ana García</h3>
                          <p className="text-sm text-muted-foreground">Desarrollador Frontend</p>
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <p className="font-medium">Universidad Tecnológica Nacional</p>
                        <p className="text-sm text-muted-foreground">Ing. en Sistemas Computacionales</p>
                      </div>
                      <div className="text-right">
                        <Badge>Nuevo</Badge>
                        <p className="text-xs text-muted-foreground mt-1">Hace 2 días</p>
                      </div>
                      <Button size="sm">Ver perfil</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Active Job Postings */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Vacantes activas</h2>
              <div className="flex gap-2">
                <Link href="/employer/jobs">
                  <Button variant="ghost" className="gap-1">
                    Ver todas <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/employer/jobs/new">
                  <Button className="gap-1">
                    <Plus className="h-4 w-4" /> Nueva vacante
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((job) => (
                <Card key={job}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between">
                      <CardTitle>
                        Desarrollador {job === 1 ? "Frontend" : job === 2 ? "Backend" : "Full Stack"}
                      </CardTitle>
                      <Badge variant={job === 1 ? "default" : job === 2 ? "secondary" : "outline"}>
                        {job === 1 ? "Destacado" : job === 2 ? "Nuevo" : "Remoto"}
                      </Badge>
                    </div>
                    <CardDescription>
                      {job === 1
                        ? "Desarrollo de interfaces de usuario"
                        : job === 2
                          ? "Desarrollo de APIs y servicios"
                          : "Desarrollo full stack"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        React
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Next.js
                      </Badge>
                      {job === 2 && (
                        <Badge variant="outline" className="text-xs">
                          Node.js
                        </Badge>
                      )}
                      {job === 3 && (
                        <Badge variant="outline" className="text-xs">
                          MongoDB
                        </Badge>
                      )}
                    </div>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Tiempo completo</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{job * 5} aplicaciones recibidas</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      Publicado hace {job} semana{job > 1 ? "s" : ""}
                    </div>
                    <Link href={`/employer/jobs/${job}`}>
                      <Button variant="outline" size="sm">
                        Gestionar
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

