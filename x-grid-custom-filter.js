import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

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
  const [filters, setFilters] = useState({});

  const handleFilterChange = (columnField, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [columnField]: value,
    }));
  };

  const renderHeader = (params) => {
    const columnField = params.field;

    const handleChange = (event) => {
      const value = event.target.value;
      handleFilterChange(columnField, value);
    };

    return (
      <div>
        <span>{params.colDef.headerName}</span>
        <input
          type="text"
          value={filters[columnField] || ''}
          onChange={handleChange}
          placeholder="Filter"
        />
      </div>
    );
  };

  const filteredRows = rows.filter((row) => {
    return Object.keys(filters).every((columnField) => {
      const value = filters[columnField];
      if (value === '') return true; // If no filter applied, show all rows

      const cellValue = row[columnField];
      return String(cellValue).toLowerCase().includes(value.toLowerCase());
    });
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={filteredRows}
        columns={columns.map((column) => ({
          ...column,
          headerClassName: 'header-cell',
          renderHeader,
        }))}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
};

export default DataTable;
