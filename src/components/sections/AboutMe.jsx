import React from "react";
import "../../styles/about.css";
import profileImg from "../../assets/profile.jpg"; // replace with your photo

export default function AboutMe() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Image */}
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* Content */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I’m a <strong>Full Stack Developer</strong> with hands-on experience
            in building modern web and mobile applications. I specialize in
            creating scalable, user-focused solutions using JavaScript-based
            technologies.
          </p>

          <p className="about-text">
            I enjoy working across the entire development lifecycle — from
            planning and UI design to development, testing, and deployment.
            My goal is to build products that are clean, reliable, and impactful.
          </p>

          <div className="about-tags">
            <span>React</span>
            <span>React Native</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Web & Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
