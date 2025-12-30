import React from "react";
import Navbar from "./components/layout.jsx/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout.jsx/Footer";
import ScrollTop from "./components/layout.jsx/ScrollTop";
import AIAssistant from "./components/AIAssistant";
import "./styles/App.css";
import AboutMe from "./components/sections/AboutMe";

export default function App() {
  return (
    <main className="app-container">
      <Navbar />
      <Hero />
      <Skills />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      {/* <ScrollTop /> */}
      <AIAssistant />
      
    </main>
  );
}
