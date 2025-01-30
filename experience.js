import React from 'react';
import { FaBriefcase, FaPencilAlt, FaCode } from 'react-icons/fa';

const Experience = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-light text-center mt-1 mb-4">My Experience</h2>

      <div className="text-light mb-5">
        <h3 className="text-center text-md-start">Prodigy Infotech</h3>
        <p className="text-center text-md-start">Web Development Intern | June, 2024</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaBriefcase size={30} className="mb-3" />
                <h5 className="card-title">Front-End Development</h5>
                <p className="card-text">Contributed to the development of user interfaces using HTML, CSS, and JavaScript, enhancing the overall user experience.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaBriefcase size={30} className="mb-3" />
                <h5 className="card-title">Back-End Development</h5>
                <p className="card-text">Assisted in developing server-side logic and database management to ensure efficient data processing and storage.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaBriefcase size={30} className="mb-3" />
                <h5 className="card-title">Team Collaboration</h5>
                <p className="card-text">Collaborated with team members on various projects, ensuring timely and quality deliverables.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="text-light mb-5">
        <h3 className="text-center text-md-start">Social Baiters</h3>
        <p className="text-center text-md-start">Key Designer | 2023 - Present</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaPencilAlt size={30} className="mb-3" />
                <h5 className="card-title">Flyer Design</h5>
                <p className="card-text">Designed engaging flyers and promotional materials for small business clusters, increasing their visibility.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaPencilAlt size={30} className="mb-3" />
                <h5 className="card-title">Social Networking</h5>
                <p className="card-text">Improved social networking and branding strategies for clients, boosting their online presence and engagement.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaPencilAlt size={30} className="mb-3" />
                <h5 className="card-title">Event Promotion</h5>
                <p className="card-text">Handled promotional flyers and social media for the Trichy Book Fair 2024, attracting a large audience to the event.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-info m-5" />

      <div className="text-light mb-5">
        <h3 className="text-center text-md-start">KBTL Foundation</h3>
        <p className="text-center text-md-start">Android App Developer Intern (NGO) | December 2024 - Present</p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaCode size={30} className="mb-3" />
                <h5 className="card-title">Classes</h5>
                <p className="card-text">Taking mental health and technical classes to promote wellness and enhance programming skills among participants.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaCode size={30} className="mb-3" />
                <h5 className="card-title">Android App Development</h5>
                <p className="card-text">Currently working on developing and improving Android applications to enhance user experience and functionality.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card bg-dark text-light">
              <div className="card-body">
                <FaCode size={30} className="mb-3" />
                <h5 className="card-title">Workshops</h5>
                <p className="card-text">A part on UI/UX development and other technical topics to encourage hands-on learning and innovation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
