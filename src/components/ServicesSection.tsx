import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Globe, Code2, Database, Palette, ShoppingCart, BookOpen } from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  features: string[];
  color: string;
}

export const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services: Service[] = [
    {
      title: "Web Development",
      description: "Creating modern, responsive websites with clean code and optimal performance",
      icon: Globe,
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern UI/UX"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Front-End Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience",
      icon: Palette,
      features: ["UI/UX Design", "Interactive Elements", "Cross-Browser Compatibility", "Mobile-First"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Back-End Basics",
      description: "Building robust server-side applications with Node.js and MySQL integration",
      icon: Database,
      features: ["API Development", "Database Design", "Server Configuration", "Security Implementation"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Portfolio Websites",
      description: "Professional portfolio websites to showcase your work and skills effectively",
      icon: Code2,
      features: ["Custom Design", "Portfolio Showcase", "Contact Integration", "Performance Optimized"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "E-commerce Basics",
      description: "Simple e-commerce solutions with product catalogs and basic shopping features",
      icon: ShoppingCart,
      features: ["Product Catalog", "Shopping Cart", "Order Management", "Payment Integration"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Continuous Learning",
      description: "Always staying updated with latest technologies and best practices",
      icon: BookOpen,
      features: ["Latest Technologies", "Best Practices", "Code Quality", "Problem Solving"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative">
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
            <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          <p className="text-lg text-text-secondary mt-6 max-w-2xl mx-auto">
            What I can help you build and achieve with modern web technologies
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="glass-card p-6 lg:p-8 rounded-2xl hover-glow group relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300 mb-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`} />
                          <span className="text-text-secondary text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
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