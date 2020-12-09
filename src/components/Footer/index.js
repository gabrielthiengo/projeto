/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

import './styles.css';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <section className="footer-section">teste</section>
        <div className="footer-detail">
          <div style={{ display: 'flex' }}>
            <a
              href="https://www.facebook.com/gabriel.thiengoo"
              target="_blank"
              className="redirect"
            >
              <FaFacebook size={15} />
            </a>
            <a href="#" target="_blank" className="redirect">
              <FaInstagram size={15} />
            </a>
            <a href="#" target="_blank" className="redirect">
              <FaTwitter size={15} />
            </a>
            <a href="#" target="_blank" className="redirect">
              <FaYoutube size={15} />
            </a>
          </div>
          <Link to="/" className="center-help">
            Central de Ajuda
          </Link>
          <Link to="/" className="center-help">
            Termos de Uso
          </Link>
          <Link to="/" className="center-help">
            Políticas de Privacidade
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
