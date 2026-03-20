import React from 'react'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a strong foundation in computer science and 
              hands-on experience building web applications. I thrive on tackling challenging problems 
              and continuously expanding my technical skills.
            </p>
            <p>
              With expertise in modern web technologies including React, Node.js, and databases like 
              MongoDB and MySQL, I create efficient, scalable solutions. My journey in tech has been 
              marked by curiosity, dedication to learning, and a drive to create meaningful applications.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or solving algorithmic problems on LeetCode to sharpen my problem-solving skills.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Full Stack Development</h3>
              <p>Building complete web applications from frontend to backend</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>Problem Solving</h3>
              <p>Strong algorithmic thinking and efficient code optimization</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h3>Innovation</h3>
              <p>Creating cutting-edge solutions with modern technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
