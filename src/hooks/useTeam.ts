import { useQuery } from "@tanstack/react-query";
import { FetchResponsePlayer } from "../entities/FetchResponsePlayer";
import { FetchResponseTeam } from "../entities/FetchResponseTeam";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";
import ms from "ms";

const apiClientTeam = new APIClient<FetchResponseTeam>("/players/squads");

const apiClientPlayers = new APIClient<FetchResponsePlayer>("/transfers");

const useTeam = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);

  const {
    data: allTransfersByTeam,
    isLoading,
    error,
  } = useQuery<FetchResponseTeam>({
    queryKey: ["team", filterQuery],
    queryFn: () =>
      apiClientTeam.getAll({
        params: { team: filterQuery.teamId },
      }),
    staleTime: ms("1h"),
  });

  const randomIndex = Math.floor(
    Math.random() * allTransfersByTeam?.response[0].players.length - 1
  );

  const playerId = allTransfersByTeam?.response[0].players[randomIndex].id;

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

  return { allTransfersByTeam, randomPlayer, isLoadingPlayer, playerError };
};

export default useTeam;
