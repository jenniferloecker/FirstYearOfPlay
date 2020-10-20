import { call, put, takeLatest, all } from "redux-saga/effects";
import { Teams } from "../constants";
import { TeamAPI } from "../api/API";
import { fetchTeams, fetchTeamsSuccess } from "../actions/actions";

const teamAPI = new TeamAPI();

function* getTeams(action) {
  yield takeLatest(Teams.fetchTeams, getTeamsFromAPI);
}

function* getTeamsFromAPI(action) {
  try {
    // call the api
    const data = yield call(teamAPI.fetchTeams, { response: action.payload });
    const teamData = data.team_all_season.queryResults.row;
    yield put(fetchTeamsSuccess(teamData));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield all([getTeams()]);
}
