import { Match } from "../entities/TransferMarkt/Match";

export const getRandomMatch = (
  arr: Match[] | undefined,
  bigTeamId: string | undefined
) => {
  const filteredArr = arr?.filter(
    (match) => match.awayClubID === bigTeamId || match.homeClubID === bigTeamId
  );
  const randomMatch =
    filteredArr!![Math.floor(Math.random() * filteredArr!!.length)];

  return {
    id: randomMatch.id,
    bigTeam: bigTeamId,
    bigTeamIsPlaying: randomMatch.awayClubID === bigTeamId ? "away" : "home",
  };
};
