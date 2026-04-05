'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Moglix',
    role: 'Senior Web Developer',
    period: 'Apr 2024 – Present',
    location: 'Noida, India',
    points: [
      'Led a high-performing frontend team that built scalable, high-availability features for Moglix\'s B2B e-commerce platform, serving thousands of enterprise buyers.',
      'Directed end-to-end delivery of 20+ production releases annually, covering major features, workflow enhancements, and compliance updates from sprint planning through deployment.',
      'Authored technical documentation that reduced new-developer onboarding time by 50%, accelerating team velocity.',
      'Implemented advanced frontend performance strategies, improving page load time by 30% across 50+ device and browser combinations.',
      'Collaborated with product, design, QA, and backend teams to ship user-centric features that measurably improved customer satisfaction.',
    ],
  },
  {
    company: 'ITPROFOUND INDIA Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'Nov 2021 – Aug 2023',
    location: 'Hyderabad, India',
    points: [
      'Led the complete frontend lifecycle for OPUS24 (restaurant operations) and Dineazy, from requirements analysis to UI architecture and production delivery.',
      'Used AWS (S3, CloudFront) to deploy and optimize scalable, cloud-native frontend infrastructure.',
      'Built core modules including table booking, folio management, and rate-card workflows, delivering 40% faster development through reusable components.',
      'Engineered responsive, accessible React interfaces that improved usability across phones, tablets, and desktop screens.',
      'Maintained 98% sprint milestone adherence using Agile practices, helping keep post-release defects below 1% across continuous multi-module rollouts.',
    ],
  },
]

export default function Experience() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )
    itemRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience">
      <p className="section-label">03 — Journey</p>
      <h2 className="section-title">
        Where I&apos;ve<br /><em>made impact.</em>
      </h2>
      <div className="timeline">
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className="timeline-item"
            ref={el => { itemRefs.current[i] = el }}
          >
            <div className="timeline-dot" />
            <div className="timeline-header">
              <div>
                <div className="timeline-company">{exp.company} · {exp.location}</div>
                <div className="timeline-role">{exp.role}</div>
              </div>
              <div className="timeline-period">{exp.period}</div>
            </div>
            <div className="timeline-content">
              <ul>
                {exp.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
