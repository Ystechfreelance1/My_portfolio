import React, { useEffect, useRef } from "react";
import { EXPERIENCE } from "../../data/experience";
import { i } from "framer-motion/client";
import "../../styles/experience.css";
export default function Experience() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          Professional journey & responsibilities
        </p>

        <div className="experience-timeline">
          {EXPERIENCE.map((job, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`experience-item ${
                index % 2 === 0 ? "slide-left" : "slide-right"
              }`}
            >
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="experience-header">
                  <h3 className="experience-role">{job.role}</h3>
                  <span className="experience-period">{job.period}</span>
                </div>

                <p className="experience-company">{job.company}</p>

                <ul className="experience-bullets">
                  {job.bullets.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
