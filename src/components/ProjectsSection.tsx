import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Calendar, Code2, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  icon: any;
}

export const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = [
    {
      title: "TimeTable Generator",
      description: "A Java-based application for generating optimized class schedules with conflict resolution and resource management.",
      technologies: ["Java", "Swing", "Algorithm Design"],
      githubUrl: "https://github.com/sayan1812/Time_Table_Generator",
      category: "Desktop Application",
      icon: Calendar
    },
    {
      title: "Library Management System",
      description: "Complete library management solution with book tracking, member management, and borrowing system built in C++.",
      technologies: ["C++", "File Handling", "Data Structures"],
      githubUrl: "https://github.com/sayan1812/Library-Management-System-C-",
      category: "System Software",
      icon: Database
    },
    {
      title: "Autocorrect Tool",
      description: "Intelligent text correction tool with spell checking and suggestion algorithms using web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Algorithm"],
      githubUrl: "https://github.com/sayan1812/Autocorrect-Tool",
      category: "Web Application",
      icon: Code2
    },
    {
      title: "Resume Parser",
      description: "AI-powered resume parsing tool that extracts and structures information from PDF resumes automatically.",
      technologies: ["Python", "HTML", "CSS", "NLP"],
      githubUrl: "https://github.com/sayan1812/resume_parser",
      category: "AI/ML Tool",
      icon: Database
    },
    {
      title: "Translator App",
      description: "Multi-language translation application with clean UI and real-time translation capabilities.",
      technologies: ["JavaScript", "CSS", "HTML", "API Integration"],
      githubUrl: "https://github.com/sayan1812/translator",
      category: "Web Application",
      icon: Globe
    },
    {
      title: "Music Player",
      description: "Feature-rich music player with playlist management, audio controls, and responsive design.",
      technologies: ["JavaScript", "HTML", "CSS", "Audio API"],
      githubUrl: "https://github.com/sayan1812/Music-Player",
      category: "Web Application",
      icon: Code2
    },
    {
      title: "Priyanshu's Portfolio",
      description: "Personal portfolio website showcasing projects, skills, and experience with modern design.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      githubUrl: "https://github.com/sayan1812/Priyanshu-s-Portfolio",
      category: "Portfolio Website",
      icon: Globe
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Desktop Application": "from-blue-500 to-cyan-500",
      "System Software": "from-green-500 to-teal-500",
      "Web Application": "from-purple-500 to-pink-500",
      "AI/ML Tool": "from-orange-500 to-red-500",
      "Portfolio Website": "from-indigo-500 to-purple-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            A collection of my recent work and personal projects showcasing various technologies and skills
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass-card p-6 lg:p-8 rounded-2xl hover-glow group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(project.category)} rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-medium rounded-full`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="flex-1 group/btn"
                    >
                      <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                      View Code
                    </Button>
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="flex-1 group/btn"
                      >
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                        Live Demo
                      </Button>
                    )}
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