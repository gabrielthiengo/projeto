import React from 'react';

import { DataGrid } from '@material-ui/data-grid';
import Sidebar from '~/components/Sidebar';

import './styles.css';

const columns = [
  { field: 'id', headerName: 'CÓDIGO', width: 130 },
  { field: 'active', headerName: 'ATIVO', width: 100 },
  { field: 'firstName', headerName: 'NOME', width: 130 },
  { field: 'lastName', headerName: 'DATA DE CRIAÇÃO', width: 180 },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

function Collection() {
  return (
    <>
      <Sidebar collection home={false} />
      <div className="main-container">
        <div className="table">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}

export default Collection;
