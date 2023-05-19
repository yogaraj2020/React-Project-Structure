import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'progress', headerName: 'Progress', width: 200 },
];

const rows = [
  { id: 1, name: 'Task 1', progress: 80 },
  { id: 2, name: 'Task 2', progress: 50 },
  { id: 3, name: 'Task 3', progress: 30 },
];

const ProgressBarCell = ({ value }) => {
  const progressStyles = {
    width: `${100 - value}%`,
    height: '100%',
    backgroundColor: 'gray',
    position: 'relative',
  };

  const fillStyles = {
    width: `${value}%`,
    height: '100%',
    backgroundColor: value >= 75 ? 'green' : value >= 50 ? 'yellow' : 'red',
    position: 'absolute',
    right: 0,
  };

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}>
      <div style={progressStyles}>
        <div style={fillStyles}></div>
      </div>
    </div>
  );
};

const DataTable = () => {
  const renderProgressBarCell = (params) => {
    return <ProgressBarCell value={params.value} />;
  };

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Cell: renderProgressBarCell,
        }}
      />
    </div>
  );
};

export default DataTable;
