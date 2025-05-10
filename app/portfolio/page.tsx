import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">Nosso Portfólio</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-up animate-delay-100">
          Conheça alguns dos projetos que desenvolvemos com dedicação e excelência para nossos clientes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
