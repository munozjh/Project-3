import React from "react";
import ProjectCard from "./ProjectCard";
import { Filter } from "lucide-react";

const PortfolioSection = ({
  categories,
  selectedCategory,
  onSelectCategory,
  projects,
}) => {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <h2>My Portfolio</h2>
        <div className="filter-bar">
          <span className="filter-label">
            <Filter size={16} /> Filter:
          </span>
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;