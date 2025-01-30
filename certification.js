import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import JavaImage from './image/java.jpg';
import FigmaImage from './image/figma.jpg';
import GraphicImage from './image/graphic.jpg';
import PythonImage from './image/python.jpg';
import SpeakingImage from './image/speaking.jpg';
import CanvaImage from './image/canva.jpg';
import ChancellorsImage from './image/chancellors.jpg';
import WebImage from './image/web.jpg';

const Certification = () => {
  const certifications = [
    { src: JavaImage, title: "Java Certification" },
    { src: FigmaImage, title: "Figma Certification" },
    { src: GraphicImage, title: "Graphic Design Certification" },
    { src: PythonImage, title: "Python Certification" },
    { src: SpeakingImage, title: "Speaking Certification" },
    { src: CanvaImage, title: "Canva Certification" },
    { src: ChancellorsImage, title: "Chancellors Certification" },
    { src: WebImage, title: "Web Development Certification" },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-light text-center mt-1 mb-4">Certifications I have done during the time period</h2>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
        {certifications.map((cert, index) => (
          <div key={index} className="col">
            <div className="card border-0 animate__animated animate__zoomIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <img
                src={cert.src}
                className="card-img-top"
                alt={cert.title}
                style={{
                  objectFit: 'cover',
                  height: '200px',
                }}
              />
              <div className="card-body p-0 text-center bg-black ">
                <h5 className="card-title m-2 text-info-subtle">{cert.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes hoverEffect {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        .card:hover {
          animation: hoverEffect 0.5s ease-in-out;
        }

        .card-body h5 {
          transition: color 0.3s;
        }

        .card-body h5:hover {
          color: #17a2b8;
        }
      `}</style>
    </div>
  );
};

export default Certification;
