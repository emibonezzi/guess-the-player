const getRandomTeamId = () => {
  const teams = [631];
  const randomTeamId = teams[Math.floor(Math.random() * teams.length)];
  return { randomTeamId };
};

export default getRandomTeamId;
