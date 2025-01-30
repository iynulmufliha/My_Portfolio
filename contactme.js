import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import './contactme.css';

const ContactMe = () => {
  return (
    <div className="container mt-5 text-light">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center text-md-start">
          <h3 className="mt-1 mb-4 text-info animate__animated animate__fadeInDown">Let's Connect!</h3>
          <p className="text-light animate__animated animate__fadeInLeft">
            Whether you have questions, want to collaborate on a project, or just want to say hi, feel free to reach out to me at{' '}
            <a href="mailto:mufli2205@gmail.com" className="text-info">mufli2205@gmail.com</a>.
          </p>
          <p className="text-muted animate__animated animate__fadeInLeft animate__delay-0.5s">
            <small>If you encounter any issues, email me directly, and I'll assist you as soon as possible.</small>
          </p>
          <div className="social-links mt-3 animate__animated animate__fadeInUp">
            <a href="https://instagram.com/iy_nul" className="text-info me-3">
              <FaInstagram size={30} />
            </a>
            <a href="https://linkedin.com/in/iynul-mufliha-1203b6277" className="text-info me-3">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/iynulmufliha" className="text-info me-3">
              <FaGithub size={30} />
            </a>
            <a href="https://leetcode.com/iynul_mufliha/" className="text-info">
              <FaCode size={30} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-md-5 mt-5 mt-md-0">
          <h2 className="text-center mb-4 text-light animate__animated animate__fadeInDown">Contact Me</h2>
          <form className="animate__animated animate__fadeInUp animate__delay-0.5s">
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">Name</label>
              <input
                type="text"
                className="form-control input-dark"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">Email</label>
              <input
                type="email"
                className="form-control input-dark"
                id="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label text-light">Phone Number</label>
              <input
                type="tel"
                className="form-control input-dark"
                id="phone"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-light">Message</label>
              <textarea
                className="form-control input-dark"
                id="message"
                rows="4"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .social-links a {
          transition: transform 0.3s;
        }

        .social-links a:hover {
          transform: scale(1.2);
        }

        .form-control {
          background-color: #222;
          border: none;
          color: #fff;
        }

        .form-control::placeholder {
          color: #888;
        }

        .btn-info {
          transition: background-color 0.3s, transform 0.3s;
        }

        .btn-info:hover {
          background-color: #17a2b8;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default ContactMe;
