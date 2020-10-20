import React from "react";
import { BarChart, Bar, YAxis, XAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

const TeamBarChart = ({ data }) => {
  return (
    <BarChart width={1000} height={500} data={data}>
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
      <Bar dataKey="year" fill="#8884d8" />
    </BarChart>
  );
};

TeamBarChart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeamBarChart;
