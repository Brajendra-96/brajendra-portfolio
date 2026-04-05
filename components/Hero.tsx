export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />

      <div className="avail-badge" style={{ animationDelay: '0.1s' }}>
        <span className="avail-dot" />
        Open to Senior Frontend Roles
      </div>

      <p className="hero-label">Senior Web Developer</p>

      <h1 className="hero-name">
        Brajendra<br />
        <span>Kumar</span>
      </h1>

      <p className="hero-title">
        <strong>Angular · React · Next.js · TypeScript</strong> — Building B2B platforms at scale.<br />
        6+ years delivering reliable, high-impact frontend systems for enterprise teams.
      </p>

      <div className="hero-cta">
        <a
          href="#projects"
          className="btn-primary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('projects')
          }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="btn-secondary"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('contact')
          }}
        >
          Get In Touch
        </a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">45<span>+</span></div>
          <div className="stat-label">Production Deliveries</div>
        </div>
        <div className="stat">
          <div className="stat-num">30<span>%</span></div>
          <div className="stat-label">Perf. Improvement</div>
        </div>
        <div className="stat">
          <div className="stat-num">6<span>+</span></div>
          <div className="stat-label">Years of Experience</div>
        </div>
      </div>
    </section>
  )
}
