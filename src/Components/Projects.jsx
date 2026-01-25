import React from 'react'

// ==========================================
// EASY PROJECT ADDITION - Just add new objects here!
// ==========================================
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with React. Features smooth animations, glassmorphism design, and a clean user interface.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    technologies: ["React", "CSS3", "JavaScript", "Vite"],
    githubLink: "https://github.com/kennethmillano/portfolio",
    liveLink: "https://kennethmillano.vercel.app",
    features: ["Responsive Design", "Smooth Animations", "Clean UI"]
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "A beautiful weather application that displays current weather and forecasts. Integrates with a weather API for real-time data.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
    technologies: ["React", "CSS3", "API Integration", "JavaScript"],
    githubLink: "https://github.com/kennethmillano/weather-app",
    liveLink: "https://weather-kenneth.vercel.app",
    features: ["Real-time Data", "Search Functionality", "Beautiful UI"]
  },
  
]

function Projects() {
  return (
    <section id="projects" className="projects-section">
      {/* Background elements */}
      <div className="projects-blob projects-blob-1"></div>
      <div className="projects-blob projects-blob-2"></div>

      <div className="projects-container">
        {/* Header */}
        <div className="projects-header">
          <h2 className="projects-label">My Work</h2>
          <h1 className="projects-title">
            Frontend <span className="gradient-text">Projects</span>
          </h1>
          <p className="projects-subtitle">
            Here are some of the frontend projects I've built to showcase my skills as a junior developer.
            Each project demonstrates my ability to create beautiful, functional, and user-friendly interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map(project => (
            <article key={project.id} className="project-card">
              {/* Project Image */}
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link github"
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                {/* Features */}
                <div className="project-features">
                  {project.features.map((feature, index) => (
                    <span key={index} className="feature-tag">✓ {feature}</span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

