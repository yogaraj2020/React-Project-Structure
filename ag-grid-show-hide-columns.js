import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' },
  { headerName: 'Mileage', field: 'mileage' }
];

const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000, mileage: 10000 },
  { make: 'Ford', model: 'Mondeo', price: 32000, mileage: 15000 },
  { make: 'Porsche', model: 'Boxter', price: 72000, mileage: 2000 },
  { make: 'Tesla', model: 'Model S', price: 95000, mileage: 5000 }
];

const App = () => {
  const [gridApi, setGridApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const showHideColumns = (checked, columnId) => {
    gridApi.getColumn(columnId).setVisible(checked);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        sideBar={{
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columns',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
              toolPanelParams: {
                suppressRowGroups: true,
                suppressValues: true,
                suppressPivots: true,
                suppressPivotMode: true,
                suppressSideButtons: false,
                // Here we provide a callback that will be called every time a checkbox is clicked
                // in the Column Tool Panel
                onColumnChecked: showHideColumns
              }
            }
          ],
          defaultToolPanel: 'columns'
        }}
      />
    </div>
  );
};

export default App;
