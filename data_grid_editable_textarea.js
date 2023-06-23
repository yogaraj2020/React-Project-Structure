import React, { useState } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const EditableCell = ({ value }) => {
  const [editing, setEditing] = useState(false);
  const [cellValue, setCellValue] = useState(value);

  const handleInputChange = (event) => {
    setCellValue(event.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    // Save the updated value
    console.log(`Cell Value: ${cellValue}`);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <textarea value={cellValue} onChange={handleInputChange} rows={3} />
      ) : (
        <div>{value}</div>
      )}
      {editing ? (
        <IconButton color="primary" onClick={handleSaveClick}>
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton onClick={handleEditClick}>
          <EditIcon />
        </IconButton>
      )}
    </div>
  );
};

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'description',
    headerName: 'Description',
    flex: 1,
    renderCell: (params) => <EditableCell value={params.value} />,
  },
];

// Rows and DataTable component remain the same

export default DataTable;
