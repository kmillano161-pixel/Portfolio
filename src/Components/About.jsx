import React from 'react'
import kennethImg from '../assets/kenneth.jpg'

function About() {
  return (
    <section className="about-section">
      {/* Animated background blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <div className="about-container">
        {/* Profile Image Card */}
        <div className="profile-card">
          <div className="image-wrapper">
            <img 
              src={kennethImg} 
              alt="Kenneth Millano" 
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
          <div className="social-links">
            <a 
              href="https://github.com/kennethjhonlouisescc-cyber" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/kmillano161-pixel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link github"
            >
              GitHub
            </a>
            <a 
              href="https://twitter.com/kennethmillano" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Content Card */}
        <div className="content-card">
          <h2 className="section-label">Get to Know Me</h2>
          <h1 className="name">
            Kenneth <span className="gradient-text">Millano</span>
          </h1>
          <p className="title">Full Stack Developer</p>
          
          <p className="about-text">
            I'm a passionate developer who loves creating beautiful, functional, 
            and user-friendly experiences. With a strong foundation in modern 
            web technologies, I build applications that make a difference.
          </p>

          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">UI/UX</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Responsive Design</span>
            </div>
          </div>

          <div className="cta-section">
            <a href="#projects" className="cta-button primary">View My Work</a>
            <a href="#contact" className="cta-button secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

