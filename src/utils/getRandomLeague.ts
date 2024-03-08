const getRandomLeague = () => {
  const leagues = [135, 39, 140, 61, 78];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  return { randomLeague };
};

export default getRandomLeague;
