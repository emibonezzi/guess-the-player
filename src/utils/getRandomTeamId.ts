const getRandomTeamId = () => {
  const teams = ["46", "12", "5", "6195", "506"];
  const teamsAndLeagues = {
    IT1: ["46", "12", "5", "6195", "506"],
    GB1: ["11", "631", "31", "281"],
  };
  type teamKey = keyof typeof teamsAndLeagues;
  const randomLeagueId =
    Object.keys(teamsAndLeagues)[
      Math.floor(Math.random() * Object.keys(teamsAndLeagues).length)
    ];
  const randomTeamId =
    teamsAndLeagues[randomLeagueId as teamKey][
      Math.floor(
        Math.random() * teamsAndLeagues[randomLeagueId as teamKey].length
      )
    ];
  return { randomTeamId, randomLeagueId, teams };
};

export default getRandomTeamId;
