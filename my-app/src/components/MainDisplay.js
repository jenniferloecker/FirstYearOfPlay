import React, { useEffect } from "react";
import { fetchTeams } from "../redux/actions/actions";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const MainDisplay = ({ fetchTeams, data }) => {
  const { teams } = data;
  useEffect(() => {
    fetchTeams();
  });

  return (
    teams.length > 0 &&
    teams.map((team, i) => {
      return (
        <div key={i}>
          <b>Team</b> - {team.name_display_full} - {team.first_year_of_play}
        </div>
      );
    })
  );
};

const structuredSelector = createStructuredSelector({
  data: (state) => state.teams,
});

const mapDispatchToProps = { fetchTeams };
export default connect(structuredSelector, mapDispatchToProps)(MainDisplay);
