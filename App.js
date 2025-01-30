import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Introduction from './introduction';
import Skills from './skills';
import Education from './education';
import Experience from './experience';
import Projects from './projects';
import Certification from './certification';
import ContactMe from './contactme';

function App() {
  return (
    <div className="bg-black text-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-black bg-info fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link text-black" href="#introduction">Introduction</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#education">Education</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#certification">Certification</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#contact-me">Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="pt-5 mt-5">
        <section id="introduction" className="py-5">
          <div className="container">
            <Introduction />
          </div>
        </section>

        <section id="skills" className="py-5 bg-dark text-light">
          <div className="container">
            <Skills />
          </div>
        </section>

        <section id="education" className="py-5">
          <div className="container">
            <Education />
          </div>
        </section>

        <section id="experience" className="py-5 bg-dark text-light">
          <div className="container">
            <Experience />
          </div>
        </section>

        <section id="projects" className="py-5">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="certification" className="py-5 bg-dark text-light">
          <div className="container">
            <Certification />
          </div>
        </section>

        <section id="contact-me" className="py-5">
          <div className="container">
            <ContactMe />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;