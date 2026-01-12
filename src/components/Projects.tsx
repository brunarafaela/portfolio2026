import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

import hyperaPharma from "@/assets/projects/hypera-pharma.webp";
import nebacetin from "@/assets/projects/nebacetin.webp";
import mantecorpSkincare from "@/assets/projects/mantecorp-skincare.webp";
import neoQuimica from "@/assets/projects/neo-quimica.webp";
import mantecorpSaude from "@/assets/projects/mantecorp-saude.webp";
import coristina from "@/assets/projects/coristina.webp";

const projects = [
  {
    title: "Hypera Pharma",
    description:
      "Redesign completo. Responsável pelo front-end, back-end e reestruturação do banco de dados. Páginas de produtos segmentadas por categorias, otimização de SEO e performance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker"],
    live: "https://www.hypera.com.br/",
    image: hyperaPharma,
  },
  {
    title: "Nebacetin",
    description:
      "Redesign e reestruturação completa do conteúdo para receber a nova linha de produtos baby. Responsável pelo front-end, back-end, otimização de SEO e melhorias na performance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker"],
    live: "https://www.nebacetin.com.br/",
    image: nebacetin,
  },
  {
    title: "Mantecorp Skincare",
    description:
      "Responsável pelo desenvolvimento de diversas landing pages otimizadas em SEO e performance para campanhas de produtos, com captação de leads. Atuação no squad de skincare tanto em LPs como no blog.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Figma"],
    live: "https://www.mantecorpskincare.com.br/verao/",
    image: mantecorpSkincare,
  },
  {
    title: "Neo Química Vale por Dois",
    description:
      "Responsável pelo desenvolvimento da landing page da promoção Neo Química Vale por Dois, com um buscador de farmácias.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Git", "Docker"],
    live: "https://www.vitaminasneoquimica.com.br/vale-por-dois/",
    image: neoQuimica,
  },
  {
    title: "Mantecorp Saúde",
    description:
      "Novo portal integrado ao serviço Interplayers. Área médica e paciente, adesão a medicamentos. Responsável pelo front-end, back-end e reestruturação do banco de dados. Otimizado para performance e SEO.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "API Rest", "Docker", "Azure DevOps"],
    live: "https://www.mantecorpsaude.com.br/",
    image: mantecorpSaude,
  },
  {
    title: "Coristina",
    description:
      "Desenvolvimento de landing page sobre tratamentos complementares com Coristina. Otimizado para SEO e performance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker"],
    live: null,
    image: coristina,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">06.</span>{" "}
              Meu Portfolio
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Projetos que desenvolvi ao longo da minha carreira
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-primary">{project.title}</h3>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/brunarafaela?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ver mais no GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
