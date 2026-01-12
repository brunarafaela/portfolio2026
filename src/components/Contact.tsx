import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-primary mb-4">07. E agora?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos Conversar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Estou sempre aberta a novas oportunidades e projetos interessantes. 
              Se quiser trocar uma ideia, é só me chamar!
            </p>
          </motion.div>

          <motion.a
            href="mailto:brunarafaelav@outlook.com"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow"
          >
            <Mail className="w-5 h-5" />
            Me mande uma mensagem
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
