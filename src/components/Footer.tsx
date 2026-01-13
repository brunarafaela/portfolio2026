import { Github, Linkedin, Twitch, Instagram, Mail, FileText } from "lucide-react";

const CV_URL = "https://docs.google.com/document/d/1AoeJ5DXp_bBN9dKiyRcPwdpzZv3zuwxIE1uekEBBXfI/edit?usp=sharing";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/brunarafaela"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/brunarafaela/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.twitch.tv/rafinha_php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Twitch"
            >
              <Twitch className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/bruna.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:brunarafaelav@outlook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Currículo"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
          <p className="font-mono text-sm text-muted-foreground">
            2026 © <span className="text-primary">Bruna Lima</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
