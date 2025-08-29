import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, GraduationCap, Mail, Phone, User } from "lucide-react";

export const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const personalInfo = [
    { icon: Calendar, label: "Birthday", value: "18 Dec 2003" },
    { icon: User, label: "Age", value: "21" },
    { icon: GraduationCap, label: "Degree", value: "B.Tech CSE" },
    { icon: Mail, label: "Email", value: "priyanshuhalder2001@gmail.com" },
    { icon: Phone, label: "Contact", value: "+91 8389937791" },
    { icon: MapPin, label: "City", value: "Kolkata, India" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-red/5" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-6">
                Passionate Developer & Continuous Learner
              </h3>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a hardworking and passionate Computer Science and Engineering student at IEM, Salt Lake, Kolkata. 
                I'm continuously learning web development through hands-on projects, aiming to become a proficient 
                full-stack developer.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                My journey in technology is driven by curiosity and the desire to create innovative solutions. 
                I believe in learning by doing and constantly challenging myself with new technologies and frameworks.
              </p>

              <div className="pt-6">
                <motion.div
                  className="glass-card p-6 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-primary font-semibold text-lg mb-2">Current Focus</p>
                  <p className="text-text-secondary">
                    Building modern web applications with React, Node.js, and exploring AI/ML technologies
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Personal Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-8">
                Personal Details
              </h3>
              
              <div className="grid gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="glass-card p-4 rounded-xl hover-glow group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-text-primary mt-1">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};