import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
  { label: 'Option 4', value: 'option4' },
];

const MultiSelectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option.value)) {
        return prevSelectedOptions.filter((value) => value !== option.value);
      }
      return [...prevSelectedOptions, option.value];
    });
  };

  return (
    <Autocomplete
      multiple
      open
      id="multi-select-dropdown"
      options={options}
      getOptionLabel={(option) => option.label}
      value={selectedOptions}
      onChange={(_, value) => setSelectedOptions(value)}
      renderOption={(props, option) => (
        <li {...props}>
          <Checkbox
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleOptionChange(option)}
          />
          {option.label}
        </li>
      )}
      renderInput={() => <TextField variant="outlined" label="Select Options" placeholder="Options" />}
    />
  );
};

export default MultiSelectDropdown;
