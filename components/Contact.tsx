export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label" style={{ justifyContent: 'center' }}>05 — Contact</p>
      <h2 className="section-title" style={{ marginBottom: '16px' }}>
        Let&apos;s build something<br /><em>remarkable.</em>
      </h2>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '14px', color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}>
        Open to senior frontend roles, leadership positions, or exciting product challenges.
        Let&apos;s talk.
      </p>

      <a href="mailto:singh.brajendra038@gmail.com" className="contact-email">
        singh.brajendra038@gmail.com
      </a>

      <div className="contact-links">
        <a
          href="https://linkedin.com/in/brajendrakumar96"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span>↗</span> LinkedIn
        </a>
        <a href="tel:+919471634898" className="contact-link">
          <span>📞</span> +91 94716 34898
        </a>
        <a href="mailto:singh.brajendra038@gmail.com" className="contact-link">
          <span>✉</span> Email Me
        </a>
      </div>
    </section>
  )
}
