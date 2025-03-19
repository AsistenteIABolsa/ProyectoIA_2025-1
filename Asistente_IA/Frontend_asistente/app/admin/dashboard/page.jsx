import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Briefcase,
  Building,
  ChevronRight,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LineChart,
  Settings,
  Shield,
  Users,
} from "lucide-react"

export default function AdminDashboard() {
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
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[240px_1fr] md:gap-6 lg:gap-10 px-4 py-6">
        {/* Sidebar */}
        <aside className="fixed top-20 z-30 -ml-2 hidden h-[calc(100vh-5rem)] w-full shrink-0 md:sticky md:block">
          <nav className="flex flex-col gap-2 py-2">
            <Link href="/admin/dashboard">
              <Button variant="secondary" className="w-full justify-start gap-2">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Button>
            </Link>
            <Link href="/admin/students">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <GraduationCap className="h-5 w-5" />
                Estudiantes
              </Button>
            </Link>
            <Link href="/admin/companies">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Building className="h-5 w-5" />
                Empresas
              </Button>
            </Link>
            <Link href="/admin/jobs">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Briefcase className="h-5 w-5" />
                Vacantes
              </Button>
            </Link>
            <Link href="/admin/reports">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <LineChart className="h-5 w-5" />
                Reportes
              </Button>
            </Link>
            <Link href="/admin/settings">
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
              <h1 className="text-3xl font-bold tracking-tight">Panel de Administración</h1>
              <p className="text-muted-foreground">Bienvenido al panel de administración de UniConnect</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Estudiantes registrados</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,248</div>
                  <p className="text-xs text-muted-foreground">+32 nuevos esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Empresas registradas</CardTitle>
                  <Building className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">86</div>
                  <p className="text-xs text-muted-foreground">+5 nuevas este mes</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Vacantes activas</CardTitle>
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">124</div>
                  <p className="text-xs text-muted-foreground">+18 nuevas esta semana</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Aplicaciones totales</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,842</div>
                  <p className="text-xs text-muted-foreground">+215 este mes</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pending Approvals */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Aprobaciones pendientes</h2>
              <Link href="/admin/approvals">
                <Button variant="ghost" className="gap-1">
                  Ver todas <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Empresas pendientes de verificación</CardTitle>
                <CardDescription>Empresas que requieren verificación para publicar vacantes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((company) => (
                    <div key={company} className="flex items-center justify-between rounded-lg border p-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage
                            src={`/placeholder.svg?height=48&width=48&text=C${company}`}
                            alt="Company logo"
                          />
                          <AvatarFallback>C{company}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">
                            {company === 1 ? "InnovaTech Solutions" : company === 2 ? "DataSys Corp" : "WebDev Masters"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {company === 1 ? "Tecnología" : company === 2 ? "Análisis de datos" : "Desarrollo web"}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <p className="text-sm">
                          Solicitado: {company === 1 ? "Hace 2 días" : company === 2 ? "Hace 3 días" : "Hace 5 días"}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Por: {company === 1 ? "María López" : company === 2 ? "Carlos Ruiz" : "Ana Martínez"}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Shield className="h-4 w-4" /> Verificar
                        </Button>
                        <Button variant="destructive" size="sm">
                          Rechazar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Recent Activity */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight">Actividad reciente</h2>
              <Link href="/admin/activity">
                <Button variant="ghost" className="gap-1">
                  Ver todo <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Building className="h-5 w-5 text-primary" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                        +
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">Nueva empresa registrada</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">TechSolutions Inc.</span> se ha registrado en la
                        plataforma
                      </p>
                      <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                        +
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">Nueva vacante publicada</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">DataCorp</span> ha publicado una nueva vacante:{" "}
                        <span className="font-medium text-foreground">Analista de datos</span>
                      </p>
                      <p className="text-xs text-muted-foreground">Hace 5 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">Aplicaciones destacadas</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">15 estudiantes</span> han aplicado a vacantes en
                        las últimas 24 horas
                      </p>
                      <p className="text-xs text-muted-foreground">Hace 12 horas</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                        5
                      </Badge>
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="font-medium">Nuevos estudiantes registrados</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">5 nuevos estudiantes</span> se han registrado hoy
                      </p>
                      <p className="text-xs text-muted-foreground">Hace 1 día</p>
                    </div>
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

