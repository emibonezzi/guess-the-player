const getRandomLeague = () => {
  const leagues = ["IT1"];
  const randomLeague = leagues[Math.floor(Math.random() * leagues.length)];
  return { randomLeague, leagues };
};

export default getRandomLeague;
