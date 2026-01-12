import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.webp";

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
              <div className="flex items-center gap-2 text-sm text-primary mb-4">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP</span>
              </div>
              
              <p>
                Olá! Sou a <span className="text-foreground">Bruna Lima</span>, 
                Desenvolvedora Web apaixonada por tecnologia. Iniciei meus estudos em{" "}
                <span className="text-foreground">2013</span> e trabalho profissionalmente desde{" "}
                <span className="text-foreground">2016</span>.
              </p>
              <p>
                Minha especialidade é o desenvolvimento de sites com{" "}
                <span className="text-foreground">WordPress</span>, utilizando{" "}
                <span className="text-foreground">PHP</span>, <span className="text-foreground">MySQL</span> e{" "}
                <span className="text-foreground">JavaScript</span>. Trabalho com foco em{" "}
                <span className="text-foreground">UX/UI Design</span>, <span className="text-foreground">SEO</span> e{" "}
                <span className="text-foreground">Performance</span>.
              </p>
              <p>
                Atualmente cursando Pós-graduação em Engenharia de Software com Metodologias Ágeis, 
                sempre buscando aprimorar minhas habilidades e entregar produtos de qualidade 
                que fazem diferença na experiência dos usuários.
              </p>

              <div className="pt-4">
                <p className="text-foreground font-medium mb-3">
                  Tecnologias que tenho trabalhado:
                </p>
                <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                  {["HTML/CSS/SCSS", "JavaScript/jQuery", "PHP/MySQL", "Vue.js", "WordPress", "Docker"].map(
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
                    alt="Foto de perfil da Bruna Lima" 
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
