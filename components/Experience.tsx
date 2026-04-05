'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Moglix',
    role: 'Senior Web Developer',
    period: 'Apr 2024 – Present',
    location: 'Noida, India',
    points: [
      'Led a high-performing frontend team building scalable, high-availability features for Moglix\'s B2B e-commerce platform — serving thousands of enterprise buyers.',
      'Directed end-to-end delivery of 10+ major features annually: from sprint planning to deployment, consistently on time and above quality benchmarks.',
      'Authored technical documentation that cut new developer onboarding time by 50%, accelerating team velocity.',
      'Implemented advanced frontend performance strategies — achieving 30% improvement in page load times across 50+ device and browser configurations.',
      'Collaborated across product, design, QA, and backend teams to ship user-centric features that measurably improved customer satisfaction.',
    ],
  },
  {
    company: 'ITPROFOUND INDIA Pvt. Ltd.',
    role: 'Frontend Developer',
    period: 'Nov 2021 – Aug 2023',
    location: 'Hyderabad, India',
    points: [
      'Led full frontend lifecycle for OPUS24 (restaurant management) and Dineazy platforms — from requirement analysis through UI architecture and delivery.',
      'Leveraged AWS (S3, CloudFront) to deploy and optimize scalable cloud-native frontend infrastructure.',
      'Built critical modules — booking systems, folio management, rate card features — achieving 40% gain in development efficiency via reusable component architecture.',
      'Engineered responsive, accessible UIs in React that elevated user engagement across diverse devices and screen sizes.',
      'Maintained a 98% sprint milestone adherence rate using Agile methodology, contributing to defect rates below 1%.',
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
