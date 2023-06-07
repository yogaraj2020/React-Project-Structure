// FilterComponent.jsx
import React, { useState, useEffect } from 'react';
import MultiSelectAutocomplete from './MultiSelectAutocomplete';
import { useFilters, applyFilters } from 'react-query-filters';

const FilterComponent = ({ initialData }) => {
  const [filterValues, setFilterValues] = useState({
    filter1: [],
    filter2: [],
    filter3: [],
  });
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    applyFilters();
  }, [filterValues]);

  const handleFilterChange = (filterName) => (selectedOptions) => {
    setFilterValues({
      ...filterValues,
      [filterName]: selectedOptions.map((option) => option.value), // Assuming selectedOptions is an array of objects with a 'value' property
    });
  };

  const filteredDataTable = useFilters({
    data: initialData,
    filters: filterValues,
    dependencies: [filterValues],
  });

  useEffect(() => {
    setFilteredData(filteredDataTable);
  }, [filteredDataTable]);

  return (
    <div>
      <MultiSelectAutocomplete
        onChange={handleFilterChange('filter1')}
      />
      <MultiSelectAutocomplete
        onChange={handleFilterChange('filter2')}
      />
      <MultiSelectAutocomplete
        onChange={handleFilterChange('filter3')}
      />

      {/* Render the datagrid component using the filteredData */}
      {/* ... */}
    </div>
  );
};

export default FilterComponent;
