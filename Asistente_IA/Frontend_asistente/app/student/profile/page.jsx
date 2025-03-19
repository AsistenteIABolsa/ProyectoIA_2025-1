"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  FileText,
  GraduationCap,
  Pencil,
  Plus,
  Search,
  Trash2,
  Upload,
  User,
} from "lucide-react"

export default function StudentProfile() {
  const [editMode, setEditMode] = useState(false)

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
              <Button variant="secondary" className="w-full justify-start gap-2">
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
          {/* Profile Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Mi Perfil</h1>
              <p className="text-muted-foreground">Gestiona tu información personal y profesional</p>
            </div>
            <Button onClick={() => setEditMode(!editMode)} className="gap-2">
              {editMode ? (
                "Guardar cambios"
              ) : (
                <>
                  <Pencil className="h-4 w-4" /> Editar perfil
                </>
              )}
            </Button>
          </div>

          {/* Profile Content */}
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              <TabsTrigger value="education">Educación</TabsTrigger>
              <TabsTrigger value="experience">Experiencia</TabsTrigger>
              <TabsTrigger value="skills">Habilidades</TabsTrigger>
            </TabsList>

            {/* Personal Information Tab */}
            <TabsContent value="personal" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>Actualiza tu información personal y de contacto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@usuario" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    {editMode && (
                      <div className="flex flex-col gap-2">
                        <Button variant="outline" size="sm" className="gap-2">
                          <Upload className="h-4 w-4" /> Cambiar foto
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2 text-destructive">
                          <Trash2 className="h-4 w-4" /> Eliminar
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" defaultValue="Juan" readOnly={!editMode} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" defaultValue="Pérez" readOnly={!editMode} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue="juan.perez@estudiante.edu.mx" readOnly={!editMode} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="55 1234 5678" readOnly={!editMode} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio">Biografía</Label>
                      <Textarea
                        id="bio"
                        rows={4}
                        defaultValue="Estudiante de Ingeniería en Sistemas Computacionales con interés en desarrollo web y aplicaciones móviles. Busco oportunidades para aplicar mis conocimientos y adquirir experiencia profesional."
                        readOnly={!editMode}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Número de matrícula</Label>
                    <div className="flex items-center gap-2">
                      <Input defaultValue="A12345678" readOnly className="bg-muted" />
                      <Badge>Verificado</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      El número de matrícula es proporcionado por la universidad y no puede ser modificado.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Educación</CardTitle>
                    <CardDescription>Información sobre tu formación académica</CardDescription>
                  </div>
                  {editMode && (
                    <Button size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Añadir educación
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Universidad Tecnológica Nacional</h3>
                          <p className="text-sm text-muted-foreground">Ingeniería en Sistemas Computacionales</p>
                          <p className="text-sm">2022 - Presente (8vo semestre)</p>
                          <p className="text-sm">Promedio: 9.2/10</p>
                        </div>
                      </div>
                      {editMode && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Preparatoria Técnica #5</h3>
                          <p className="text-sm text-muted-foreground">Bachillerato Técnico en Informática</p>
                          <p className="text-sm">2019 - 2022</p>
                          <p className="text-sm">Promedio: 9.5/10</p>
                        </div>
                      </div>
                      {editMode && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Experiencia</CardTitle>
                    <CardDescription>Información sobre tu experiencia laboral y proyectos</CardDescription>
                  </div>
                  {editMode && (
                    <Button size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Añadir experiencia
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Desarrollador Web (Prácticas)</h3>
                          <p className="text-sm font-medium">TechSolutions</p>
                          <p className="text-sm text-muted-foreground">Junio 2024 - Agosto 2024</p>
                          <p className="text-sm mt-2">
                            Desarrollo de interfaces de usuario con React y Next.js. Implementación de APIs RESTful y
                            optimización de rendimiento.
                          </p>
                        </div>
                      </div>
                      {editMode && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Proyecto: Sistema de Gestión Académica</h3>
                          <p className="text-sm font-medium">Proyecto Universitario</p>
                          <p className="text-sm text-muted-foreground">Enero 2024 - Mayo 2024</p>
                          <p className="text-sm mt-2">
                            Desarrollo de un sistema de gestión académica para la universidad. Implementación de
                            funcionalidades de registro, seguimiento de calificaciones y generación de reportes.
                          </p>
                        </div>
                      </div>
                      {editMode && (
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Habilidades</CardTitle>
                    <CardDescription>Habilidades técnicas y profesionales</CardDescription>
                  </div>
                  {editMode && (
                    <Button size="sm" className="gap-2">
                      <Plus className="h-4 w-4" /> Añadir habilidad
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Habilidades técnicas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="px-3 py-1">JavaScript</Badge>
                        <Badge className="px-3 py-1">React</Badge>
                        <Badge className="px-3 py-1">Next.js</Badge>
                        <Badge className="px-3 py-1">Node.js</Badge>
                        <Badge className="px-3 py-1">HTML/CSS</Badge>
                        <Badge className="px-3 py-1">Tailwind CSS</Badge>
                        <Badge className="px-3 py-1">Git</Badge>
                        <Badge className="px-3 py-1">SQL</Badge>
                        <Badge className="px-3 py-1">MongoDB</Badge>
                        {editMode && (
                          <Button variant="outline" size="sm" className="gap-1 h-7">
                            <Plus className="h-3 w-3" /> Añadir
                          </Button>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Idiomas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="px-3 py-1">
                          Español (Nativo)
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Inglés (Avanzado)
                        </Badge>
                        <Badge variant="outline" className="px-3 py-1">
                          Francés (Básico)
                        </Badge>
                        {editMode && (
                          <Button variant="outline" size="sm" className="gap-1 h-7">
                            <Plus className="h-3 w-3" /> Añadir
                          </Button>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Habilidades blandas</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="px-3 py-1">
                          Trabajo en equipo
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                          Comunicación
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                          Resolución de problemas
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                          Adaptabilidad
                        </Badge>
                        <Badge variant="secondary" className="px-3 py-1">
                          Gestión del tiempo
                        </Badge>
                        {editMode && (
                          <Button variant="outline" size="sm" className="gap-1 h-7">
                            <Plus className="h-3 w-3" /> Añadir
                          </Button>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Certificaciones</h3>
                      <div className="space-y-2">
                        <div className="rounded-lg border p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">Desarrollo Web Responsive</h4>
                              <p className="text-sm text-muted-foreground">freeCodeCamp</p>
                              <p className="text-sm">Expedición: Marzo 2023</p>
                            </div>
                            {editMode && (
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="rounded-lg border p-3">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">JavaScript Algorithms and Data Structures</h4>
                              <p className="text-sm text-muted-foreground">freeCodeCamp</p>
                              <p className="text-sm">Expedición: Junio 2023</p>
                            </div>
                            {editMode && (
                              <div className="flex gap-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                        {editMode && (
                          <Button variant="outline" className="w-full gap-2 mt-2">
                            <Plus className="h-4 w-4" /> Añadir certificación
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

