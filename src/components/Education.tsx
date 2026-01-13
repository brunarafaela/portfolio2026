import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Pós-graduação Lato Sensu",
    field: "Engenharia de Software com Metodologias Ágeis",
    institution: "Universidade Cruzeiro do Sul",
    period: "2024 - 2025",
    type: "Especialização",
  },
  {
    degree: "Tecnólogo",
    field: "Análise e Desenvolvimento de Sistemas",
    institution: "FATEC Ipiranga",
    period: "2016 - 2020",
    type: "Graduação",
  },
  {
    degree: "Técnico",
    field: "Administração",
    institution: "ETEC Getúlio Vargas",
    period: "2015 - 2016",
    type: "Técnico",
  },
  {
    degree: "Técnico",
    field: "Informática",
    institution: "ETEC de Heliópolis",
    period: "2013 - 2014",
    type: "Técnico",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">02.</span>{" "}
              Formação Acadêmica
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Minha trajetória educacional em tecnologia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.field + edu.period}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-mono bg-primary/10 text-primary rounded mb-2">
                      {edu.type}
                    </span>
                    <h3 className="font-semibold text-foreground mb-1">
                      {edu.degree} em {edu.field}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
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

export default Education;
