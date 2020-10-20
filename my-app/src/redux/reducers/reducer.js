import { Teams } from "../constants";

const initialState = {
  teams: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Teams.fetchTeams:
      return state;
    case Teams.fetchTeamsSuccess:
      return {
        ...state,
        teams: action.payload,
      };
    default:
      return initialState;
  }
};
