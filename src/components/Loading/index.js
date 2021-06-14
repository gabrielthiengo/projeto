import React from 'react';

import './styles.css';

function Loading() {
  return (
    <div className="loading-modal fade in">
      <div>
        <div className="ng-scope">
          <div className="lds-css">
            <div className="lds-eclipse">
              <div />
            </div>
            <div className="text-write">
              <p>Carregando dados ...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
