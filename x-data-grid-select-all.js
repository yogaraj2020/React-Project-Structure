import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

const rows = [
  { id: 1, name: 'John Doe', age: 25 },
  { id: 2, name: 'Jane Smith', age: 32 },
  { id: 3, name: 'Bob Johnson', age: 40 },
  // Add more rows as needed
];

export default function MyDataGrid() {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectAllClick = (event) => {
    setSelectedRows(event.target.checked ? rows.map((row) => row.id) : []);
  };

  const handleRowCheckboxClick = (event, id) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelectedRows = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, id];
    } else {
      newSelectedRows = selectedRows.filter((rowId) => rowId !== id);
    }

    setSelectedRows(newSelectedRows);
  };

  const renderHeaderCheckbox = () => (
    <Checkbox
      indeterminate={selectedRows.length > 0 && selectedRows.length < rows.length}
      checked={selectedRows.length === rows.length}
      onChange={handleSelectAllClick}
    />
  );

  const renderCheckboxCell = (params) => (
    <Checkbox
      checked={selectedRows.includes(params.row.id)}
      onChange={(event) => handleRowCheckboxClick(event, params.row.id)}
    />
  );

  const columns = [
    {
      field: 'checkbox',
      headerName: '',
      renderHeader: renderHeaderCheckbox,
      renderCell: renderCheckboxCell,
      width: 50,
      sortable: false,
      filterable: false,
    },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
    // Add more columns as needed
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

    const filteredRows = rows.filter((row) => {
      let isVisible = true;
      for (const filter of model.items) {
        const fieldValue = row[filter.columnField].toString().toLowerCase();
        const filterValue = filter.value.toString().toLowerCase();
        if (!fieldValue.includes(filterValue)) {
          isVisible = false;
          break;
        }
      }
      return isVisible;
    });
