import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponsePlayer } from "../entities/FetchResponsePlayer";
import { FetchResponseTopScorers } from "../entities/FetchResponseTopScorers";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";

const apiClientTopScorers = new APIClient<FetchResponseTopScorers>(
  "/players/topscorers"
);

const apiClientPlayers = new APIClient<FetchResponsePlayer>("/transfers");

const useTeam = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);

  // call top scorers API
  const {
    data: topScorers,
    isLoading,
    error,
  } = useQuery<FetchResponseTopScorers>({
    queryKey: ["query", filterQuery],
    queryFn: () =>
      apiClientTopScorers.getAll({
        params: { league: filterQuery.leagueId, season: filterQuery.season },
      }),
  });

  // get randomPlayerId from topscorers list
  const playerId =
    topScorers?.response[
      Math.floor(Math.random() * topScorers?.response.length)
    ].player.id;

  // call transfers API with player Id
  const {
    data: randomPlayer,
    isLoading: isLoadingPlayer,
    error: playerError,
  } = useQuery<FetchResponsePlayer>({
    queryKey: ["player", filterQuery],
    queryFn: () =>
      apiClientPlayers.getAll({
        params: { player: playerId },
      }),
    enabled: !!playerId,
    staleTime: ms("1h"),
  });

  const playerTransfers = randomPlayer?.response[0].transfers;

  return {
    topScorers,
    playerTransfers,
    randomPlayer,
    isLoadingPlayer,
    playerError,
  };
};

export default useTeam;
