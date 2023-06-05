import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Autocomplete, TextField } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
];

const rows = [
  { id: 1, name: 'John', age: 35 },
  { id: 2, name: 'Jane', age: 28 },
  { id: 3, name: 'Bob', age: 42 },
];

const options = ['John', 'Jane', 'Bob', 'Alice', 'Alex'];

const DataTable = () => {
  const renderFilterInput = (params) => (
    <Autocomplete
      options={options}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" placeholder="Filter" />
      )}
      onChange={(event, value) => params.applyValue({ value })}
    />
  );

  const columnsWithFilters = columns.map((column) => ({
    ...column,
    filterable: true,
    filterRenderer: renderFilterInput,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columnsWithFilters}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default DataTable;
