const getRandomTeamId = () => {
  const teams = [505, 496, 489, 492, 497];
  const randomTeamId = teams[Math.floor(Math.random() * teams.length - 1)];
  return { randomTeamId };
};

export default getRandomTeamId;
