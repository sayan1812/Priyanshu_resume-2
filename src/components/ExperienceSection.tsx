import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, Code2, Database } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type: string;
  description: string;
  technologies: string[];
  icon: any;
}

export const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const experiences: ExperienceItem[] = [
    {
      period: "Mar–Apr 2025",
      role: "Front-End Development Intern",
      company: "CodeAlpha",
      type: "Remote Internship",
      description: "Built responsive pages using HTML/CSS/JS and optimized layouts for better performance. Collaborated with senior developers to implement modern UI/UX designs.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
      icon: Code2
    },
    {
      period: "Jul 7–Jul 21, 2025",
      role: "DSA C++ Programming Intern",
      company: "InternPe",
      type: "Remote Internship",
      description: "Solved advanced coding challenges and implemented optimized data structures. Focused on algorithm optimization and competitive programming techniques.",
      technologies: ["C++", "Data Structures", "Algorithms", "Problem Solving", "Optimization"],
      icon: Database
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 to-primary/5" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Hands-on experience through internships and practical projects
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block" />
            
            <div className="space-y-8">
              {experiences.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10 hidden md:block animate-pulse-glow" />
                  
                  {/* Content Card */}
                  <div className="md:ml-20 glass-card p-6 lg:p-8 rounded-2xl hover-glow group">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 flex-shrink-0">
                          <item.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                            {item.role}
                          </h3>
                          <p className="text-primary font-semibold text-lg">{item.company}</p>
                          <span className="inline-block bg-accent-red/10 text-accent-red px-3 py-1 rounded-full text-sm font-medium mt-2">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{item.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-3 uppercase tracking-wide">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};