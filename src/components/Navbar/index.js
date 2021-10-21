/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './styles.css';

function Navbar() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const displaySize = document.documentElement.scrollWidth;

  function handleScroll() {
    if (document.documentElement.scrollTop < 700) {
      document.getElementById('home').classList.add('active');
      document.getElementById('about-nav').classList.remove('active');
      document.getElementById('confirmation-nav').classList.remove('active');
    } else if (
      document.documentElement.scrollTop >= 700 &&
      document.documentElement.scrollTop < 1700
    ) {
      document.getElementById('home').classList.remove('active');
      document.getElementById('about-nav').classList.add('active');
      document.getElementById('countdown-nav').classList.remove('active');
      document.getElementById('confirmation-nav').classList.remove('active');
    } else if (
      document.documentElement.scrollTop >= 1700 &&
      document.documentElement.scrollTop < 2700
    ) {
      document.getElementById('about-nav').classList.remove('active');
      document.getElementById('countdown-nav').classList.add('active');
      document.getElementById('details-nav').classList.remove('active');
      document.getElementById('confirmation-nav').classList.remove('active');
    } else if (
      document.documentElement.scrollTop >= 2700 &&
      document.documentElement.scrollTop < 3200
    ) {
      document.getElementById('countdown-nav').classList.remove('active');
      document.getElementById('details-nav').classList.add('active');
      document.getElementById('gift-nav').classList.remove('active');
      document.getElementById('confirmation-nav').classList.remove('active');
    } else if (
      document.documentElement.scrollTop > 3200 &&
      document.documentElement.scrollTop < 3800
    ) {
      document.getElementById('details-nav').classList.remove('active');
      document.getElementById('confirmation-nav').classList.add('active');
      document.getElementById('gift-nav').classList.remove('active');
    } else if (document.documentElement.scrollTop > 3800) {
      document.getElementById('confirmation-nav').classList.remove('active');
      document.getElementById('gift-nav').classList.add('active');
    }

    const navbar = document.getElementById('navbar');

    if (document.documentElement.scrollTop > 5) {
      navbar.classList.add('fixed-header');
    } else if (document.documentElement.scrollTop <= 5) {
      navbar.classList.remove('fixed-header');
    }
  }

  window.addEventListener('scroll', handleScroll);

  function toggleClassList(id) {
    const item = document.getElementById(id);

    const actives = document.getElementsByClassName('active');

    for (let i = 0; i < actives.length; i++) {
      actives[i].classList.remove('active');
    }

    item.classList.add('active');
  }

  function navigationToComponent(id) {
    const div = document.getElementById(id);
    div.scrollIntoView();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div id="navbar" className="main-header">
      <h1>Casamentos.com</h1>

      {!displayMenu ? (
        <FaBars
          size={20}
          className="menu-bars"
          onClick={() => {
            setDisplayMenu(true);
          }}
        />
      ) : (
        <FaTimes
          size={20}
          className="menu-bars"
          onClick={() => {
            setDisplayMenu(false);
          }}
        />
      )}

      <div
        className="header-navigation"
        style={{
          display: `${displayMenu || displaySize > 900 ? 'flex' : 'none'}`,
        }}
      >
        <p
          id="home"
          className="active"
          onClick={() => {
            navigationToComponent('intro');
            toggleClassList('home');

            if (displaySize <= 900) {
              setDisplayMenu(false);
            }
          }}
        >
          Início
        </p>
        <p
          id="about-nav"
          onClick={() => {
            navigationToComponent('about');
            toggleClassList('about-nav');

            if (displaySize <= 900) {
              setDisplayMenu(false);
            }
          }}
        >
          Sobre Nós
        </p>
        <p
          id="countdown-nav"
          onClick={() => {
            navigationToComponent('countdown');
            toggleClassList('countdown-nav');

            if (displaySize <= 900) {
              setDisplayMenu(false);
            }
          }}
        >
          Contagem Regressiva
        </p>
        <p
          id="details-nav"
          onClick={() => {
            navigationToComponent('dayoff');
            toggleClassList('details-nav');

            if (displaySize <= 900) {
              setDisplayMenu(false);
            }
          }}
        >
          Detalhes
        </p>
        <p
          id="confirmation-nav"
          onClick={() => {
            navigationToComponent('confirmation');
            toggleClassList('confirmation-nav');

            if (displaySize <= 900) {
              setDisplayMenu(false);
            }
          }}
        >
          Presença
        </p>
        <p
          id="gift-nav"
          onClick={() => {
            navigationToComponent('gifts');
            toggleClassList('gift-nav');

            if (displaySize <= 1200) {
              setDisplayMenu(false);
            }
          }}
        >
          Presentes
        </p>
      </div>
    </div>
  );
}

export default Navbar;
