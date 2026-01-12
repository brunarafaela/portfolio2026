import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Server, Layout, Cloud, BarChart3 } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "HTML, CSS, SCSS/SASS, Bootstrap, JavaScript, jQuery, Handlebars.js, Vue.js",
  },
  {
    icon: Server,
    title: "Backend",
    description: "POO, PHP, MySQL, MVC, API REST",
  },
  {
    icon: Cloud,
    title: "DevOps",
    description: "Azure DevOps, Cloud Azure, Docker, Git, CI/CD",
  },
  {
    icon: Layout,
    title: "CMS/WordPress",
    description: "Themes, ACF, Post Types, Elementor, WooCommerce",
  },
  {
    icon: Database,
    title: "Ferramentas",
    description: "Figma, Adobe Photoshop, UML, Trello, Slack, Bling, Tray",
  },
  {
    icon: BarChart3,
    title: "Analytics/SEO",
    description: "GTM, Google Analytics, Google Search Console",
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-card/50">
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
              Habilidades
            </h2>
            <div className="w-24 h-1 bg-primary rounded mx-auto mb-4" />
            <p className="text-muted-foreground max-w-xl mx-auto">
              Tecnologias e ferramentas que domino para criar soluções completas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative p-6 rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
