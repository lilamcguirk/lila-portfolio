import React from 'react';

const RESUME_DATA = {
  name: "Lila Mcguirk",
  subtitle: "Website Development and Software Engineering",
  contact: "(502) 930-1950 | Imcguirk@uvm.edu | linkedin.com/in/lila-mcguirk-75a54520b | github.com/lilamcguirk",
  objective: "Seeking a role in full-stack development to build and enhance website functionality, ensuring mobile responsiveness, advanced features, and seamless portal integration through cross-team collaboration.",
  skills: [
    { label: "Languages", val: "Python, JavaScript, TypeScript, Java, C++, C" },
    { label: "Frontend", val: "React, Vue.js, HTML5, CSS3, Responsive Design" },
    { label: "Backend & APIs", val: "REST APIs, Stripe API, Firebase, PHP, SQL" },
    { label: "Data & Analytics", val: "Google Analytics, Microsoft Clarity, SEMrush" },
    { label: "Tools & Practices", val: "Git, Agile workflows, SEO optimization, Cross-browser testing" },
  ],
  experience: [
    {
      title: "Junior Software Developer",
      company: "T-Bone Productions",
      date: "July 2025 - Current",
      bullets: [
        "Developed and deployed production-grade web applications for enterprise clients including Toyota, Mazda, Lexus, Yokohama, and Salvation Army",
        "Integrated Stripe payment APIs to enable secure online billing, transaction processing, and automated receipt generation for Toyota customers",
        "Led the redevelopment of Toyota dealership websites across Australia using Vue.js, improving performance, maintainability, and UI consistency",
        "Collaborated with designers, backend developers, and stakeholders to deliver scalable, client-specific solutions",
      ]
    },
    {
      title: "Junior Website Developer",
      company: "Red Barn Media Group",
      date: "August 2024 - May 2025",
      bullets: [
        "Promoted from Intern based on technical performance and client impact",
        "Partnered with 200+ clients to create customized, user-focused web pages",
        "Launched a website that boosted net profit to $850,000, with a projected year-end total of $1.25 million - up 941% from last year",
        "Implemented SEO and responsive design, increasing the retention rate to 98%",
        "Analyzed user behavior through Google Analytics, Microsoft Clarity, and Semrush",
      ]
    },
    {
      title: "Website Development Intern",
      company: "Red Barn Media Group",
      date: "June 2024 - August 2024",
      bullets: [
        "Edited and maintained web pages while implementing SEO to increase retention",
        "Collaborated with clients to discuss web page enhancements and implemented changes",
      ]
    }
  ],
  education: [
    {
      inst: "The University of Vermont, Burlington, VT",
      date: "May 2025",
      degree: "Bachelor of Science in Computer Science",
    },
    {
      inst: "The University of Technology Sydney, Sydney, AU",
      date: "Feburary - June 2024",
      degree: "Study Abroad Program",
    }
  ]
};

const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-actions">
        <a 
          href="/resume.pdf" 
          download="Lila_McGuirk_Resume.pdf" 
          className="pill-button-dark"
        >
          Download PDF
        </a>
      </div>
      <div className="resume-paper">
        <header className="resume-header">
          <h1>{RESUME_DATA.name}</h1>
          <p className="subtitle">{RESUME_DATA.subtitle}</p>
          <p className="contact-bar">{RESUME_DATA.contact}</p>
        </header>

        <section className="resume-section">
          <p className="objective"><strong>OBJECTIVE - </strong>{RESUME_DATA.objective}</p>
        </section>

        <section className="resume-section">
          <h2 className="section-title">TECHNICAL SKILLS</h2>
          <div className="skills-list">
            {RESUME_DATA.skills.map((s, i) => (
              <p key={i}><strong>{s.label}:</strong> {s.val}</p>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2 className="section-title">EDUCATION</h2>
          {RESUME_DATA.education.map((edu, i) => (
            <div key={i} className="entry">
              <div className="entry-head">
                <strong>{edu.inst}</strong>
                <span>{edu.date}</span>
              </div>
              <p>{edu.degree}</p>
            </div>
          ))}
        </section>

        <section className="resume-section">
          <h2 className="section-title">WORK EXPERIENCE</h2>
          {RESUME_DATA.experience.map((job, i) => (
            <div key={i} className="entry">
              <div className="entry-head">
                <strong>{job.title} at {job.company}</strong>
                <span>{job.date}</span>
              </div>
              <ul>
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;