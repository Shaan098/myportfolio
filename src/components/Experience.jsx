import React from 'react'

function Experience() {
  const experienceData = [
    {
      title: 'Full Stack Developer Intern',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developing and maintaining web applications using React and Node.js'
    },
    {
      title: 'Junior Developer',
      company: 'Software Solutions',
      period: '2022 - 2023',
      description: 'Built responsive web applications and worked with REST APIs'
    },
    {
      title: 'Web Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Created dynamic websites and implemented user-friendly interfaces'
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="title-underline"></div>
        </div>

        <div className="experience-timeline">
          {experienceData.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3 className="exp-title">{exp.title}</h3>
                <p className="exp-company">{exp.company}</p>
                <span className="exp-period">{exp.period}</span>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
