import React, { useEffect, useState } from 'react';

import { FaArchive } from 'react-icons/fa';
import ListJobs from '~/components/ListJobs';

import api from '~/services/api';
import { store } from '~/store';

import './styles.css';

function Works() {
  const [works, setWorks] = useState(null);
  const { token } = store.getState().auth.token;

  useEffect(() => {
    api
      .get('works', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(res => {
        setWorks(res.data);
      });

  }, [works]);

  return (
    <>
      <ListJobs title="Trabalhos em Aberto" data={works}>
        <FaArchive size={18} color="#fab005" />
      </ListJobs>
    </>
  );
}

export default Works;
