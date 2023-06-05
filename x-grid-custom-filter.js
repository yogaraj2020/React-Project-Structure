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

const DataTable = () => {
  const generateOptions = (field) => {
    const uniqueValues = Array.from(
      new Set(rows.map((row) => row[field]))
    );
    return uniqueValues.filter((value) => value !== null && value !== undefined);
  };

  const renderFilterInput = (params) => {
    const columnField = params.column.field;
    const columnOptions = generateOptions(columnField);

    return (
      <Autocomplete
        options={columnOptions}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" placeholder="Filter" />
        )}
        onChange={(event, value) => params.applyValue({ value })}
      />
    );
  };

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
