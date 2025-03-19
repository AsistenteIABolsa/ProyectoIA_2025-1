"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  Clock,
  FileText,
  Filter,
  GraduationCap,
  MapPin,
  Search,
  User,
} from "lucide-react"

export default function StudentJobs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)

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
              <Button variant="secondary" className="w-full justify-start gap-2">
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
          {/* Search and Filters */}
          <section className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Buscar Vacantes</h1>
              <p className="text-muted-foreground">Encuentra oportunidades laborales que se ajusten a tu perfil</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Buscar por título, empresa o habilidades..."
                    className="pl-9"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button variant="outline" className="gap-2" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4" /> Filtros
                </Button>
              </div>

              {showFilters && (
                <Card>
                  <CardContent className="p-4">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      <div className="space-y-2">
                        <h3 className="font-medium">Tipo de trabajo</h3>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Checkbox id="full-time" />
                            <label htmlFor="full-time" className="text-sm">
                              Tiempo completo
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="part-time" />
                            <label htmlFor="part-time" className="text-sm">
                              Medio tiempo
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="internship" />
                            <label htmlFor="internship" className="text-sm">
                              Prácticas
                            </label>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox id="remote" />
                            <label htmlFor="remote" className="text-sm">
                              Remoto
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Ubicación</h3>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar ubicación" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las ubicaciones</SelectItem>
                            <SelectItem value="cdmx">Ciudad de México</SelectItem>
                            <SelectItem value="gdl">Guadalajara</SelectItem>
                            <SelectItem value="mty">Monterrey</SelectItem>
                            <SelectItem value="other">Otras ciudades</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Experiencia</h3>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Nivel de experiencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todos los niveles</SelectItem>
                            <SelectItem value="entry">Nivel inicial</SelectItem>
                            <SelectItem value="junior">Junior</SelectItem>
                            <SelectItem value="mid">Intermedio</SelectItem>
                            <SelectItem value="senior">Senior</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Industria</h3>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar industria" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">Todas las industrias</SelectItem>
                            <SelectItem value="tech">Tecnología</SelectItem>
                            <SelectItem value="finance">Finanzas</SelectItem>
                            <SelectItem value="health">Salud</SelectItem>
                            <SelectItem value="education">Educación</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">Rango salarial</h3>
                          <span className="text-sm text-muted-foreground">$5,000 - $50,000 MXN</span>
                        </div>
                        <Slider defaultValue={[5000, 50000]} min={5000} max={100000} step={1000} />
                      </div>

                      <div className="space-y-2 md:col-span-2">
                        <h3 className="font-medium">Habilidades</h3>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            JavaScript
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            React
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            Node.js
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            Python
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            Java
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            SQL
                          </Badge>
                          <Badge
                            variant="outline"
                            className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                          >
                            MongoDB
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                      <Button variant="outline">Limpiar filtros</Button>
                      <Button>Aplicar filtros</Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </section>

          {/* Job Listings */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">124 vacantes encontradas</h2>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="relevant">Más relevantes</SelectItem>
                  <SelectItem value="salary-high">Mayor salario</SelectItem>
                  <SelectItem value="salary-low">Menor salario</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src={`/placeholder.svg?height=40&width=40&text=C${index + 1}`}
                            alt="Company logo"
                          />
                          <AvatarFallback>C{index + 1}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">
                            {index % 3 === 0
                              ? "Desarrollador Frontend"
                              : index % 3 === 1
                                ? "Desarrollador Backend"
                                : "Desarrollador Full Stack"}
                          </CardTitle>
                          <CardDescription>
                            {index % 4 === 0
                              ? "TechCorp Solutions"
                              : index % 4 === 1
                                ? "Innovatech"
                                : index % 4 === 2
                                  ? "DataSys"
                                  : "WebMasters Inc"}
                          </CardDescription>
                        </div>
                      </div>
                      {index < 3 && <Badge>Nuevo</Badge>}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {index % 3 === 0 ? "Ciudad de México" : index % 3 === 1 ? "Guadalajara" : "Monterrey"}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {index % 2 === 0 ? "Tiempo completo" : "Medio tiempo"}
                      </Badge>
                      {index % 4 === 0 && (
                        <Badge variant="outline" className="flex items-center gap-1">
                          <GraduationCap className="h-3 w-3" /> Recién egresado
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {index % 3 === 0
                        ? "Buscamos desarrollador frontend con conocimientos en React, Next.js y experiencia en diseño de interfaces de usuario."
                        : index % 3 === 1
                          ? "Se requiere desarrollador backend con experiencia en Node.js, Express y bases de datos SQL/NoSQL."
                          : "Oportunidad para desarrollador full stack con conocimientos en JavaScript, React, Node.js y bases de datos."}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {index % 3 === 0 ? (
                        <>
                          <Badge variant="secondary" className="text-xs">
                            React
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Next.js
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Tailwind
                          </Badge>
                        </>
                      ) : index % 3 === 1 ? (
                        <>
                          <Badge variant="secondary" className="text-xs">
                            Node.js
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Express
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            MongoDB
                          </Badge>
                        </>
                      ) : (
                        <>
                          <Badge variant="secondary" className="text-xs">
                            JavaScript
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            React
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            Node.js
                          </Badge>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="text-sm text-muted-foreground">
                      Publicado hace {index + 1} día{index > 0 ? "s" : ""}
                    </div>
                    <Link href={`/student/jobs/${index + 1}`}>
                      <Button size="sm">Ver detalles</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline" className="gap-2">
                Cargar más vacantes
              </Button>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

