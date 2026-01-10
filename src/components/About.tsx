import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="font-mono text-primary text-lg">01.</span>{" "}
              Sobre Mim
            </h2>
            <div className="w-24 h-1 bg-primary rounded mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-3 space-y-4 text-muted-foreground"
            >
              <p>
                Olá! Sou um desenvolvedor apaixonado por criar experiências digitais 
                que combinam <span className="text-foreground">design elegante</span> com{" "}
                <span className="text-foreground">código limpo</span>.
              </p>
              <p>
                Minha jornada na programação começou há alguns anos, quando decidi 
                transformar curiosidade em profissão. Desde então, tenho trabalhado 
                com startups e empresas para entregar soluções que fazem diferença.
              </p>
              <p>
                Atualmente, meu foco está em construir produtos acessíveis e 
                inclusivos para a web, utilizando as tecnologias mais modernas 
                do mercado.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">
                  Tecnologias que tenho trabalhado recentemente:
                </p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "Tailwind CSS"].map(
                    (tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="text-primary">▹</span>
                        {tech}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2 relative group"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-primary/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="relative rounded-lg overflow-hidden border-2 border-primary/50">
                  <img 
                    src={profilePhoto} 
                    alt="Foto de perfil" 
                    className="aspect-square object-cover w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
