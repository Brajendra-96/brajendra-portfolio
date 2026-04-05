export default function About() {
  return (
    <section id="about">
      <p className="section-label">01 — About</p>
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-title">Crafting <em>experiences</em>,<br />not just interfaces.</h2>
          <p>
            I&apos;m a <strong>Senior Frontend Engineer</strong> with 6+ years of experience building production-grade
            web applications that serve large-scale B2B users. Currently leading frontend development
            at <strong>Moglix</strong> — one of India&apos;s largest B2B e-commerce platforms.
          </p>
          <p>
            My delivery metrics reflect end-to-end production work across multiple products, including
            major launches, iterative feature rollouts, performance improvements, and stability-focused releases.
          </p>
          <p>
            My craft sits at the intersection of <strong>engineering rigor and design sensibility</strong>.
            I obsess over performance, scalability, and the micro-interactions that make users
            feel genuinely delighted.
          </p>
          <p>
            From architecting Angular microfrontends to integrating complex payment systems,
            I bring both the technical depth and leadership to ship things that matter.
          </p>
        </div>

        <div>
          <div className="about-card" style={{ marginBottom: '16px' }}>
            <p className="about-card-title">Education</p>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              B.E. — Computer Science
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>
              Visvesvaraya Technological University
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-dim)', marginTop: '8px' }}>
              Belagavi, Karnataka · 2019
            </div>
          </div>

          <div className="about-card" style={{ marginBottom: '16px' }}>
            <p className="about-card-title">Currently</p>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>
              Senior Web Developer
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-muted)' }}>
              Moglix · Noida, India
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent)', marginTop: '8px' }}>
              April 2024 — Present
            </div>
          </div>

          <div className="about-card">
            <p className="about-card-title">Location</p>
            <div style={{ fontSize: '20px', fontWeight: 700 }}>Noida, Uttar Pradesh</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '8px' }}>
              India 🇮🇳 · Open to Remote
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
