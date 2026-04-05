export default function Hero() {
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
        <strong>Angular · React · TypeScript</strong> — Building B2B platforms at scale.<br />
        4+ years turning complex problems into elegant interfaces.
      </p>

      <div className="hero-cta">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-secondary">Get In Touch</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        Scroll to explore
      </div>

      <div className="hero-stats">
        <div className="stat">
          <div className="stat-num">10<span>+</span></div>
          <div className="stat-label">Major Features Shipped</div>
        </div>
        <div className="stat">
          <div className="stat-num">30<span>%</span></div>
          <div className="stat-label">Perf. Improvement</div>
        </div>
        <div className="stat">
          <div className="stat-num">4<span>yr</span></div>
          <div className="stat-label">Industry Experience</div>
        </div>
      </div>
    </section>
  )
}
