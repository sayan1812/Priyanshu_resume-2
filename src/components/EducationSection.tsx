import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  description?: string;
}

export const EducationSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const education: EducationItem[] = [
    {
      period: "2022–2026",
      degree: "B.Tech in Computer Science & Engineering",
      institution: "IEM, Salt Lake",
      location: "Kolkata, India",
      description: "Specializing in Data Structures, Algorithms, Web Development, and Software Engineering"
    },
    {
      period: "2020–2022",
      degree: "Higher Secondary (Science)",
      institution: "S.M. Nasir Smriti High School",
      location: "West Bengal, India",
      description: "Focused on Physics, Chemistry, Mathematics, and Computer Science"
    },
    {
      period: "2014–2020",
      degree: "Secondary Education",
      institution: "Mira High School",
      location: "West Bengal, India",
      description: "Foundation in Science, Mathematics, and Computer Applications"
    }
  ];

  return (
    <section id="education" className="py-20 lg:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            My academic journey in building a strong foundation in computer science and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 hidden md:block" />
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background z-10 hidden md:block animate-pulse-glow" />
                  
                  {/* Content Card */}
                  <div className="md:ml-20 glass-card p-6 lg:p-8 rounded-2xl hover-glow group">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div className="flex items-center space-x-3 mb-3 lg:mb-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <GraduationCap className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                            {item.degree}
                          </h3>
                          <p className="text-primary font-semibold">{item.institution}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm text-text-secondary">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.period}</span>
                        </div>
                        {item.location && (
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {item.description && (
                      <p className="text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    )}
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