import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Formação", href: "#education" },
  { name: "Experiência", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-primary">
          {"<bruna />"}
        </a>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        
        <a
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
        >
          Fale Comigo
        </a>

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
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                className="mt-4 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-center hover:opacity-90 transition-opacity"
              >
                Fale Comigo
              </motion.a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
