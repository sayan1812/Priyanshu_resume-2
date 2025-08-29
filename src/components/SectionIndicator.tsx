import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface SectionIndicatorProps {
  title: string;
  sectionId: string;
}

export const SectionIndicator = ({ title, sectionId }: SectionIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3, rootMargin: "-100px 0px" }
      );
      
      observer.observe(section);
      return () => observer.unobserve(section);
    }
  }, [sectionId]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 0.12 : 0, 
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 50
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
    >
      <div className="text-6xl md:text-8xl lg:text-[12rem] font-black bg-gradient-primary bg-clip-text text-transparent select-none whitespace-nowrap opacity-30 tracking-wider">
        {title}
      </div>
    </motion.div>
  );
};