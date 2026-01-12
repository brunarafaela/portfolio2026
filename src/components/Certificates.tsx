import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "Engenharia de Software",
    institution: "FIAP Nano Course",
    type: "Nano Course",
  },
  {
    title: "User Experience",
    institution: "FIAP Nano Course",
    type: "Nano Course",
  },
  {
    title: "Boas práticas em desenvolvimento de software",
    institution: "TIM TEC",
    type: "Curso",
  },
  {
    title: "Bootcamp Full Stack Developer Javascript Vue.js",
    institution: "Cataline",
    type: "Bootcamp",
  },
  {
    title: "Sass: CSS with superpowers",
    institution: "Alura",
    type: "Curso",
  },
  {
    title: "Vue.js part 1: building Single Page Applications",
    institution: "Alura",
    type: "Curso",
  },
];

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificates" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">05.</span>{" "}
              Certificados
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cursos e certificações complementares
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.08 * index }}
                className="group p-5 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block px-2 py-0.5 text-xs font-mono bg-muted text-muted-foreground rounded mb-2">
                      {cert.type}
                    </span>
                    <h3 className="font-medium text-foreground text-sm leading-tight mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {cert.institution}
                    </p>
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

export default Certificates;
