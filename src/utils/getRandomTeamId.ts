const getRandomTeamId = () => {
  const teams = [505, 496, 489, 492, 497];
  const randomTeamId = teams[Math.floor(Math.random() * teams.length)];
  return { randomTeamId };
};

export default getRandomTeamId;
