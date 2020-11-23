import React from 'react';
import PropTypes from 'prop-types';

import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import './styles.css';

function Footer({ store, facebook, instagram, address, youtube, whatsapp }) {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <h2>{store}</h2>

        {facebook && (
          <div className="footer-item">
            <FaFacebook />
            <h5>{facebook}</h5>
          </div>
        )}
        {instagram && (
          <div className="footer-item">
            <FaInstagram />
            <h5>{instagram}</h5>
          </div>
        )}
        {youtube && (
          <div className="footer-item">
            <FaYoutube />
            <h5>{youtube}</h5>
          </div>
        )}
        {whatsapp && (
          <div className="footer-item">
            <FaWhatsapp />
            <h5>{whatsapp}</h5>
          </div>
        )}
        <h5>{address}</h5>
      </div>
    </div>
  );
}

export default Footer;

Footer.propTypes = {
  store: PropTypes.string,
  facebook: PropTypes.string,
  instagram: PropTypes.string,
  address: PropTypes.string,
  youtube: PropTypes.string,
  whatsapp: PropTypes.string,
};

Footer.defaultProps = {
  store: '',
  facebook: '',
  instagram: '',
  address: '',
  youtube: '',
  whatsapp: '',
};
