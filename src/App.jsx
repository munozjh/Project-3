import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
//import MainImage from "./images/seguridad-appgate.jpg";
import {
  profileData,
  skillsData,
  projectsData,
  experienceData,
  educationData,
} from "./data/portfolioData";
import { Server } from "lucide-react";
import "./App.css";

function App() {
  // Parent state shared with child components via props
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeSection, setActiveSection] = useState("projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories = ["ALL", "IT & Security", "Software Dev", "Web & UI"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  const handleSelectSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="app-layout">
      {/* Child 1: Sidebar */}
      <Sidebar
        profile={profileData}
        activeSection={activeSection}
        isOpen={mobileMenuOpen}
        onToggleMenu={() => setMobileMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMobileMenuOpen(false)}
        onSelectSection={handleSelectSection}
      />

      <main className="main-content">
        <header className="hero-header">
          <div className="hero-badge">
            <Server size={16} /> {profileData.badgeText}
          </div>
          <h1>{profileData.name}</h1>
          <p className="hero-subtitle">{profileData.title}</p>
        </header>

        {/* Child 2: PortfolioSection -> renders Child ProjectCard */}
        <PortfolioSection
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          projects={filteredProjects}
        />

        <hr className="divider" />

        {/* Child 3: AboutSection -> renders Child SkillGroupCard */}
        <AboutSection
          summary={profileData.summary}
          languages={profileData.languages}
          skills={skillsData}
        />

        <hr className="divider" />

        {/* Child 4: ExperienceSection -> renders Child TimelineCard */}
        <ExperienceSection
          experience={experienceData}
          education={educationData}
        />

        <hr className="divider" />

        {/* Child 5: ContactSection */}
        <ContactSection
          formData={formData}
          formSubmitted={formSubmitted}
          onFieldChange={handleFormFieldChange}
          onSubmit={handleFormSubmit}
        />

        {/* Child 6: Footer */}
        <Footer name={profileData.name} />
      </main>
    </div>
  );
}

export default App;