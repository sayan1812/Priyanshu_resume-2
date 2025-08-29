import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "./TypewriterEffect";
import profileImage from "@/assets/profile-photo.jpg";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
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
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative mx-auto h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48">
            <img
              src={profileImage}
              alt="Priyanshu Halder"
              className="glass-card h-full w-full rounded-full object-cover p-2 animate-pulse-glow animate-float-enhanced"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-pulse" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-text-primary">Hi, I'm </span>
            <span className="gradient-text">Priyanshu Halder</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
            Computer Science & Engineering Student | Full-Stack Developer
          </p>
          
          <div className="h-16 flex items-center justify-center">
            <TypewriterEffect
              words={[
                "Web Developer",
                "Java Programmer",
                "C++ Expert",
                "React Developer",
                "Node.js Enthusiast",
                "AI Enthusiast"
              ]}
              className="text-lg md:text-xl lg:text-2xl text-primary font-semibold"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button
            variant="hero"
            size="lg"
            onClick={() => window.open("mailto:priyanshuhalder2001@gmail.com")}
            className="group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Contact Me
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://drive.google.com/file/d/1p117VDFmylgvrd-6y86XQ3wQNO3yA-y2/view?usp=sharing", "_blank")}
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="glass-card rounded-full p-3 hover-glow transition-all duration-300"
              title={link.label}
            >
              <link.icon className="h-6 w-6 text-primary" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};