import React, { useState, useEffect } from "react";
import { PROFILE } from "../../data/profile";
import { i } from "framer-motion/client";
import "../../styles/hero.css";
export default function Hero() {
  const [typedText, setTypedText] = useState("");

  const fullText = `const developer = {
  name: "${PROFILE.name}",
  role: "${PROFILE.title}",
  location: "${PROFILE.location}",
  status: "available"
};`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullText]);

  const lastName = PROFILE.name.split(" ").slice(-1)[0];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I’m <span className="gradient-text">{lastName}</span>
          </h1>

          <h2 className="hero-role">{PROFILE.title}</h2>

          <p className="hero-blurb">{PROFILE.blurb}</p>

          <div className="hero-actions">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hero-btn primary">
              GitHub
            </a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hero-btn">
              LinkedIn
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hero-btn outline">
              Contact Me
            </a>
          </div>

          <div className="hero-meta">
            <span>{PROFILE.location}</span>
            <span>{PROFILE.phone}</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>

            <pre className="code-block">
              {typedText}
              <span className="cursor">|</span>
            </pre>

            <div className="tech-stack">
              <span>React</span>
              <span>TypeScript</span>
              <span>React Native</span>
              <span>AWS</span>
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
