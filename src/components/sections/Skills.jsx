import React from "react";
import { SKILLS } from "../../data/skills";
import "../../styles/skills.css";
export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-subtitle">
          Technologies and tools I work with regularly
        </p>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <div key={index} className="skill-card">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
