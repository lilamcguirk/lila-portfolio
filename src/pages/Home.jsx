import { Link } from 'react-router-dom';
import SkillsCarousel from '../components/SkillsCarousel';
import { projects } from '../data/projects';

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
              <span className="pill-border">B.S. Computer Science • University of Vermont</span>
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
          <h2 className="section-label" style={{color: 'white', opacity: 0.8}}>Selected Work</h2>
          
            <div className="grid-2-col">
            {projects.map((p, i) => (
                <div key={i} className="work-card">
                <div className="work-card-top">
                    <span className="badge-pro">{p.type}</span>
                    <h3 className="work-card-title">{p.title}</h3>
                    <p className="work-card-desc">{p.desc}</p>
                </div>
                
                <div className="work-card-bottom">
                    <div className="work-tech-list">
                    {p.tech.map(t => (
                        <span key={t} className="pill-outline-sm">{t}</span>
                    ))}
                    </div>
                    
                    <Link to={p.path} className="work-link">
                    Explore Details <span>→</span>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>

        <section className="resume-cta-section">
        <div className="resume-cta-card">
            <div className="resume-cta-content">
            <div className="resume-cta-text">
                <span className="badge-pro">Education & Experience</span>
                <h2>Interested in the technical details?</h2>
                <p>
                View my full background, including my work at <strong>Toyota</strong> and 
                <strong> Red Barn Media</strong>, plus my academic research at <strong>UVM</strong>.
                </p>
            </div>
            
            <div className="resume-cta-action">
                <Link to="/resume" className="pill-button-dark">
                Explore Full Resume
                </Link>
                <span className="availability-tag">
                <span className="dot"></span> Available for Full-Time 2025
                </span>
            </div>
            </div>
        </div>
    </section>
    </main>
  );
};

export default Home;