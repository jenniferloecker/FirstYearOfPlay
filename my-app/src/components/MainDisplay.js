import React, { useEffect } from "react";
import { fetchTeams } from "../redux/actions/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import TeamLineChart from "./TeamLineChart";

const MainDisplay = ({ fetchTeams, data }) => {
  const { teams } = data;
  useEffect(() => {
    fetchTeams();
  });

  return <TeamLineChart data={teams} />;
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.teams,
});

const mapDispatchToProps = { fetchTeams };
export default connect(structuredSelector, mapDispatchToProps)(MainDisplay);
