import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeSection from "./components/home-section";
import ProjectsSection from "./components/projects-section";
import SkillsSection from "./components/skills-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
