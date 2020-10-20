import React from "react";
import PropTypes from "prop-types";

function TeamInfo({ team }) {
  return (
    <div style={{ display: "inline-block", margin: 20 }}>
      <div>Team: {team.name}</div>
      <div>Year: {team.year}</div>
      <div>League: {team.league}</div>
    </div>
  );
}

TeamInfo.team = {
  team: PropTypes.object.isRequired,
};

export default TeamInfo;
