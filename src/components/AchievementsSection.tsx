import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  organization: string;
  date: string;
  description: string;
  certificateUrl: string;
  type: "certification" | "achievement";
  icon: any;
}

export const AchievementsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const achievements: Achievement[] = [
    {
      title: "Technology Job Simulation",
      organization: "Deloitte",
      date: "June 13, 2025",
      description: "Successfully completed a comprehensive technology job simulation program, demonstrating practical skills in enterprise technology solutions and consulting.",
      certificateUrl: "https://drive.google.com/file/d/1KRbxqU4IjRr1G-bf7hiTRsWyuAQhXSc_/view",
      type: "certification",
      icon: Star
    },
    {
      title: "Certified in Drawing & Painting",
      organization: "Art Academy",
      date: "2009–2013",
      description: "Completed a comprehensive 4-year certification program in drawing and painting, developing creative skills and artistic expression.",
      certificateUrl: "https://drive.google.com/file/d/17xBCLp3br1k7UryNriZ9f0l7VBehU4G_/view",
      type: "achievement",
      icon: Award
    }
  ];

  const getTypeColor = (type: string) => {
    return type === "certification" 
      ? "from-blue-500 to-cyan-500"
      : "from-purple-500 to-pink-500";
  };

  const getTypeLabel = (type: string) => {
    return type === "certification" ? "Certification" : "Achievement";
  };

  return (
    <section id="achievements" className="py-20 lg:py-32 relative">
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
            <span className="gradient-text">Achievements & Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            Recognition and certifications that showcase my commitment to continuous learning and excellence
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="glass-card p-6 lg:p-8 rounded-2xl hover-glow group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getTypeColor(achievement.type)} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${getTypeColor(achievement.type)} rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 flex-shrink-0`}>
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <span className={`px-3 py-1 bg-gradient-to-r ${getTypeColor(achievement.type)} text-white text-xs font-medium rounded-full`}>
                            {getTypeLabel(achievement.type)}
                          </span>
                        </div>
                        <p className="text-primary font-semibold text-lg">{achievement.organization}</p>
                        <div className="flex items-center space-x-2 text-sm text-text-secondary mt-2">
                          <Calendar className="w-4 h-4" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button
                      variant="outline"
                      onClick={() => window.open(achievement.certificateUrl, "_blank")}
                      className="group/btn self-start"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                      View Certificate
                    </Button>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "7+", label: "Projects Completed" },
              { number: "2", label: "Internships" },
              { number: "5+", label: "Technologies" },
              { number: "2", label: "Certifications" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="glass-card p-6 rounded-xl text-center hover-glow"
              >
                <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};