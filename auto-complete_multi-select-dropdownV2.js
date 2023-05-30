import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const data = [
  {
    label: 'Fruits',
    options: [
      {
        label: 'Apple',
        value: 'apple',
        colors: ['Red', 'Green'],
        animals: ['Elephant'],
      },
      {
        label: 'Banana',
        value: 'banana',
        colors: ['Yellow'],
        animals: ['Elephant', 'Lion'],
      },
      {
        label: 'Orange',
        value: 'orange',
        colors: ['Orange'],
        animals: ['Elephant', 'Lion', 'Dog'],
      },
    ],
  },
  {
    label: 'Colors',
    options: [
      {
        label: 'Red',
        value: 'red',
        fruits: ['Apple'],
        animals: ['Elephant'],
      },
      {
        label: 'Green',
        value: 'green',
        fruits: ['Apple'],
        animals: [],
      },
      {
        label: 'Yellow',
        value: 'yellow',
        fruits: ['Banana'],
        animals: ['Lion'],
      },
      {
        label: 'Orange',
        value: 'orange',
        fruits: ['Orange'],
        animals: ['Lion', 'Dog'],
      },
    ],
  },
  {
    label: 'Animals',
    options: [
      {
        label: 'Elephant',
        value: 'elephant',
        fruits: ['Apple', 'Banana', 'Orange'],
        colors: ['Red', 'Green'],
      },
      {
        label: 'Lion',
        value: 'lion',
        fruits: ['Banana', 'Orange'],
        colors: ['Yellow', 'Orange'],
      },
      {
        label: 'Dog',
        value: 'dog',
        fruits: ['Orange'],
        colors: ['Orange'],
      },
    ],
  },
];

const MultiSelectDropdowns = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedAnimals, setSelectedAnimals] = useState([]);

  const handleFruitChange = (_, value) => {
    setSelectedFruits(value);
    setSelectedColors(getColorsForFruits(value));
    setSelectedAnimals(getAnimalsForFruits(value));
  };

  const handleColorChange = (_, value) => {
    setSelectedColors(value);
    setSelectedFruits(getFruitsForColors(value));
    setSelectedAnimals(getAnimalsForColors(value));
  };

  const handleAnimalChange = (_, value) => {
    setSelectedAnimals(value);
    setSelectedFruits(getFruitsForAnimals(value));
    setSelectedColors(getColorsForAnimals(value));
  };

  const getColorsForFruits = (selectedFruits) => {
    const colors = data.find((category) => category.label === 'Colors').options;
    const selectedColors = colors.filter((color) =>
      selectedFruits.some((fruit) => color.fruits.includes(fruit))
    );
    return selectedColors.map((color) => color.value);
  };

  const getAnimalsForFruits = (selectedFruits) => {
    const animals = data.find((category) => category.label === 'Animals').options;
    const selectedAnimals = animals.filter((animal) =>
      selectedFruits.some((fruit) => animal.fruits.includes(fruit))
    );
    return selectedAnimals.map((animal) => animal.value);
  };

  const getFruitsForColors = (selectedColors) => {
    const fruits = data.find((category) => category.label === 'Fruits').options;
    const selectedFruits = fruits.filter((fruit) =>
      selectedColors.some((color) => fruit.colors.includes(color))
    );
    return selectedFruits.map((fruit) => fruit.value);
  };

  const getAnimalsForColors = (selectedColors) => {
    const animals = data.find((category) => category.label === 'Animals').options;
    const selectedAnimals = animals.filter((animal) =>
      selectedColors.some((color) => animal.colors.includes(color))
    );
    return selectedAnimals.map((animal) => animal.value);
  };

  const getFruitsForAnimals = (selectedAnimals) => {
    const fruits = data.find((category) => category.label === 'Fruits').options;
    const selectedFruits = fruits.filter((fruit) =>
      selectedAnimals.some((animal) => fruit.animals.includes(animal))
    );
    return selectedFruits.map((fruit) => fruit.value);
  };

  const getColorsForAnimals = (selectedAnimals) => {
    const colors = data.find((category) => category.label === 'Colors').options;
    const selectedColors = colors.filter((color) =>
      selectedAnimals.some((animal) => color.animals.includes(animal))
    );
    return selectedColors.map((color) => color.value);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="fruits-dropdown"
        options={data.find((category) => category.label === 'Fruits').options}
        getOptionLabel={(option) => option.label}
        value={selectedFruits}
        onChange={handleFruitChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Fruits" placeholder="Select Fruits" />
        )}
      />

      <Autocomplete
        multiple
        id="colors-dropdown"
        options={data.find((category) => category.label === 'Colors').options}
        getOptionLabel={(option) => option.label}
        value={selectedColors}
        onChange={handleColorChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Colors" placeholder="Select Colors" />
        )}
      />

      <Autocomplete
        multiple
        id="animals-dropdown"
        options={data.find((category) => category.label === 'Animals').options}
        getOptionLabel={(option) => option.label}
        value={selectedAnimals}
        onChange={handleAnimalChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Animals" placeholder="Select Animals" />
        )}
      />
    </div>
  );
};

export default MultiSelectDropdowns;
