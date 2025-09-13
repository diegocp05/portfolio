import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

const projects = {
  "marketplace-prompts": {
    title: "Marketplace de Prompts para IA (work in progress)",
    description:
      "Desenvolvimento de um <strong>marketplace moderno</strong> para venda de <strong>prompts de IA</strong>, com integração a sistemas de <strong>automação</strong> e <strong>pagamentos</strong>. Utiliza <strong>Next.js</strong> (React), <strong>Tailwind CSS</strong>, rotas dinâmicas, <strong>autenticação</strong>, painel administrativo, e automações pós-compra.",
    skills: ["Next.js", "React", "Tailwind CSS", "SQL"],
    images: ["/marketplace-homepage-overview.png", "/marketplace-prompts-catalog.png"],
    objective:
      "Desenvolvi um <strong>marketplace de prompts para IA</strong>, com o objetivo de conectar <strong>criadores e compradores</strong> de prompts de inteligência artificial em um ambiente <strong>seguro e automatizado</strong>. O sistema permite que vendedores cadastrem seus prompts, compradores realizem <strong>pagamentos online</strong> e recebam <strong>acesso imediato</strong> ao conteúdo adquirido. Além disso, integra <strong>automações</strong> para envio de prompts e notificações, otimizando o <strong>fluxo pós-compra</strong> e garantindo uma experiência fluida para todos os usuários.",
    webStack:
      "A aplicação foi construída utilizando <strong>Next.js</strong>, aproveitando seu sistema de <strong>rotas dinâmicas</strong>, <strong>server-side rendering</strong> e <strong>API routes</strong> para criar uma experiência moderna e performática. O frontend utiliza <strong>React</strong> e <strong>Tailwind CSS</strong> para uma interface <strong>responsiva</strong> e de fácil manutenção. Para pagamentos, integrei a <strong>API do Stripe</strong>, garantindo <strong>segurança</strong> e praticidade nas transações. A <strong>automação de processos</strong> pós-compra foi realizada via <strong>n8n</strong>, permitindo <strong>workflows customizados</strong> e escaláveis. O <strong>banco de dados relacional</strong> foi estruturado com scripts <strong>SQL</strong>, facilitando a manutenção e evolução do sistema. Todo o projeto segue <strong>boas práticas</strong> de versionamento, documentação e organização de código.",
    problems:
      "Durante o desenvolvimento, enfrentei desafios como a <strong>integração segura</strong> com o Stripe, a <strong>orquestração de automações</strong> no n8n e a criação de um <strong>fluxo de aprovação</strong> para novos prompts. Para garantir a <strong>segurança das transações</strong>, implementei <strong>webhooks validados</strong> e um sistema de <strong>aprovação manual</strong> para novos conteúdos. O processo de automação exigiu <strong>mapeamento detalhado</strong> dos eventos de compra e integração com <strong>múltiplos serviços</strong>. Busquei sempre <strong>modularizar o código</strong>, documentar integrações e criar <strong>scripts reutilizáveis</strong> para facilitar futuras expansões. O foco foi construir uma <strong>base sólida</strong>, <strong>escalável</strong> e fácil de manter, pensando tanto na <strong>experiência do usuário</strong> quanto na facilidade de operação para administradores e vendedores.",
  },
  "dashboard-financeiro": {
    title: "Dashboard Financeiro Empresarial (Protótipo)",
    description:
      "Aplicação web para <strong>controle financeiro empresarial</strong>, com funcionalidades de <strong>cadastro de contas</strong>, <strong>transações</strong>, <strong>simulação de orçamento</strong>, <strong>previsões</strong> e <strong>relatórios</strong>.",
    skills: ["Next.js", "React", "Tailwind CSS", "PostgreSQL"],
    images: ["/finanflow-comprehensive-dashboard.png", "/finanflow-transactions-table.png"],
    objective:
      "Desenvolvi uma <strong>aplicação web de dashboard financeiro</strong> empresarial, com o objetivo de facilitar o <strong>controle de contas</strong>, <strong>transações</strong>, <strong>orçamentos</strong> e <strong>previsões financeiras</strong> para o usuário final. O sistema permite o <strong>cadastro de contas</strong>, <strong>simulação de cenários</strong>, <strong>visualização de relatórios</strong> e <strong>acompanhamento de metas</strong>, tornando a <strong>gestão financeira</strong> mais acessível e organizada.",
    webStack:
      "A aplicação foi construída utilizando <strong>Next.js</strong>, aproveitando seu sistema de <strong>rotas modernas</strong> e <strong>renderização eficiente</strong>. O frontend é desenvolvido em <strong>React</strong>, com <strong>componentes reutilizáveis</strong> e <strong>hooks customizados</strong> para gerenciamento de estado e requisições. A estilização foi feita com <strong>Tailwind CSS</strong>, garantindo <strong>responsividade</strong> e agilidade no desenvolvimento da interface. Para <strong>persistência de dados</strong>, utilizei o <strong>Prisma ORM</strong> com <strong>banco de dados relacional</strong>, facilitando a modelagem e as migrações. O projeto também conta com uma <strong>estrutura modular</strong> de actions, hooks e libs, além de <strong>boas práticas</strong> de versionamento e organização de código.",
    problems:
      "Durante o desenvolvimento, enfrentei desafios como a definição de uma <strong>arquitetura flexível</strong> para suportar <strong>múltiplos tipos de contas</strong> e transações, além de garantir a <strong>segurança</strong> e <strong>integridade dos dados</strong> do usuário. Para isso, implementei <strong>autenticação robusta</strong> e <strong>controle de acesso</strong>, além de <strong>hooks customizados</strong> para abstrair a lógica de manipulação de dados. Busquei <strong>modularizar ao máximo</strong> as funcionalidades, facilitando <strong>futuras expansões</strong> e manutenções. O foco foi sempre proporcionar uma <strong>experiência intuitiva</strong>, com <strong>feedbacks visuais claros</strong> e <strong>navegação fluida</strong>, além de garantir que o sistema fosse facilmente <strong>adaptável</strong> para novas demandas e integrações.",
  },
  "site-institucional": {
    title: "Site Institucional e Catálogo de Produtos",
    description:
      "Desenvolvimento de <strong>site institucional</strong> para indústria, com <strong>catálogo de produtos</strong>, <strong>galeria de imagens</strong>, <strong>vídeos</strong>, <strong>formulários de contato</strong> e <strong>integração com WhatsApp</strong>. Estrutura baseada em <strong>React</strong>, com foco em <strong>apresentação visual</strong> e <strong>experiência do usuário</strong>.",
    skills: ["React", "CSS", "JavaScript"],
    images: ["/usifresa-product-catalog.png", "/usifresa-homepage-hero.png", "/usifresa-mobile-responsive.png"],
    link: "https://usifresa.com.br",
    objective:
      "O objetivo deste projeto foi substituir o <strong>antigo site institucional</strong> da indústria, que apresentava sérios problemas de <strong>responsividade</strong> e um <strong>design pouco intuitivo</strong>, por uma solução <strong>moderna</strong>, <strong>eficiente</strong> e <strong>visualmente atraente</strong>. O novo site foi desenvolvido para melhorar a <strong>experiência do usuário</strong>, facilitar o acesso ao <strong>catálogo de produtos</strong>, integrar canais de contato como <strong>WhatsApp</strong> e apresentar a empresa de forma mais <strong>profissional</strong>. Como resultado, o site passou a oferecer <strong>navegação fluida</strong> em dispositivos móveis e desktops, além de proporcionar um <strong>desempenho significativamente superior</strong> no Google Analytics e uma <strong>economia de espaço</strong> nos servidores de <strong>81,25%</strong>.",
    webStack:
      "A aplicação foi construída utilizando <strong>React</strong>, aproveitando sua flexibilidade para criar <strong>componentes reutilizáveis</strong> e <strong>interfaces dinâmicas</strong>. A estrutura do projeto foi organizada em <strong>módulos</strong> para facilitar a manutenção e a <strong>escalabilidade</strong>. A estilização foi feita com <strong>CSS modularizado</strong>, garantindo <strong>responsividade</strong> e adaptação a diferentes tamanhos de tela. Os <strong>assets</strong>, como imagens, vídeos e PDFs, foram <strong>otimizados</strong> e organizados na pasta pública, contribuindo para o <strong>carregamento rápido</strong> das páginas e a <strong>redução do espaço</strong> ocupado no servidor. O projeto também conta com <strong>integração de formulários</strong> de contato e <strong>links diretos para WhatsApp</strong>, tornando o <strong>atendimento ao cliente</strong> mais ágil.",
    problems:
      "O principal desafio foi <strong>migrar todo o conteúdo</strong> do site antigo, que era pouco responsivo e apresentava problemas de <strong>usabilidade</strong>, para uma nova arquitetura sem perder <strong>informações importantes</strong>. Busquei entender as principais <strong>dores dos usuários</strong> e priorizei a criação de um <strong>layout intuitivo</strong>, com <strong>navegação clara</strong> e acessível em qualquer dispositivo. A <strong>otimização dos arquivos</strong> e a <strong>reestruturação dos assets</strong> foram fundamentais para alcançar a expressiva <strong>economia de espaço</strong> em servidor. Além disso, o foco em <strong>performance</strong> resultou em melhorias notáveis nos <strong>indicadores do Google Analytics</strong>, como <strong>tempo de carregamento</strong> e <strong>taxa de rejeição</strong>. Todo o processo foi guiado pela busca de uma solução <strong>moderna</strong>, <strong>eficiente</strong> e alinhada às necessidades do cliente e dos usuários finais.",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar
              </Link>
            </Button>
            <div className="text-xl font-semibold">Diego Costa</div>
          </div>
        </nav>
      </header>

      {/* Project Header */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-balance">{project.title}</h1>
          <p
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-3">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            {"link" in project && (
              <div>
                <h3 className="font-semibold mb-3">Link</h3>
                <Button asChild variant="outline">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Visitar Site
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Images */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid gap-8">
          {project.images.map((image, index) => (
            <div key={index} className="aspect-video rounded-lg overflow-hidden bg-muted">
              <img
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Screenshot ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Objetivo do Projeto</h2>
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.objective }}
            ></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Web Stack e Explicação</h2>
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.webStack }}
            ></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Problemas e Processo de Pensamento</h2>
            <p
              className="text-muted-foreground leading-relaxed"
              dangerouslySetInnerHTML={{ __html: project.problems }}
            ></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <Button asChild>
              <Link href="/">Voltar ao Portfólio</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
