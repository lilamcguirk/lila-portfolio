import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-legal">
          <p className="footer-brand">Lila Mcguirk | Full-Stack Software Engineer</p>
            <div className="footer-links social-links">
                <a href="https://linkedin.com/in/lila-mcguirk-75a54520b">
                    <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>
                <a href="mailto:lilamcguirk1@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} size="1x"/>
                </a>
                <a href="https://github.com/lilamcguirk">
                    <FontAwesomeIcon icon={faGithub} size="1x"/>
                </a>
            </div>
          <p className="footer-copy">
            © {currentYear} All Rights Reserved. Development & Design.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;