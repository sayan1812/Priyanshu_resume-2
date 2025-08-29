import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Globe, Database, Wrench, Star, Zap } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: Array<{ name: string; level: number; color: string }>;
}

export const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: Code2,
      skills: [
        { name: "C++", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "Java", level: 85, color: "from-orange-500 to-orange-600" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-yellow-600" },
        { name: "Python", level: 75, color: "from-green-500 to-green-600" },
        { name: "C", level: 85, color: "from-gray-500 to-gray-600" },
      ]
    },
    {
      title: "Frontend",
      icon: Globe,
      skills: [
        { name: "HTML", level: 95, color: "from-red-500 to-red-600" },
        { name: "CSS", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "React.js", level: 80, color: "from-cyan-500 to-cyan-600" },
        { name: "Bootstrap", level: 85, color: "from-purple-500 to-purple-600" },
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      skills: [
        { name: "Node.js", level: 75, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 70, color: "from-gray-500 to-gray-600" },
        { name: "MySQL", level: 80, color: "from-blue-500 to-blue-600" },
      ]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: [
        { name: "Git", level: 85, color: "from-red-500 to-red-600" },
        { name: "GitHub", level: 90, color: "from-gray-500 to-gray-600" },
        { name: "VS Code", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Postman", level: 75, color: "from-orange-500 to-orange-600" },
      ]
    },
    {
      title: "Specializations",
      icon: Star,
      skills: [
        { name: "DSA", level: 85, color: "from-purple-500 to-purple-600" },
        { name: "Full-Stack Development", level: 80, color: "from-indigo-500 to-indigo-600" },
        { name: "API Integration", level: 75, color: "from-teal-500 to-teal-600" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-surface/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            My technical expertise and proficiency in various technologies
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                className="glass-card p-6 lg:p-8 rounded-2xl hover-glow group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                        duration: 0.6 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-text-primary font-medium">{skill.name}</span>
                        <span className="text-text-secondary text-sm font-medium">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                            duration: 1,
                            ease: "easeOut"
                          }}
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};