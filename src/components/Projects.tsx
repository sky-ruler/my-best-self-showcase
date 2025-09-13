import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Cart Pro",
      description: "A full-stack e-commerce platform built for performance and scalability.",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/rk-codes/ecart-pro",
      demoUrl: "#",
      delay: 0,
    },
    {
      title: "ConnectSphere", 
      description: "A real-time chat application using WebSockets for instant message delivery.",
      tags: ["React", "WebSockets", "Express"],
      githubUrl: "https://github.com/rk-codes/connectsphere",
      demoUrl: "#",
      delay: 100,
    },
    {
      title: "DevFlow",
      description: "A developer productivity app with task management and time tracking features.",
      tags: ["Next.js", "Prisma", "Tailwind"],
      githubUrl: "#",
      demoUrl: "#",
      delay: 200,
    },
    {
      title: "Portfolio Site",
      description: "A responsive portfolio website showcasing modern design principles.",
      tags: ["React", "TypeScript", "Framer Motion"],
      githubUrl: "#",
      demoUrl: "#",
      delay: 300,
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-text-secondary font-semibold mb-4 tracking-wider uppercase">
            Featured Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
            Selected Case Studies
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-interactive rounded-[var(--radius-lg)] p-8 group animate-fade-up"
              style={{ animationDelay: `${project.delay}ms` }}
            >
              <div className="space-y-6">
                {/* Project Header */}
                <div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-glass-border text-text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-glass-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-text-primary hover:text-brand-primary"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-text-primary hover:text-brand-primary"
                    asChild
                  >
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;