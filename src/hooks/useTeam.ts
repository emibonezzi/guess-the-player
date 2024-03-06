import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { FetchResponseTeam } from "../entities/FetchResponseTeam";
import { FetchResponsePlayer } from "../entities/FetchResponsePlayer";
import ms from "ms";

const apiClientTeam = new APIClient<FetchResponseTeam>("/transfers");

const apiClientPlayers = new APIClient<FetchResponsePlayer>("/transfers");

const useTeam = () => {
  const {
    data: allTransfersByTeam,
    isLoading,
    error,
  } = useQuery<FetchResponseTeam>({
    queryKey: ["team"],
    queryFn: () => apiClientTeam.getAll({ params: { team: 505 } }),
    staleTime: ms("24h"),
  });

  const playerId = allTransfersByTeam?.response[10].player.id;

  const {
    data: randomPlayer,
    isLoading: isLoadingPlayer,
    error: playerError,
  } = useQuery<FetchResponsePlayer>({
    queryKey: ["player"],
    queryFn: () =>
      apiClientPlayers.getAll({
        params: { player: playerId },
      }),
    enabled: !!allTransfersByTeam,
  });

  return { allTransfersByTeam, randomPlayer, isLoadingPlayer, playerError };
};

export default useTeam;
