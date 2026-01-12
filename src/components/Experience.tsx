import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Hypera Pharma",
    role: "Analista Desenvolvedora Web Pleno",
    period: "06/2023 - 11/2024",
    description:
      "Desenvolvimento orientado a agilidade, experiência do usuário, responsividade, desempenho e SEO. Ambiente híbrido de trabalho.",
  },
  {
    company: "Colmeia Performance Digital",
    role: "Desenvolvedora Web",
    period: "10/2021 - 05/2023",
    description:
      "Alocada na Hypera Pharma. Desenvolvimento de sites WordPress com PHP, JavaScript e MySQL. Criação de temas personalizados, landing pages e otimização de performance.",
  },
  {
    company: "Fuerza Studio",
    role: "Desenvolvedora Front-end",
    period: "05/2021 - 09/2021",
    description:
      "Desenvolvimento front-end para projetos web utilizando tecnologias modernas e boas práticas de desenvolvimento.",
  },
  {
    company: "Enube.me",
    role: "Desenvolvedora Front-end",
    period: "12/2020 - 04/2021",
    description:
      "Atuação no desenvolvimento de interfaces web com foco em experiência do usuário e performance.",
  },
  {
    company: "Autônoma",
    role: "Desenvolvedora Web",
    period: "08/2016 - 11/2020",
    description:
      "Desenvolvimento de sites e aplicações web para diversos clientes. WordPress, PHP, JavaScript, HTML e CSS.",
  },
  {
    company: "Seconci-SP",
    role: "Estagiária",
    period: "08/2015 - 07/2016",
    description:
      "Início da carreira profissional com suporte técnico e desenvolvimento de soluções web.",
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
              <span className="font-mono text-primary text-lg">03.</span>{" "}
              Experiência Profissional
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Minha trajetória profissional desde 2015
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative flex flex-col md:flex-row gap-4 mb-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full md:-translate-x-1/2 -translate-x-1 mt-6 z-10" />

                {/* Content card */}
                <div
                  className={`ml-6 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="p-5 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <h3 className="font-medium text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="w-3 h-3" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
