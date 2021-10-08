import React from 'react';

import Intro from '~/components/Intro';
import About from '~/components/About';
import Countdown from '~/components/Countdown';
import Dayoff from '~/components/Dayoff';
import Gifts from '~/components/Gifts';

import './styles.css';

function Home() {
  return (
    <div className="container">
      <Intro />
      <About />
      <Countdown />
      <Dayoff />
      <Gifts />
    </div>
  );
}

export default Home;
