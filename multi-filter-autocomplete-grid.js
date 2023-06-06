// FilterComponent.jsx
import React, { useState } from 'react';
import MultiSelectAutocomplete from './MultiSelectAutocomplete';

const FilterComponent = ({ datatableData }) => {
  const [filterValues, setFilterValues] = useState({
    filter1: [],
    filter2: [],
    filter3: [],
  });

  const handleFilterChange = (filterName, selectedOptions) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [filterName]: selectedOptions,
    }));

    applyFilters();
  };

  const applyFilters = () => {
    // Combine the selected options from all filters
    const combinedOptions = Object.entries(filterValues).map(([filterName, selectedOptions]) => ({
      filterName,
      selectedOptions,
    }));

    // Filter the datatable data based on each filter
    const filteredData = datatableData.filter((row) => {
      return combinedOptions.every(({ filterName, selectedOptions }) => {
        const cellValue = row[filterName]; // Assuming column names match the filter names

        // Check if the cell value matches any of the selected options for the filter
        return selectedOptions.includes(cellValue);
      });
    });

    // ... logic to handle the filtered datatable data ...
  };

  return (
    <div>
      <MultiSelectAutocomplete
        onChange={(selectedOptions) => handleFilterChange('filter1', selectedOptions)}
      />
      <MultiSelectAutocomplete
        onChange={(selectedOptions) => handleFilterChange('filter2', selectedOptions)}
      />
      <MultiSelectAutocomplete
        onChange={(selectedOptions) => handleFilterChange('filter3', selectedOptions)}
      />

      {/* ... other components ... */}
    </div>
  );
};

export default FilterComponent;
