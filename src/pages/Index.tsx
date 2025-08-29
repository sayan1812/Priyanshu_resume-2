import { ModernParticles } from "@/components/ModernParticles";
import { SectionIndicator } from "@/components/SectionIndicator";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AIChatbot } from "@/components/AIChatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Modern Particles Background */}
      <ModernParticles />
      
      {/* Section Indicators */}
      <SectionIndicator title="HOME" sectionId="home" />
      <SectionIndicator title="ABOUT" sectionId="about" />
      <SectionIndicator title="EDUCATION" sectionId="education" />
      <SectionIndicator title="EXPERIENCE" sectionId="experience" />
      <SectionIndicator title="SKILLS" sectionId="skills" />
      <SectionIndicator title="SERVICES" sectionId="services" />
      <SectionIndicator title="PROJECTS" sectionId="projects" />
      <SectionIndicator title="ACHIEVEMENTS" sectionId="achievements" />
      <SectionIndicator title="CONTACT" sectionId="contact" />
      
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  );
};

export default Index;
