import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'description', headerName: 'Description', flex: 1, editable: true },
];

const rows = [
  { id: 1, description: 'Lorem ipsum dolor sit amet' },
  { id: 2, description: 'Consectetur adipiscing elit' },
  { id: 3, description: 'Sed do eiusmod tempor incididunt' },
];

const EditableTextArea = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return <textarea value={value} onChange={handleChange} rows={3} />;
};

const DataTable = () => {
  const handleCellEditCommit = React.useCallback(
    ({ id, field, value }) => {
      // Handle cell value update
      console.log(`Row ID: ${id}, Field: ${field}, Value: ${value}`);
    },
    []
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
          CellEditComponent: EditableTextArea,
        }}
        onCellEditCommit={handleCellEditCommit}
      />
    </div>
  );
};

export default DataTable;
