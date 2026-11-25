import React from "react";
import SkillGroupCard from "./SkillGroupCard";

const AboutSection = ({ summary, languages, skills }) => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p className="about-text">{summary}</p>

      <div className="languages-box">
        <h3>Languages</h3>
        <div className="lang-grid">
          {languages.map((lang, idx) => (
            <div key={idx} className="lang-item">
              <strong>{lang.name}:</strong> <span>{lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      <h3 className="subsection-title">Technical Skills & Technologies</h3>
      <div className="skills-grid">
        {skills.map((group, idx) => (
          <SkillGroupCard
            key={idx}
            category={group.category}
            items={group.items}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;