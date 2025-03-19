import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Building, GraduationCap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">UniConnect</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Características
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              Cómo funciona
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
              Testimonios
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Iniciar sesión</Button>
            </Link>
            <Link href="/register">
              <Button>Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Conectando talento universitario con oportunidades laborales
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  UniConnect facilita la conexión entre estudiantes universitarios y empresas, creando oportunidades
                  profesionales que impulsan carreras y negocios.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register?role=student">
                  <Button size="lg" className="gap-1">
                    Soy estudiante <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register?role=employer">
                  <Button size="lg" variant="outline" className="gap-1">
                    Soy empresario <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                alt="Estudiantes y empresarios conectando"
                className="aspect-video overflow-hidden rounded-xl object-cover"
                src="/placeholder.svg?height=500&width=800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Características principales
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Descubre cómo UniConnect facilita la conexión entre talento y oportunidades
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-8">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <GraduationCap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Para estudiantes</h3>
              <p className="text-center text-muted-foreground">
                Crea tu perfil profesional, destaca tus habilidades y aplica a vacantes exclusivas para universitarios.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <Building className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Para empresas</h3>
              <p className="text-center text-muted-foreground">
                Publica vacantes, encuentra talento joven y gestiona aplicaciones de forma eficiente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <BookOpen className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold">Para universidades</h3>
              <p className="text-center text-muted-foreground">
                Administra la plataforma, supervisa conexiones y ayuda a tus estudiantes a encontrar oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-muted py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cómo funciona</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un proceso simple para conectar talento con oportunidades
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold">Crea tu perfil</h3>
              <p className="text-center text-muted-foreground">
                Estudiantes y empresas crean perfiles detallados con información relevante.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold">Conecta</h3>
              <p className="text-center text-muted-foreground">
                Empresas publican vacantes y estudiantes aplican a las que mejor se ajusten a su perfil.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold">Crece</h3>
              <p className="text-center text-muted-foreground">
                Inicia tu carrera profesional o encuentra el talento que tu empresa necesita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">UniConnect</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © 2025 UniConnect. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Términos
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacidad
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Contacto
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

