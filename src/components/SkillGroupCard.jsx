import React from "react";

const SkillGroupCard = ({ category, items }) => {
  return (
    <div className="skill-card">
      <h4>{category}</h4>
      <div className="skill-pills">
        {items.map((skill, sIdx) => (
          <span key={sIdx} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillGroupCard;