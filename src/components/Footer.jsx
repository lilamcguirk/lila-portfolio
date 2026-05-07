import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer" className="footer-link">
            LinkedIn
          </a>
          <span className="footer-separator">•</span>
          <a href="mailto:your.email@address.com" className="footer-link">
            Email
          </a>
        </div>

        <div className="footer-legal">
          <p className="footer-brand">Lila Mcguirk | Full-Stack Software Engineer</p>
          <p className="footer-copy">
            © {currentYear} All Rights Reserved. Development & Design.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;