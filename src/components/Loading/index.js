import React from 'react';

import './styles.css';

const Loading = () => {
  return (
    <div
      className="modal fade in"
      id="blockUI"
      role="dialog"
      style={{ display: 'block' }}
    >
      <div>
        <div
          className="v36a7a7fddb5ba700973f87b3049619c9 ng-scope"
          sn-atf-area="Loading Gif"
        >
          <div
            className="lds-css ng-scope"
            ng-if="::c.options.type == 'eclipse'"
          >
            <div
              style={{ width: '100%', height: '100%' }}
              className="lds-eclipse"
            >
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
