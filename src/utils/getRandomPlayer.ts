import { Coach } from "../entities/TransferMarkt/Coach";
import { Lineup } from "../entities/TransferMarkt/Lineup";
import { PlayerInDb } from "../entities/TransferMarkt/PlayerInDb";

export const getRandomPlayer = (
  formation: Lineup,
  playersGuessedByUser: PlayerInDb[],
  coach: Coach
) => {
  const filterOutPlayersGuessed = Object.values(formation).filter((player) => {
    return !playersGuessedByUser.some(
      (guessedPlayer) => guessedPlayer.id === player.id
    );
  });

  const randomPlayer =
    filterOutPlayersGuessed[
      Math.floor(Math.random() * filterOutPlayersGuessed.length)
    ];

  const teamWithOutPlayerId = Object.values(filterOutPlayersGuessed).filter(
    (player) => player.id !== randomPlayer.id
  );

  const coachName = coach.name;

  return {
    player: randomPlayer,
    playerInLineup: formation,
    teamWithOutPlayerId: teamWithOutPlayerId,
    coachName: coachName,
  };
};
