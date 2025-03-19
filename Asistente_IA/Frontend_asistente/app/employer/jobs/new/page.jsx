"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Bell,
  BookOpen,
  Briefcase,
  Building,
  FileText,
  LayoutDashboard,
  Plus,
  Save,
  Settings,
  Users,
  X,
} from "lucide-react"

export default function NewJob() {
  const [skills, setSkills] = useState(["JavaScript", "React", "Next.js", "HTML/CSS", "Tailwind CSS"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
    }
  }

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill))
  }

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
              <Button variant="ghost" className="w-full justify-start gap-2">
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
              <Button variant="secondary" className="w-full justify-start gap-2">
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
          {/* Page Header */}
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Crear nueva vacante</h1>
              <p className="text-muted-foreground">Publica una nueva oportunidad laboral para estudiantes</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Guardar como borrador</Button>
              <Button className="gap-2">
                <Save className="h-4 w-4" /> Publicar vacante
              </Button>
            </div>
          </div>

          {/* Job Form */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Información de la vacante</CardTitle>
                <CardDescription>Proporciona los detalles básicos de la posición</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Título de la vacante *</Label>
                  <Input id="job-title" placeholder="Ej. Desarrollador Frontend" />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Tipo de empleo *</Label>
                    <Select defaultValue="full-time">
                      <SelectTrigger id="job-type">
                        <SelectValue placeholder="Seleccionar tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Tiempo completo</SelectItem>
                        <SelectItem value="part-time">Medio tiempo</SelectItem>
                        <SelectItem value="internship">Prácticas profesionales</SelectItem>
                        <SelectItem value="temporary">Temporal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-location">Ubicación *</Label>
                    <Select defaultValue="cdmx">
                      <SelectTrigger id="job-location">
                        <SelectValue placeholder="Seleccionar ubicación" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cdmx">Ciudad de México</SelectItem>
                        <SelectItem value="gdl">Guadalajara</SelectItem>
                        <SelectItem value="mty">Monterrey</SelectItem>
                        <SelectItem value="remote">Remoto</SelectItem>
                        <SelectItem value="hybrid">Híbrido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-description">Descripción de la vacante *</Label>
                  <Textarea
                    id="job-description"
                    placeholder="Describe la posición, responsabilidades y el perfil que buscas..."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-requirements">Requisitos *</Label>
                  <Textarea
                    id="job-requirements"
                    placeholder="Lista los requisitos necesarios para aplicar a esta vacante..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="job-benefits">Beneficios</Label>
                  <Textarea
                    id="job-benefits"
                    placeholder="Describe los beneficios que ofrece esta posición..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detalles adicionales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience-level">Nivel de experiencia</Label>
                    <Select defaultValue="entry">
                      <SelectTrigger id="experience-level">
                        <SelectValue placeholder="Seleccionar nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Nivel inicial (0-1 años)</SelectItem>
                        <SelectItem value="junior">Junior (1-3 años)</SelectItem>
                        <SelectItem value="mid">Intermedio (3-5 años)</SelectItem>
                        <SelectItem value="senior">Senior (5+ años)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education-level">Nivel educativo</Label>
                    <Select defaultValue="bachelor">
                      <SelectTrigger id="education-level">
                        <SelectValue placeholder="Seleccionar nivel" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">Preparatoria</SelectItem>
                        <SelectItem value="technical">Técnico</SelectItem>
                        <SelectItem value="bachelor">Licenciatura</SelectItem>
                        <SelectItem value="master">Maestría</SelectItem>
                        <SelectItem value="phd">Doctorado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="salary-min">Salario mínimo</Label>
                      <Input id="salary-min" type="number" placeholder="Ej. 15000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary-max">Salario máximo</Label>
                      <Input id="salary-max" type="number" placeholder="Ej. 25000" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency">Moneda</Label>
                    <Select defaultValue="mxn">
                      <SelectTrigger id="currency">
                        <SelectValue placeholder="Seleccionar moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mxn">Peso Mexicano (MXN)</SelectItem>
                        <SelectItem value="usd">Dólar Estadounidense (USD)</SelectItem>
                        <SelectItem value="eur">Euro (EUR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="show-salary">Mostrar salario</Label>
                      <p className="text-sm text-muted-foreground">
                        El rango salarial será visible para los candidatos
                      </p>
                    </div>
                    <Switch id="show-salary" defaultChecked />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="application-deadline">Fecha límite de aplicación</Label>
                    <Input id="application-deadline" type="date" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Habilidades requeridas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} className="px-3 py-1 flex items-center gap-1">
                        {skill}
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-1 rounded-full hover:bg-primary-foreground"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Añadir habilidad..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          addSkill()
                        }
                      }}
                    />
                    <Button type="button" onClick={addSkill} size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Añade las habilidades técnicas y competencias requeridas para esta posición.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opciones de publicación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="featured">Destacar vacante</Label>
                      <p className="text-sm text-muted-foreground">La vacante aparecerá en la sección destacada</p>
                    </div>
                    <Switch id="featured" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="auto-match">Coincidencia automática</Label>
                      <p className="text-sm text-muted-foreground">Recibir sugerencias de candidatos que coincidan</p>
                    </div>
                    <Switch id="auto-match" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

