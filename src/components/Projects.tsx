import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker", "Git", "SEO"],
    live: "https://www.hypera.com.br/",
    image: hyperaPharma,
  },
  {
    title: "Nebacetin",
    description:
      "Redesign e reestruturação completa do conteúdo para receber a nova linha de produtos baby. Responsável pelo front-end, back-end, otimização de SEO e melhorias na performance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker", "Git", "SEO"],
    live: "https://www.nebacetin.com.br/",
    image: nebacetin,
  },
  {
    title: "Mantecorp Skincare",
    description:
      "Responsável pelo desenvolvimento de diversas landing pages otimizadas em SEO e performance para campanhas de produtos, com captação de leads. Atuação no squad de skincare tanto em LPs como no blog.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Figma", "SEO", "GTM"],
    live: "https://www.mantecorpskincare.com.br/verao/",
    image: mantecorpSkincare,
  },
  {
    title: "Neo Química Vale por Dois",
    description:
      "Responsável pelo desenvolvimento da landing page da promoção Neo Química Vale por Dois, com um buscador de farmácias.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Git", "Docker", "API REST"],
    live: "https://www.vitaminasneoquimica.com.br/vale-por-dois/",
    image: neoQuimica,
  },
  {
    title: "Mantecorp Saúde",
    description:
      "Novo portal integrado ao serviço Interplayers. Área médica e paciente, adesão a medicamentos. Responsável pelo front-end, back-end e reestruturação do banco de dados. Otimizado para performance e SEO.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "API REST", "Docker", "Azure DevOps", "Git", "SEO"],
    live: "https://www.mantecorpsaude.com.br/",
    image: mantecorpSaude,
  },
  {
    title: "Coristina",
    description:
      "Desenvolvimento de landing page sobre tratamentos complementares com Coristina. Otimizado para SEO e performance.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "SCSS", "Docker", "Git"],
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
              Meu Portfólio
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Alguns dos meus trabalhos de destaque.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project) => (
                  <CarouselItem key={project.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-all duration-300 z-10" />
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full aspect-video object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="p-5 flex flex-col flex-1">
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

                        {/* Description accordion */}
                        <Accordion type="single" collapsible className="w-full mb-3">
                          <AccordionItem value="description" className="border-none">
                            <AccordionTrigger className="py-2 text-sm text-muted-foreground hover:text-primary hover:no-underline">
                              Ver descrição
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-muted-foreground">
                              {project.description}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>

                        {/* All tech badges */}
                        <div className="flex flex-wrap gap-1.5 mt-auto">
                          {project.tech.map((t) => (
                            <Badge
                              key={t}
                              variant="secondary"
                              className="text-xs font-mono bg-muted/50 hover:bg-primary/20 transition-colors"
                            >
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-12" />
              <CarouselNext className="hidden md:flex -right-12" />
            </Carousel>
          </motion.div>

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
