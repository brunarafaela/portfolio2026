import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const experiences = [
  {
    company: "Hypera Pharma",
    role: "Analista Desenvolvedora Web Pleno",
    period: "06/2023 - 11/2024",
    description:
      "Trabalhei como analista desenvolvedora em plataformas digitais de Martech. Alocada em squads de marcas da companhia bem como atuação em plataformas internas como CMS entre outros. Marcas: Neoquimica, Mantecorp Skincare, Zero-cal, Cepacol, Nebacetin, Coristina, Tamarine, Blumel, Hypera Pharma, Mantecorp Saúde.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "SCSS", "Bootstrap", "Docker", "Azure DevOps", "Git"],
  },
  {
    company: "Colmeia Performance Digital",
    role: "Desenvolvedora Web",
    period: "10/2021 - 05/2023",
    description:
      "Trabalhei no desenvolvimento de sites, blogs e landing pages em WordPress com foco em performance para captação de leads e conversão. Temas desenvolvidos por mim do zero, de acordo com especificação de cada cliente, utilizando ACF, post types e integração com plugins.",
    stack: ["WordPress", "PHP", "MySQL", "JavaScript", "HTML", "CSS", "SCSS", "ACF", "SEO"],
  },
  {
    company: "Fuerza Studio",
    role: "Desenvolvedora Front-end",
    period: "05/2021 - 09/2021",
    description: "Sustentação no site de Cadastra, otimização no site de Smiles, desenvolvimento front-end nos sites Nordic Cosmetics, Matrioska e Gerdau.",
    stack: ["WordPress", "PHP", "JavaScript", "HTML", "CSS", "SCSS", "jQuery", "Liferay"],
  },
  {
    company: "Enube.me",
    role: "Desenvolvedora Front-end",
    period: "12/2020 - 04/2021",
    description:
      "Atuação no desenvolvimento de um projeto web com foco em experiência do usuário e performance para um cliente da companhia com foco em compra de espaço em nuvem.",
    stack: ["JavaScript", "HTML", "CSS", "Vue.js", "Git"],
  },
  {
    company: "Autônoma",
    role: "Desenvolvedora Web",
    period: "08/2016 - 11/2020",
    description:
      "Desenvolvimento, manutenção e suporte técnico para clientes como Unilever, Faculdades Anclivepa, Westcon, entre outros. Minhas atribuições foram desde desenvolvimento de sites, landing pages, como manutenção em sistemas, e inclusão de conteúdos. Também desenvolvi sistemas como controle de holerites reservas de bolsas universitárias.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS", "WordPress", "jQuery", "Bootstrap"],
  },
  {
    company: "Seconci-SP",
    role: "Estagiária",
    period: "08/2015 - 07/2016",
    description:
      "Início da carreira profissional atuando em rotinas administrativas nos setores de Informática e Recursos Humanos",
    stack: ["Suporte Técnico", "Administração"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">04.</span>{" "}
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Minha trajetória profissional na área da tecnologia
            </p>
          </motion.div>

          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="group relative"
              >
                <div className="relative rounded-xl bg-secondary/30 border border-border/40 p-5 md:p-6 hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300 overflow-hidden">
                  {/* Accent left bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/30 group-hover:bg-primary transition-colors duration-300 rounded-l-xl" />

                  <div className="pl-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-primary text-sm">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                    </div>

                    <h3 className="text-base md:text-lg font-medium text-foreground mb-3">
                      {exp.role}
                    </h3>

                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {exp.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[11px] font-mono bg-muted/60 border border-border/50 hover:bg-primary/20 hover:border-primary/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="description" className="border-none">
                        <AccordionTrigger className="py-2 text-sm text-muted-foreground hover:text-primary hover:no-underline">
                          Minhas atribuições
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                          {exp.description}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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

export default Experience;
