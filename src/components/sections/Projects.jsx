import React from "react";
import { PROJECTS } from "../../data/projects";
import "../../styles/projects.css";
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">
          Selected work showcasing web and mobile applications
        </p>

        <div className="projects-grid">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="project-card"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-index">
                  0{index + 1}
                </span>
              </div>

              <p className="project-desc">{project.desc}</p>

              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
