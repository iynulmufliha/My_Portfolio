import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./Introduction.css";

const Introduction = () => {
  const name = "M. Iynul Mufliha";

  return (
    <div className="intro-container">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-4">
          {name.split("").map((char, index) => (
            <span
              key={index}
              className="letter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <h2 className="mb-4 animate__animated animate__fadeIn animate__delay-0.5s animate__fast">
          Full Stack Developer | Designer
        </h2>
        <p className="lead animate__animated animate__fadeIn animate__delay-1s animate__fast">
          I'm a second-year BCA student at Jagran Lakecity University, specializing in Full Stack Development.
          I blend creativity with technical skills, crafting responsive web applications and innovative designs.
          Passionate about coding, problem-solving, and continuously learning to enhance user experiences.
        </p>
      </div>
    </div>
  );
};

export default Introduction;

