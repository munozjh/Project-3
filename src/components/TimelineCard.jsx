import React from "react";
import { Award } from "lucide-react";

const TimelineCard = ({ period, title, subtitle, details = [], variant = "experience" }) => {
  const isEducation = variant === "education";

  return (
    <div className={`timeline-card ${isEducation ? "edu-card" : ""}`}>
      <div className="edu-header">
        {isEducation && <Award size={18} className="accent-icon" />}
        <span className="timeline-period">{period}</span>
      </div>
      <h4>{title}</h4>
      <p className="timeline-company">{subtitle}</p>
      {details.length > 0 && (
        <ul>
          {details.map((detail, dIdx) => (
            <li key={dIdx}>{detail}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineCard;