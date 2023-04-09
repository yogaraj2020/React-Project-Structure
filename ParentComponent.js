// ParentComponent.js

import React from "react";
import CustomBarChart from "./BarChart";

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 30 },
];

const ParentComponent = () => {
  const handleClick = (data) => {
    console.log("Clicked data:", data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <CustomBarChart
        data={data}
        dataKey="name"
        barSize={20}
        fill="#8884d8"
        onClick={handleClick}
      />
    </div>
  );
};

export default ParentComponent;
