import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import PropTypes from "prop-types";

const TeamLineChart = ({ data, onClick }) => {
  const handleClick = (event) => {
    onClick(event.activePayload[0].payload);
  };
  return (
    <LineChart width={1000} height={450} data={data} onClick={handleClick}>
      <XAxis
        dataKey="name"
        interval={0}
        angle={-45}
        textAnchor="end"
        height={75}
      />
      <YAxis
        domain={[1800, 2000]}
        label={{ value: "Year", position: "insideLeft", angle: -90 }}
      />
      <Tooltip />
      <CartesianGrid />
      <Line type="monotone" dataKey="year" interval={0} stroke="blue" />
    </LineChart>
  );
};

TeamLineChart.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TeamLineChart;
