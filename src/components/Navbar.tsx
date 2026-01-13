import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, FileText } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Sobre", href: "about" },
  { name: "Formação", href: "education" },
  { name: "Experiência", href: "experience" },
  { name: "Projetos", href: "projects" },
  { name: "Contato", href: "contact" },
];

const CV_URL = "https://docs.google.com/document/d/1AoeJ5DXp_bBN9dKiyRcPwdpzZv3zuwxIE1uekEBBXfI/edit?usp=sharing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={scrollToTop}
          className="font-mono text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          {"<bruna />"}
        </button>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
          <li>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              title="Ver Currículo"
            >
              Curriculo
            </a>
          </li>
        </ul>
        
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Me contrate!
        </button>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] glass border-l border-border/50">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                className="flex items-center gap-2 text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Currículo
              </motion.a>
              <motion.button
                onClick={() => handleLinkClick("contact")}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1, duration: 0.3 }}
                className="mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity"
              >
                Fale Comigo
              </motion.button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
