import { Teams } from "../constants";

export const fetchTeamsSuccess = (data) => {
  return {
    type: Teams.fetchTeamsSuccess,
    payload: data,
  };
};

export const fetchTeams = (data) => {
  return {
    type: Teams.fetchTeams,
    payload: data,
  };
};
