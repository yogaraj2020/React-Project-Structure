import React, { useState, useEffect } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [firstOptions, setFirstOptions] = useState([]);
  const [secondOptions, setSecondOptions] = useState([]);
  const [thirdOptions, setThirdOptions] = useState([]);
  const [firstOptionValue, setFirstOptionValue] = useState('');
  const [secondOptionValue, setSecondOptionValue] = useState('');
  const [thirdOptionValue, setThirdOptionValue] = useState('');

  useEffect(() => {
    fetchData()
      .then((data) => {
        setFirstOptions(data.firstOptions);
        setSecondOptions(data.secondOptions);
        setThirdOptions(data.thirdOptions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchData = () => {
    // Simulate API call with a delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Sample data
        const data = {
          firstOptions: ['Option 1', 'Option 2', 'Option 3'],
          secondOptions: ['Suboption 1', 'Suboption 2', 'Suboption 3'],
          thirdOptions: ['Value 1', 'Value 2', 'Value 3'],
        };
        resolve(data);
      }, 1000);
    });
  };

  const handleFirstOptionChange = (event) => {
    const selectedValue = event.target.value;
    setFirstOptionValue(selectedValue);

    if (selectedValue === '') {
      setSecondOptionValue('');
      setThirdOptionValue('');
      setSecondOptions([]);
      setThirdOptions([]);
    } else {
      const filteredSecondOptions = secondOptions.filter((option) => option.includes(selectedValue));
      setSecondOptions(filteredSecondOptions);
      setSecondOptionValue('');
      setThirdOptionValue('');
      setThirdOptions([]);
    }
  };

  const handleSecondOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSecondOptionValue(selectedValue);

    if (selectedValue === '') {
      setThirdOptionValue('');
      setThirdOptions([]);
    } else {
      const filteredThirdOptions = thirdOptions.filter((option) => option.includes(selectedValue));
      setThirdOptions(filteredThirdOptions);
      setThirdOptionValue('');
    }
  };

  const handleThirdOptionChange = (event) => {
    const selectedValue = event.target.value;
    setThirdOptionValue(selectedValue);
  };

  return (
    <Box className="dashboard-container">
      <FormControl className="form-control">
        <InputLabel className="label" id="first-option-label">
          First Option
        </InputLabel>
        <Select
          className="select"
          labelId="first-option-label"
          id="first-option-select"
          value={firstOptionValue}
          onChange={handleFirstOptionChange}
        >
          <MenuItem value="">None</MenuItem>
          {firstOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="form-control">
        <InputLabel className="label" id="second-option-label">
          Second Option
        </InputLabel>
        <Select
          className="select"
          labelId="second-option-label"
          id="second-option-select"
          value={secondOptionValue}
          onChange={handleSecondOptionChange}
        >
          <MenuItem value="">None</MenuItem>
          {secondOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="form-control">
        <InputLabel className="label" id="third-option-label">
          Third Option
        </InputLabel>
        <Select
          className="select"
          labelId="third-option-label"
          id="third-option-select"
          value={thirdOptionValue}
          onChange={handleThirdOptionChange}
        >
          <MenuItem value="">None</MenuItem>
          {thirdOptions.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Dashboard;

//Filter
const filteredData = tableData.filter((item) => {
        // Check if any selected item matches the item in the data row
        return selectedItems.some((selectedItem) => {
          return (
            item.name.toLowerCase().includes(selectedItem.toLowerCase()) ||
            item.role.toLowerCase().includes(selectedItem.toLowerCase())
          );
        });
      });
