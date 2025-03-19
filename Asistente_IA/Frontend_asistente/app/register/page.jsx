import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Crea tu cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">Únete a la plataforma de asistente IA universitario</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registro</CardTitle>
            <CardDescription>Elige tu tipo de cuenta y completa tus datos</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="student">Estudiante</TabsTrigger>
                <TabsTrigger value="employer">Empleador</TabsTrigger>
                <TabsTrigger value="admin">Administrador</TabsTrigger>
              </TabsList>

              {/* Formulario de Registro de Estudiante */}
              <TabsContent value="student">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Juan" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Pérez" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="juan.perez@universidad.edu" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="studentId">ID de estudiante</Label>
                    <Input id="studentId" placeholder="E12345678" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="major">Carrera</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona tu carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cs">Informática</SelectItem>
                        <SelectItem value="business">Administración</SelectItem>
                        <SelectItem value="engineering">Ingeniería</SelectItem>
                        <SelectItem value="arts">Artes y Humanidades</SelectItem>
                        <SelectItem value="science">Ciencias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Año de graduación esperado</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el año" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2025">2025</SelectItem>
                        <SelectItem value="2026">2026</SelectItem>
                        <SelectItem value="2027">2027</SelectItem>
                        <SelectItem value="2028">2028</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full">
                    Registrarse como Estudiante
                  </Button>
                </form>
              </TabsContent>

              {/* Formulario de Registro de Empleador */}
              <TabsContent value="employer">
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">Nombre de la empresa</Label>
                    <Input id="companyName" placeholder="Empresa S.A." required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactName">Nombre de contacto</Label>
                    <Input id="contactName" placeholder="María López" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="maria.lopez@empresa.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Número de teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+34 123 456 789" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="industry">Industria</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona la industria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Tecnología</SelectItem>
                        <SelectItem value="finance">Finanzas</SelectItem>
                        <SelectItem value="healthcare">Salud</SelectItem>
                        <SelectItem value="education">Educación</SelectItem>
                        <SelectItem value="manufacturing">Manufactura</SelectItem>
                        <SelectItem value="retail">Comercio</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Tamaño de la empresa</Label>
                    <RadioGroup defaultValue="medium">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="small" />
                        <Label htmlFor="small">1-50 empleados</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="medium" />
                        <Label htmlFor="medium">51-200 empleados</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="large" />
                        <Label htmlFor="large">201-1000 empleados</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="enterprise" id="enterprise" />
                        <Label htmlFor="enterprise">Más de 1000 empleados</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full">
                    Registrarse como Empleador
                  </Button>
                </form>
              </TabsContent>

              {/* Formulario de Registro de Administrador */}
              <TabsContent value="admin">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" placeholder="Admin" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" placeholder="Usuario" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" placeholder="admin@universidad.edu" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="adminId">ID de administrador</Label>
                    <Input id="adminId" placeholder="A12345" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Departamento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="it">TI</SelectItem>
                        <SelectItem value="career">Servicios de Carrera</SelectItem>
                        <SelectItem value="academic">Asuntos Académicos</SelectItem>
                        <SelectItem value="student">Servicios Estudiantiles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="accessLevel">Nivel de acceso</Label>
                    <RadioGroup defaultValue="standard">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">Estándar</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="elevated" id="elevated" />
                        <Label htmlFor="elevated">Elevado</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="superadmin" id="superadmin" />
                        <Label htmlFor="superadmin">Super Administrador</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button type="submit" className="w-full">
                    Registrarse como Administrador
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Al registrarte, aceptas nuestros{" "}
              <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Términos de Servicio
              </Link>{" "}
              y{" "}
              <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Política de Privacidad
              </Link>
            </div>
            <div className="text-center text-sm">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Iniciar sesión
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

