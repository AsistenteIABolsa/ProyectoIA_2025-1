"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Bell,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  Clock,
  FileText,
  GraduationCap,
  Heart,
  MapPin,
  Search,
  Share2,
  User,
} from "lucide-react"

export default function JobDetail({ params }) {
  const [isSaved, setIsSaved] = useState(false)
  const [isApplying, setIsApplying] = useState(false)

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
          {/* Back Button */}
          <Link href="/student/jobs">
            <Button variant="ghost" className="gap-2 pl-0">
              <ArrowLeft className="h-4 w-4" /> Volver a vacantes
            </Button>
          </Link>

          {/* Job Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64&text=TC" alt="Company logo" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Desarrollador Frontend</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building className="h-4 w-4" />
                  <span>TechCorp Solutions</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
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
              </div>
            </div>
            <div className="flex gap-2 self-start">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsSaved(!isSaved)}
                className={isSaved ? "text-red-500" : ""}
              >
                <Heart className="h-5 w-5" fill={isSaved ? "currentColor" : "none"} />
                <span className="sr-only">Guardar vacante</span>
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Compartir vacante</span>
              </Button>
              {!isApplying && <Button onClick={() => setIsApplying(true)}>Aplicar ahora</Button>}
            </div>
          </div>

          {/* Job Details */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Descripción de la vacante</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Acerca del puesto</h3>
                  <p className="text-muted-foreground">
                    Estamos buscando un Desarrollador Frontend talentoso para unirse a nuestro equipo de ingeniería.
                    Como Desarrollador Frontend, serás responsable de implementar interfaces de usuario visuales para
                    nuestras aplicaciones web. Trabajarás en estrecha colaboración con diseñadores, desarrolladores
                    backend y otros miembros del equipo para crear experiencias de usuario excepcionales.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Responsabilidades</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Desarrollar interfaces de usuario responsivas utilizando React y Next.js</li>
                    <li>
                      Colaborar con diseñadores para implementar diseños y asegurar una experiencia de usuario
                      consistente
                    </li>
                    <li>Optimizar aplicaciones para máxima velocidad y escalabilidad</li>
                    <li>Implementar diseños responsivos y asegurar la compatibilidad entre navegadores</li>
                    <li>
                      Participar en revisiones de código y proporcionar comentarios constructivos a otros
                      desarrolladores
                    </li>
                    <li>
                      Mantenerse actualizado con las últimas tendencias y mejores prácticas en desarrollo frontend
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Requisitos</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Licenciatura en Ingeniería en Sistemas, Informática o campo relacionado</li>
                    <li>Experiencia con React, Next.js y JavaScript moderno</li>
                    <li>Conocimiento sólido de HTML, CSS y diseño responsivo</li>
                    <li>Experiencia con Tailwind CSS o frameworks similares</li>
                    <li>Familiaridad con herramientas de control de versiones como Git</li>
                    <li>Capacidad para trabajar en equipo y comunicarse efectivamente</li>
                    <li>Atención al detalle y compromiso con la calidad del código</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Beneficios</h3>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    <li>Salario competitivo</li>
                    <li>Horario flexible</li>
                    <li>Oportunidades de crecimiento profesional</li>
                    <li>Seguro médico</li>
                    <li>Bonos por desempeño</li>
                    <li>Ambiente de trabajo colaborativo</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detalles de la vacante</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fecha de publicación</span>
                    <span className="font-medium">15 de marzo, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Ubicación</span>
                    <span className="font-medium">Ciudad de México</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tipo de empleo</span>
                    <span className="font-medium">Tiempo completo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Modalidad</span>
                    <span className="font-medium">Híbrido (3 días presencial)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Salario</span>
                    <span className="font-medium">$18,000 - $25,000 MXN</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experiencia</span>
                    <span className="font-medium">0-2 años</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Educación</span>
                    <span className="font-medium">Licenciatura</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Habilidades requeridas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="px-3 py-1">JavaScript</Badge>
                    <Badge className="px-3 py-1">React</Badge>
                    <Badge className="px-3 py-1">Next.js</Badge>
                    <Badge className="px-3 py-1">HTML/CSS</Badge>
                    <Badge className="px-3 py-1">Tailwind CSS</Badge>
                    <Badge className="px-3 py-1">Git</Badge>
                    <Badge className="px-3 py-1">Responsive Design</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Acerca de la empresa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/placeholder.svg?height=48&width=48&text=TC" alt="Company logo" />
                      <AvatarFallback>TC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold">TechCorp Solutions</h3>
                      <p className="text-sm text-muted-foreground">Tecnología • 50-200 empleados</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    TechCorp Solutions es una empresa líder en desarrollo de software que ofrece soluciones innovadoras
                    para empresas de todos los tamaños. Nuestro enfoque se centra en crear productos de alta calidad que
                    resuelvan problemas reales.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver perfil de la empresa
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Application Form */}
          {isApplying && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Aplicar a esta vacante</CardTitle>
                <CardDescription>Completa el formulario para enviar tu aplicación</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium">Carta de presentación</h3>
                  <Textarea
                    placeholder="Escribe una breve carta de presentación explicando por qué eres un buen candidato para este puesto..."
                    rows={6}
                  />
                  <p className="text-xs text-muted-foreground">
                    Tu carta de presentación debe ser concisa y destacar tus habilidades relevantes para el puesto.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium">Currículum</h3>
                  <div className="rounded-lg border p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Juan_Perez_CV.pdf</p>
                        <p className="text-xs text-muted-foreground">Última actualización: 10 de marzo, 2025</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Cambiar
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Se utilizará la versión más reciente de tu CV. Puedes actualizarlo desde tu perfil.
                  </p>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button variant="outline" onClick={() => setIsApplying(false)}>
                    Cancelar
                  </Button>
                  <Button>Enviar aplicación</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}

