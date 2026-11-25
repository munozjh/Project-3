import React from "react";
import { Shield, Network, Terminal, Globe, ExternalLink } from "lucide-react";

function ProjectCard({ project }) {
  const renderBannerIcon = (type) => {
    switch (type) {
      case "shield":
        return <Shield size={40} />;
      case "network":
        return <Network size={40} />;
      case "code":
        return <Terminal size={40} />;
      default:
        return <Globe size={40} />;
    }
  };

  return (
    <article className="project-card">
      <div className={`card-banner banner-${project.bannerType || "web"}`}>
        {renderBannerIcon(project.bannerType)}
        <span>{project.category}</span>
      </div>

      <div className="card-content">
        <span className="card-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {project.liveUrl && (
          <div className="card-actions">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-link"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;