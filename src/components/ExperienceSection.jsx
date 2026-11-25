import React from "react";
import TimelineCard from "./TimelineCard";

const ExperienceSection = ({ experience, education }) => {
  return (
    <section id="experience" className="section">
      <h2>Experience & Education</h2>
      <div className="two-col-grid">
        <div>
          <h3 className="subsection-title">Work Experience</h3>
          {experience.map((exp, idx) => (
            <TimelineCard
              key={idx}
              period={exp.period}
              title={exp.role}
              subtitle={exp.company}
              details={exp.details}
              variant="experience"
            />
          ))}
        </div>

        <div>
          <h3 className="subsection-title">Education & Certifications</h3>
          {education.map((edu, idx) => (
            <TimelineCard
              key={idx}
              period={edu.period}
              title={edu.degree}
              subtitle={edu.institution}
              variant="education"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;