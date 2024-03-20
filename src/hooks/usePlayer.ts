import { useQueries, useQuery } from "@tanstack/react-query";
import ms from "ms";
import { seasons, teams } from "../data/teamsAndLeagues";
import { Squad } from "../entities/TransferMarkt/Squad";
import { TransferHistory } from "../entities/TransferMarkt/TransferHistory";
import APIClient from "../services/api-client";
import useUserHistoryStore from "../state-management/user-history/store";
import getRandomItem from "../utils/getRandomItem";

const apiClientSquad = new APIClient<Squad>("/clubs/squad");

const apiClientTransferHistory = new APIClient<TransferHistory>(
  "/players/transfers"
);

const usePlayer = () => {
  const { questionToggle } = useUserHistoryStore();
  const { playerGuessed } = useUserHistoryStore();

  // get multiple squads from random season and assemble list of players ID
  const allData = useQueries({
    queries: getRandomItem(teams).map((team) => ({
      queryKey: ["team", team],
      queryFn: () =>
        apiClientSquad.getAll({
          params: {
            club_id: team,
            season_id: getRandomItem(seasons),
            locale: "COM",
          },
        }),
      staleTime: ms("24h"),
    })),
  });

  // dummy response sample
  /* const allData = [dummy1, dummy2, dummy3]; */

  // handle response and flat all players in one array
  const allPlayers = allData.map((item) => item.data?.data).flat();

  // filter players by market value to get relevant players
  const relevantPlayers = allPlayers.filter(
    (player) => player?.marketValue.value!! > 20_000_000 || player?.age!! > 25
  );

  // filter out players already guessed by player
  const allPlayersFiltered = relevantPlayers.filter(
    (player) =>
      !playerGuessed.some((guessedPlayer) => player?.id === guessedPlayer.id)
  );

  // flat all squads array and return random player
  const randomPlayer = getRandomItem(allPlayersFiltered);

  const {
    data: player,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["player", questionToggle],
    queryFn: () =>
      apiClientTransferHistory.getAll({
        params: {
          locale: "COM",
          player_id: randomPlayer?.id,
        },
      }),
    enabled: !!randomPlayer,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return {
    randomPlayer,
    player,
    allPlayersFiltered,
    allData,
    isFetching,
    refetch,
  };
};

export default usePlayer;