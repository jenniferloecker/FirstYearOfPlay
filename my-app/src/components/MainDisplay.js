import React, { useState, useEffect } from "react";
import { fetchTeams } from "../redux/actions/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamLineChart from "./TeamLineChart";
import ChartSelect from "./ChartSelect";
import TeamBarChart from "./TeamBarChart";
import TeamInfo from "./TeamInfo";

const MainDisplay = ({ fetchTeams, data }) => {
  const { teams } = data;
  const [chartType, setChartType] = useState("line");
  const [selectedTeam, setSelectedTeam] = useState({});
  const [toggleTeamInfo, setToggleTeamInfo] = useState(false);
  useEffect(() => {
    fetchTeams();
  });

  const handleChartChange = (chartType) => {
    setToggleTeamInfo(false);
    setChartType(chartType);
  };

  const handleChartClick = (team) => {
    setSelectedTeam(team);
    setToggleTeamInfo(true);
  };

  return (
    <React.Fragment>
      {chartType === "line" && (
        <TeamLineChart data={teams} onClick={handleChartClick} />
      )}
      {chartType === "bar" && (
        <TeamBarChart data={teams} onClick={handleChartClick} />
      )}
      <div>
        <ChartSelect chartChange={handleChartChange} chartType={chartType} />
        {toggleTeamInfo && <TeamInfo team={selectedTeam} />}
      </div>
    </React.Fragment>
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.teams,
});

const mapDispatchToProps = { fetchTeams };
export default connect(structuredSelector, mapDispatchToProps)(MainDisplay);
