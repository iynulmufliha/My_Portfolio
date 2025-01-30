import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import TicTacToeImage from './image/internship1.jpg';
import StopwatchImage from './image/stopwatch.jpg';
import NavbarImage from './image/nav.jpg';
import WeatherAppImage from './image/weather app.png';
import UniversityManagementImage from './image/university management system 3.png';
import Uni1Image from './image/uni1.png';
import Uni2Image from './image/uni 2.png';

const Projects = () => {
  return (
    <div className="container my-5">
      <h2 className="text-light text-center mb-5">Projects done so far !</h2>
      
      <div className="card mb-4">
        <div className="card-header text-center">
          <h5>Tic Tac Toe Game, Stopwatch, and Navbar</h5>
        </div>
        <div className="card-body">
          <p>
            These are a few of the simple projects I created during my web development internship.
            They mark the beginning of my journey into web development.
          </p>
          <div className="row ">
            <div className="col-4 ">
              <div className="card bg-dark">
                <img src={TicTacToeImage} className="card-img-top" alt="Tic Tac Toe" />
                <div className="card-body">
                  <h5 className="card-title text-info">Tic Tac Toe Game</h5>
                  <p className='text-light'>A simple Tic Tac Toe game created using HTML, CSS, and JavaScript.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-dark">
                <img src={StopwatchImage} className="card-img-top" alt="Stopwatch" />
                <div className="card-body">
                  <h5 className="card-title text-info">Stopwatch App</h5>
                  <p className='text-light'>A simple stopwatch app developed using JavaScript during my internship.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card bg-dark">
                <img src={NavbarImage} className="card-img-top" alt="Navbar" />
                <div className="card-body">
                  <h5 className="card-title text-info">Navbar Design</h5>
                  <p className='text-light'>A responsive navbar built using HTML, CSS, and JavaScript.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header text-center">
          <h5>GhostCast Weather Application</h5>
        </div>
        <div className="card-body">
          <img src={WeatherAppImage} className="d-block w-75 mx-auto" alt="Weather App" />
          <h5 className="mt-3">Overview:</h5>
          <p>
            GhostCast is a weather app I built using React.js. It provides real-time weather data, including the 7-day forecast, using the WeatherAPI. The application was designed with an aesthetic background and responsive layout, aiming for an engaging user experience.
          </p>
          <h6>Key Features:</h6>
          <ul>
            <li>Search functionality with auto-complete suggestions.</li>
            <li>Displays current weather conditions and 7-day forecast.</li>
            <li>Shows temperature, weather conditions, humidity, and hourly visualized data.</li>
            <li>Aesthetic background and responsive design for better engagement.</li>
          </ul>
          <h6>Technologies Used:</h6>
          <ul>
            <li>React.js, Bootstrap</li>
            <li>WeatherAPI, Netlify, Postman Tool</li>
          </ul>
          <p>Hosted at: <a href="https://ghostcast.netlify.app" target="_blank" rel="noopener noreferrer">https://ghostcast.netlify.app</a></p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-header text-center">
          <h5>University Management System (UMS)</h5>
        </div>
        <div className="card-body">
          <p>
            The University Management System is a project developed using Java for the backend (AWT for the UI), HTML/CSS for the frontend, and MySQL for the database. This system automates core administrative and academic functions, reducing manual errors and improving efficiency.
          </p>
          <h6>Key Features:</h6>
          <ul>
            <li>Automated core administrative and academic functions.</li>
            <li>40% reduction in administrative workload and improved task execution time.</li>
            <li>Modular design facilitating scalability, with potential for online learning integration.</li>
          </ul>
          <h6>Technologies Used:</h6>
          <ul>
            <li>Backend: Java (AWT)</li>
            <li>Frontend: HTML/CSS</li>
            <li>Database: MySQL</li>
          </ul>
          <div className="row">
            <div className="col-4">
              <img src={Uni1Image} className="d-block w-100" alt="University Image 1" />
            </div>
            <div className="col-4">
              <img src={Uni2Image} className="d-block w-100" alt="University Image 2" />
            </div>
            <div className="col-4">
              <img src={UniversityManagementImage} className="d-block w-100" alt="University Management System" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
