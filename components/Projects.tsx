const projects = [
  {
    num: '01',
    company: 'Moglix',
    title: 'Buyers Procurement Platform',
    desc: 'End-to-end RFQ (Request for Quotation) and ARC management system powering enterprise procurement for thousands of B2B buyers. Streamlined supplier engagement at scale through real-time notifications and intelligent automation.',
    metrics: [
      { val: '30%', label: 'Faster Response Time' },
      { val: '1,500+', label: 'RFQs / Day' },
      { val: '25%', label: 'Higher User Satisfaction' },
    ],
    tags: ['Angular', 'TypeScript', 'RxJS', 'NgRx'],
  },
  {
    num: '02',
    company: 'ITPROFOUND',
    title: 'OPUS24 & Dineazy — Hospitality OS',
    desc: 'A full-featured hospitality platform with KOT (Kitchen Order Ticket) flow, reservation workflows, and multi-gateway payment integrations (Stripe, Cashfree, Razorpay). Built to reduce operational chaos in busy restaurants and hotels.',
    metrics: [
      { val: '20%', label: 'Faster Order Time' },
      { val: '15%', label: 'Better Reservations' },
      { val: '<1%', label: 'Post-release Defects' },
    ],
    tags: ['React', 'Node.js', 'AWS', 'Stripe'],
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <p className="section-label">04 — Work</p>
      <h2 className="section-title">
        Projects that<br /><em>moved the needle.</em>
      </h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.num} className="project-card">
            <div className="project-num">{p.num}</div>
            <div className="project-company">{p.company}</div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-metrics">
              {p.metrics.map(m => (
                <div key={m.label} className="metric">
                  <div className="metric-val">{m.val}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
            <div className="skill-tags" style={{ marginTop: '28px' }}>
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
