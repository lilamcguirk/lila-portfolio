import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">LM</Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/resume" className="nav-link">Resume</Link>
          <a href="mailto:lilamcguirk1@gmail.com" className="pill-border btn-pill">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;