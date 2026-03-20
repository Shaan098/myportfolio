import React, { useState } from 'react'

function Navigation({ toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">SS</div>

          <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="nav-link">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="nav-link">About</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }} className="nav-link">Skills</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className="nav-link">Projects</a>
            <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }} className="nav-link">Experience</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="nav-link">Contact</a>
          </div>

          <div className="nav-actions">
            <button onClick={toggleTheme} className="theme-btn" title="Toggle dark mode">
              <i className="fas fa-moon"></i>
            </button>
            <a href="https://github.com/Shaan098" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/shaan-saurav" target="_blank" rel="noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i>
            </a>
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
