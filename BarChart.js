// BarChart.js

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const CustomBarChart = (props) => {
  const { data, dataKey, barSize, fill, onClick } = props;

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={dataKey} />
      <YAxis />
      <Tooltip />
      <Bar dataKey={dataKey} barSize={barSize} fill={fill} onClick={onClick} />
    </BarChart>
  );
};

export default CustomBarChart;
