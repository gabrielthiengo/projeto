/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

import Intro from '~/components/Intro';
import About from '~/components/About';
import Countdown from '~/components/Countdown';
import Dayoff from '~/components/Dayoff';
import Gifts from '~/components/Gifts';
import Loading from '~/components/Loading';
import Confirmation from '~/components/Confirmation';

import notify from '~/assets/images/svg/notify.svg';

import api from '~/services/api';

import './styles.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [wedding, setWedding] = useState({});
  const [notFound, setNotFound] = useState(false);

  const { pathname } = window.location;

  useEffect(() => {
    setLoading(true);
    api
      .get(`wedding${pathname}`)
      .then(response => {
        const { data } = response;

        setWedding(data);

        setTimeout(() => {
          setLoading(false);
        }, 5000);
      })
      .catch(() => {
        setNotFound(true);

        setTimeout(() => {
          setLoading(false);
        }, 5000);
      });
  }, []);

  return !loading ? (
    <div>
      {!notFound ? (
        <div className="container">
          <Intro
            husband={wedding.husband}
            wife={wedding.wife}
            coverPhoto={wedding.cover_photo}
          />

          <About
            about={wedding.About}
            he={wedding.husband}
            she={wedding.wife}
            photoHe={wedding.About.img_he}
            photoShe={wedding.About.img_she}
          />

          <Countdown date={wedding.date} />

          <Dayoff
            address={wedding.address}
            schedule={wedding.schedule}
            date={wedding.date}
          />

          <Confirmation weddingId={wedding.id} />

          {wedding.ProductWeddings.length > 0 && (
            <Gifts products={wedding.ProductWeddings} />
          )}
        </div>
      ) : (
        <div className="not-found">
          <img src={notify} alt="not found" />

          <p>
            Não encontramos os noivos, favor verificar o link digitado ou entre
            em contato com o casal.
          </p>
        </div>
      )}
    </div>
  ) : (
    <div className="container">
      <Loading />
    </div>
  );
}

export default Home;
