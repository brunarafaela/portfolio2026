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

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="group"
              >
                <div className="py-5 px-1 border-b border-border/60 hover:border-primary/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <h3 className="font-medium text-foreground">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                      <Calendar className="w-3 h-3" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {exp.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-mono bg-muted/50 hover:bg-primary/20 transition-colors"
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
                      <AccordionContent className="text-sm text-muted-foreground">
                        {exp.description}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
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
