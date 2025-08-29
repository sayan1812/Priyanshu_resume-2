import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const socialLinks = [
    {
      href: "https://github.com/sayan1812",
      icon: Github,
      label: "GitHub"
    },
    {
      href: "https://www.linkedin.com/in/priyanshu-halder-849933278/",
      icon: Linkedin,
      label: "LinkedIn"
    },
    {
      href: "https://leetcode.com/u/sayan2024/",
      icon: Code2,
      label: "LeetCode"
    },
    {
      href: "mailto:priyanshuhalder2001@gmail.com",
      icon: Mail,
      label: "Email"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-card to-surface border-t border-card-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-red" />
      </div>
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Priyanshu Halder
            </h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              A passionate Computer Science & Engineering student and Full-Stack Developer 
              dedicated to creating innovative solutions and continuously learning new technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-glow transition-all duration-300"
                  title={link.label}
                >
                  <link.icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-text-secondary">
              <p>priyanshuhalder2001@gmail.com</p>
              <p>+91 8389937791</p>
              <p>Kolkata, India</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border"
        >
          <div className="flex items-center space-x-2 text-text-secondary mb-4 md:mb-0">
            <span>© {currentYear} Priyanshu Halder. All Rights Reserved.</span>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent-red animate-pulse" />
            <span>and React</span>
          </div>

          <Button
            onClick={scrollToTop}
            variant="glass"
            size="icon"
            className="hover-glow"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};