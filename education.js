import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import 'animate.css';
import './education.css';

const Education = () => {
  const [isHovered, setIsHovered] = useState(false);

  const educationRef = useRef(null);

  return (
    <div className="container mt-5 text-light">
      <h2 className="text-center mb-4 text-light">Education</h2>

      <div
        className="row text-light mb-5"
        ref={educationRef}
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)} 
      >
        <div className="col-md-6 mb-4">
          <div
            className={`card bg-dark text-light text-center animate__animated ${isHovered ? 'animate__fadeInUp' : ''}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                <FaGraduationCap size={30} className="me-2" />
                Jagran Lakecity University
              </h5>
              <p className="card-text">Bhopal, Madhya Pradesh</p>
              <p className="card-text">
                Bachelor of Computer Applications (Hons.) <br />
                <strong>2023 - 2026</strong>
              </p>
              <p className="card-text">
                <strong>CGPA:</strong> 9.86
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div
            className={`card bg-dark text-light text-center animate__animated ${isHovered ? 'animate__fadeInUp animate__delay-1s' : ''}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                <FaSchool size={30} className="me-2" />
                SRV Public Senior Secondary School
              </h5>
              <p className="card-text">Trichy, Tamil Nadu</p>
              <p className="card-text">
                Class 12: Commerce with Computer Science <br />
                <strong>Passed Out:</strong> 2023
              </p>
              <p className="card-text">
                <strong>Percentage:</strong> 91%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
