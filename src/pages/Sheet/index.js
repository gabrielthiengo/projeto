import React, { useEffect, useState } from 'react';

import { FaTable } from 'react-icons/fa';
import Loading from '~/components/Loading';
import SheetComponent from '~/components/SheetComponent';

import api from '~/services/api';

import './styles.css';

function Sheet() {
  const [sheets, setSheets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .get('sheet/item')
      .then(response => {
        setSheets(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });

    setIsUpdate(false);
  }, [isUpdate]);

  function onChangeComponent() {
    setIsUpdate(true);
  }

  return (
    <div className="page-container">
      <header>
        <div>
          <FaTable size={25} color="#F14723" />
          <p>PLANILHAS</p>
        </div>

        <div className="search">
          <input type="text" placeholder="Faça sua busca" onChange={e => {}} />
          <button type="submit" className="btn-primary" onClick={() => {}}>
            BUSCAR
          </button>
          <button type="submit" className="btn-secondary" onClick={() => {}}>
            LIMPAR
          </button>
        </div>
      </header>

      <main>
        <div className="sheet-container">
          {sheets.map(sheet => {
            return (
              <div key={sheet.id} className="sheet-content">
                <header>
                  {sheet.title}
                  <button type="button" className="btn-secondary">
                    + Lançamento
                  </button>
                </header>
                <SheetComponent
                  key={sheet.id}
                  title={sheet.title}
                  total={sheet.total}
                  sheetItems={sheet.SheetItems}
                  onChange={() => {
                    onChangeComponent();
                  }}
                />
                <footer>
                  <p>
                    TOTAL:{' '}
                    {sheet.total.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </footer>
              </div>
            );
          })}
        </div>
      </main>

      {isLoading && <Loading />}
    </div>
  );
}

export default Sheet;
