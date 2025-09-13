import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Home() {
  const projects = [
    {
      id: "site-institucional",
      title: "Site Institucional e Catálogo de Produtos",
      description:
        "Desenvolvimento de site institucional para indústria, com catálogo de produtos, galeria de imagens, vídeos, formulários de contato e integração com WhatsApp.",
      skills: ["React", "CSS", "JavaScript"],
      image: "/usifresa-homepage-hero.png",
      link: "https://usifresa.com.br",
    },
    {
      id: "dashboard-financeiro",
      title: "Dashboard Financeiro Empresarial (Projeto protótipo para faculdade)",
      description:
        "Aplicação web para controle financeiro empresarial, com funcionalidades de cadastro de contas, transações, simulação de orçamento, previsões e relatórios.",
      skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
      image: "/finanflow-main-interface.png",
    },
    {
      id: "marketplace-prompts",
      title: "Marketplace de Prompts para IA (work in progress)",
      description:
        "Desenvolvimento de um marketplace moderno para venda de prompts de IA, com integração a sistemas de automação e pagamentos.",
      skills: ["Next.js", "React", "Tailwind CSS", "SQL"],
      image: "/promptmarket-homepage.png",
    },
  ]

  const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL", "SQL"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">Diego Costa</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projetos
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Olá, eu sou Diego | <span className="text-primary">Desenvolvedor</span>{" "}
            <span className="text-primary">Full Stack</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Apaixonado por criar soluções web modernas e eficientes. Especializado em React, Next.js e desenvolvimento
            full stack.
          </p>
          <div className="flex items-center space-x-4">
            <Button asChild>
              <Link href="#projects">Ver Projetos</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Entrar em Contato</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Minhas Skills</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Desenvolvedor full stack com experiência em tecnologias modernas. Focado em criar aplicações web
              performáticas e escaláveis.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-muted flex items-center justify-center">
              <img
                src="/diego-profile-photo.jpeg"
                alt="Diego Costa"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Projetos</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="aspect-video md:aspect-auto">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button asChild className="w-fit">
                      <Link href={`/projects/${project.id}`}>Ver Projeto</Link>
                    </Button>
                    {project.link && (
                      <Button variant="outline" asChild className="w-fit bg-transparent">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          Visitar Site
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Vamos conversar</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Interessado em trabalhar juntos? Entre em contato comigo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline">
              <a href="mailto:diegocostapires05@gmail.com" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="tel:+5516993935019" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Telefone
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/diegocp05"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://www.linkedin.com/in/diego-costa-6a6920212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground mb-4 md:mb-0">© 2025 Diego Costa. Todos os direitos reservados.</div>
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/diegocp05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/diego-costa-6a6920212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:diegocostapires05@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
