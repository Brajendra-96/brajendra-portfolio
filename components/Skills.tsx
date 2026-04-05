const skills = [
  {
    icon: '⚡',
    name: 'Core Proficiency',
    tags: ['Angular', 'TypeScript', 'JavaScript', 'Node.js'],
  },
  {
    icon: '🎨',
    name: 'UI Frameworks',
    tags: ['React', 'Angular Material', 'Bootstrap', 'MUI'],
  },
  {
    icon: '🔄',
    name: 'State & Async',
    tags: ['RxJS', 'NgRx', 'Redux', 'Promises'],
  },
  {
    icon: '🗄️',
    name: 'Backend & DB',
    tags: ['Express.js', 'MySQL', 'MongoDB', 'REST APIs'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    tags: ['AWS S3', 'CloudFront', 'Docker', 'Git'],
  },
  {
    icon: '🛠️',
    name: 'Tools & Process',
    tags: ['Jira', 'Bitbucket', 'SQL Workbench', 'Agile'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-bg">
      <p className="section-label">02 — Expertise</p>
      <h2 className="section-title">
        The <em>stack</em> behind<br />the solutions.
      </h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-tags">
              {skill.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
