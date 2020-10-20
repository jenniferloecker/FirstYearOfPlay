export class TeamAPI {
  fetchTeams = () => {
    return new Promise(function (resolve, reject) {
      const url =
        "http://lookup-service-prod.mlb.com/json/named.team_all_season.bam?sport_code='mlb'&season=2020&all_star_sw='N'";
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      fetch(url, options)
        .then((res) => {
          return res.json();
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => console.log(error));
    });
  };
}
