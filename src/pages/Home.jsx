import { Link } from 'react-router-dom';
import SkillsCarousel from '../components/SkillsCarousel';

const projects = [
{
    title: "Toyota AutoConsole",
    desc: "A complete architectural rebuild of a vehicle management interface using Vue.js. Streamlined data visualization and system reactivity.",
    tech: ["Vue.js", "State Management", "UI/UX"],
    type: "Professional Experience"
  },
  {
    title: "Stripe Payment Gateway",
    desc: "Custom React integration for secure financial transactions. Engineered robust API communication and error-handling logic.",
    tech: ["React", "Stripe API", "Node.js"],
    type: "Professional Experience"
  }
];

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-image-wrapper">
            <img 
              src="/images/lila-mcguirk-headshot.jpg" 
              alt="Lila McGuirk" 
              className="hero-image" 
            />
          </div>
          <div className="hero-text-wrapper">
            <div style={{ marginBottom: '20px' }}>
              <span className="pill-border">B.S. Computer Science • the University of Vermont</span>
            </div>
            <span className="hero-overline">Full-Stack</span>
            <h1 className="hero-title">SOFTWARE <br/> ENGINEER</h1>
            <p className="hero-description">Specializing in <span className="highlight">React systems</span> and <span className="highlight">API architecture</span>. Architecting clean, reusable code and high-performance logic driven by Computer Science principles.</p>
          </div>
        </div>
        <SkillsCarousel />
      </section>

        <section className="projects-section">
            <div className="projects-container">
                <h2 className="section-label" style={{color: '#94a3b8', marginBottom: '40px'}}>Selected Work</h2>
                
                <div className="grid-2-col">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '20px'}}>
                        <h3 style={{fontSize: '1.5rem', fontWeight: 800}}>{p.title}</h3>
                        <span style={{color: '#cbd5e1', fontWeight: 700}}>0{i + 1}</span>
                    </div>
                    
                    <p style={{color: '#64748b', marginBottom: '24px', flexGrow: 1}}>{p.desc}</p>
                    
                    <div style={{display: 'flex', gap: '8px', marginBottom: '32px'}}>
                        {p.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>

        <section className="resume-footer">
            <div className="resume-info">
                <h2>Credentials</h2>
                <p>
                Technical Resume • B.S. Computer Science <br />
                University of Vermont, Class of 2025.
                </p>
            </div>
            
            <Link to="/resume" className="pill-button-dark">
                View Full History
            </Link>
        </section>
    </main>
  );
};

export default Home;