import React, { useEffect, useState } from 'react'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const texts = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Creative Coder']
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const typeText = () => {
      const currentText = texts[textIndex]
      setDisplayText(currentText.substring(0, displayText.length + 1))
    }

    const timer = setTimeout(typeText, 100)
    
    if (displayText === texts[textIndex]) {
      setTimeout(() => {
        setTextIndex((textIndex + 1) % texts.length)
        setDisplayText('')
      }, 2000)
    }

    return () => clearTimeout(timer)
  }, [displayText, textIndex])

  const downloadResume = () => {
    window.open('#', '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-avatar">
            <div className="avatar-circle">SS</div>
          </div>

          <h1 className="hero-title">Shaan Saurav</h1>

          <h2 className="hero-subtitle">
            <span className="typing-text">{displayText}</span>
          </h2>

          <p className="hero-description">
            Building scalable web applications and solving real-world problems with code. Passionate about full-stack development and always learning new technologies.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <div className="stat-number">180+</div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">85%+</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
              View My Projects
            </button>
            <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
            <button className="btn btn-ghost" onClick={downloadResume}>
              Download Resume
            </button>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Shaan098" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/shaan-saurav" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
