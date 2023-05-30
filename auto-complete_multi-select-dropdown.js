import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (_, value) => {
    setSelectedOptions(value);
  };

  return (
    <Autocomplete
      multiple
      id="multi-select-dropdown"
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      onChange={handleOptionChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Options"
          placeholder="Options"
        />
      )}
    />
  );
};

export default MultiSelectDropdown;
