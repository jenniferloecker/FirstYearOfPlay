import React, { useState, useEffect } from "react";
import { fetchTeams } from "../redux/actions/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamLineChart from "./TeamLineChart";
import ChartSelect from "./ChartSelect";
import TeamBarChart from "./TeamBarChart";

const MainDisplay = ({ fetchTeams, data }) => {
  const { teams } = data;
  const [chartType, setChartType] = useState("line");
  useEffect(() => {
    fetchTeams();
  });

  const handleChartChange = (chartType) => {
    setChartType(chartType);
  };

  return (
    <React.Fragment>
      {chartType === "line" && <TeamLineChart data={teams} />}
      {chartType === "bar" && <TeamBarChart data={teams} />}
      <ChartSelect chartChange={handleChartChange} chartType={chartType} />
    </React.Fragment>
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.teams,
});

const mapDispatchToProps = { fetchTeams };
export default connect(structuredSelector, mapDispatchToProps)(MainDisplay);
