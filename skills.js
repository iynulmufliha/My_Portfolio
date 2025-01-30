import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaPython, FaJava, FaDatabase, FaCogs, FaPencilAlt, FaUsers, FaLanguage } from 'react-icons/fa';
import './skills.css';

const Skills = () => {
  return (
    <div className="container mt-5 text-light">
      <h2 className="text-center mb-4 text-light">Skills & Abilities</h2>

      <div className="row text-light mb-5">
        <h3 className="text-center text-md-start text-light">Technical Skills</h3>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning"><FaHtml5 size={30} className="me-2" /> HTML</h5>
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning"><FaCss3Alt size={30} className="me-2" /> CSS</h5>
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning"><FaJs size={30} className="me-2" /> JavaScript</h5>
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning"><FaBootstrap size={30} className="me-2" /> Bootstrap</h5>
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning"><FaReact size={30} className="me-2" /> React.js</h5>
              <p className="card-text">Front-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-danger"><FaPython size={30} className="me-2" /> Python</h5>
              <p className="card-text">Back-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-danger"><FaJava size={30} className="me-2" /> Java</h5>
              <p className="card-text">Back-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-danger"><FaCogs size={30} className="me-2" /> C, C++</h5>
              <p className="card-text">Back-end Development</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-danger"><FaDatabase size={30} className="me-2" /> DBMS</h5>
              <p className="card-text ">Back-end Development</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="row text-light mb-5">
        <h3 className="text-center text-md-start text-light">Frameworks & Tools</h3>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-primary"><FaPencilAlt size={30} className="me-2" /> Frameworks & Tools</h5>
              <p className="card-text text-light">Canva, Basics of Figma, InDesign, Illustrator</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="row text-light mb-5">
        <h3 className="text-center text-md-start text-light">Soft Skills</h3>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-info"><FaUsers size={30} className="me-2" /> Soft Skills</h5>
              <p className="card-text text-light">Teamwork, Collaboration, Presentation, Technical Writing</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="row text-light mb-5">
        <h3 className="text-center text-md-start text-light">Additional Skills</h3>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-warning "><FaCogs size={30} className="me-2" /> Additional Skills</h5>
              <p className="card-text text-light">Data Structures, Code Debugging, Decision-Making, Time Management, Computer Networking</p>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="row text-light mb-5">
        <h3 className="text-center text-md-start text-light">Languages</h3>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-light text-center animate__animated animate__zoomIn">
            <div className="card-body">
              <h5 className="card-title text-success"><FaLanguage size={30} className="me-2" /> Languages</h5>
              <p className="card-text text-light">Tamil (native), English (professional), Hindi (basic communication and writing)</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Skills;
