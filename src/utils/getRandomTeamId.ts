const getRandomTeamId = () => {
  const teams = [46];
  const randomTeamId = teams[Math.floor(Math.random() * teams.length)];
  return { randomTeamId };
};

export default getRandomTeamId;
