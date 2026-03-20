import React from 'react'

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'Online Multi-Language Compiler',
      category: 'full-stack',
      image: '🖥️',
      description: 'A powerful online compiler that supports multiple programming languages with secure code execution.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Shaan098/online-compiler',
      live: 'https://compiler-client-9wha.vercel.app/'
    },
    {
      id: 2,
      title: 'AR Educational Content Viewer',
      category: 'full-stack',
      image: '🎨',
      description: 'Interactive AR application for visualizing 3D educational models with intuitive controls.',
      technologies: ['React', 'Three.js', 'AR.js', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Shaan098/ar-viewer',
      live: ''
    },
    {
      id: 3,
      title: 'Appointment System',
      category: 'full-stack',
      image: '📅',
      description: 'Complete appointment booking system with JWT authentication and dynamic scheduling.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/Shaan098/appointment-system',
      live: ''
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      <div className="project-image">{project.image}</div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      
      <div className="project-tech">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="project-links">
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
            <i className="fab fa-github"></i> Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="project-link">
            <i className="fas fa-external-link-alt"></i> Live
          </a>
        )}
      </div>
    </div>
  )

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
