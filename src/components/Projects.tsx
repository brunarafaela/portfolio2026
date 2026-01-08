import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce completa com carrinho, pagamentos via Stripe e painel administrativo.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplicativo de gerenciamento de tarefas com drag-and-drop, colaboração em tempo real e notificações.",
    tech: ["Next.js", "Prisma", "Socket.io", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard de analytics com visualização de dados em tempo real, gráficos interativos e relatórios.",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">03.</span>{" "}
              Projetos
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Alguns dos projetos que construí recentemente
            </p>
          </motion.div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image/Preview */}
                <div
                  className={`md:col-span-7 ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 rounded-lg group-hover:bg-transparent transition-all duration-300" />
                    <div className="aspect-video rounded-lg bg-gradient-to-br from-muted to-card border border-border overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-mono text-2xl text-primary/50">
                          {project.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1
                      ? "md:left-0 md:text-left"
                      : "md:right-0 md:text-right"
                  }`}
                >
                  <p className="font-mono text-primary text-sm mb-2">
                    Projeto Destaque
                  </p>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <div className="p-6 rounded-lg bg-card shadow-xl mb-4">
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 font-mono text-sm text-muted-foreground mb-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {project.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${
                      index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
