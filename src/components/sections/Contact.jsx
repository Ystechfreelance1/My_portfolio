import React from "react";
import { PROFILE } from "../../data/profile";
import "../../styles/contact.css";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          Available for freelance, full-time, and remote opportunities
        </p>

        <div className="contact-grid">
          {/* Email */}
          <a
            href={`mailto:${PROFILE.email}`}
            className="contact-card"
            aria-label="Email"
          >
            <span className="contact-icon email">
              <svg viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4-8 5-8-5V6l8 5 8-5z" />
              </svg>
            </span>
            <div>
              <h4>Email</h4>
              <p>{PROFILE.email}</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${PROFILE.phone}`}
            className="contact-card"
            aria-label="Phone"
          >
            <span className="contact-icon phone">
              <svg viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 21 3 13.93 3 5.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
              </svg>
            </span>
            <div>
              <h4>Phone</h4>
              <p>{PROFILE.phone}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918790899459?text=Hi%20Sarath%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noreferrer"
            className="contact-card whatsapp"
            aria-label="WhatsApp"
          >
            <span className="contact-icon whatsapp-icon">
              <svg viewBox="0 0 32 32">
                <path d="M16.04 3C9.39 3 4 8.39 4 15.04c0 2.65.87 5.09 2.34 7.05L4 29l7.14-2.29a12 12 0 005.9 1.5c6.65 0 12.04-5.39 12.04-12.04C29.08 8.39 22.69 3 16.04 3zm6.98 17.38c-.29.82-1.7 1.56-2.34 1.66-.59.1-1.35.14-2.17-.14-.5-.16-1.14-.37-1.96-.73-3.45-1.5-5.7-4.96-5.87-5.19-.16-.23-1.4-1.87-1.4-3.56 0-1.7.87-2.54 1.18-2.89.3-.35.65-.44.87-.44h.62c.2 0 .46-.07.71.55.29.72.97 2.49 1.05 2.67.08.18.13.4.02.62-.11.23-.17.37-.34.57-.17.2-.36.44-.51.59-.17.17-.35.36-.15.71.2.35.89 1.46 1.91 2.37 1.32 1.17 2.43 1.54 2.78 1.71.35.17.56.14.77-.09.21-.23.89-1.03 1.13-1.38.23-.35.46-.29.77-.17.31.11 1.96.92 2.29 1.09.34.17.56.25.64.39.08.14.08.82-.21 1.64z"/>
              </svg>
            </span>
            <div>
              <h4>WhatsApp</h4>
              <p>Chat with me</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="GitHub"
          >
            <span className="contact-icon github">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.17-1.11-1.48-1.11-1.48-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.2 9.2 0 0112 6.8c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .27.18.59.69.48A10.02 10.02 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </span>
            <div>
              <h4>GitHub</h4>
              <p>View my projects</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
            aria-label="LinkedIn"
          >
            <span className="contact-icon linkedin">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.7 2.63 4.7 6.05v7h-4v-6.2c0-1.48-.03-3.4-2.08-3.4-2.08 0-2.4 1.62-2.4 3.3v6.3h-4v-16z"/>
              </svg>
            </span>
            <div>
              <h4>LinkedIn</h4>
              <p>Connect professionally</p>
            </div>
          </a>
        </div>

        <div className="contact-status">
          <span>●</span> Open to new opportunities
        </div>
      </div>
    </section>
  );
}
