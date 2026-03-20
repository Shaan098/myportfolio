import React from 'react'

function Skills() {
  const skillsData = {
    languages: [
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 85 },
      { name: 'PHP', level: 70 },
      { name: 'Python', level: 75 }
    ],
    frameworks: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Bootstrap', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 }
    ],
    tools: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'Thunder Client', level: 85 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'AWS', level: 75 }
    ],
    soft: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Team Player', level: 90 },
      { name: 'Adaptability', level: 88 },
      { name: 'Communication', level: 85 },
      { name: 'Leadership', level: 80 },
      { name: 'Creative Thinking', level: 85 }
    ]
  }

  const SkillBar = ({ name, level }) => (
    <div className="skill-item">
      <div className="skill-name">{name}</div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${level}%` }}></div>
      </div>
      <div className="skill-level">{level}%</div>
    </div>
  )

  const SkillCategory = ({ title, skills }) => (
    <div className="skill-category">
      <h3 className="category-title">{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillBar key={index} name={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  )

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-content">
          <SkillCategory title="Programming Languages" skills={skillsData.languages} />
          <SkillCategory title="Frameworks & Libraries" skills={skillsData.frameworks} />
          <SkillCategory title="Tools & Technology" skills={skillsData.tools} />
          <SkillCategory title="Soft Skills" skills={skillsData.soft} />
        </div>
      </div>
    </section>
  )
}

export default Skills
