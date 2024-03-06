import { useQuery } from "@tanstack/react-query";
import { FetchResponsePlayer } from "../entities/FetchResponsePlayer";
import APIClient from "../services/api-client";
import useTeam from "./useTeam";

const apiClient = new APIClient<FetchResponsePlayer>("/transfers");

const usePlayer = () => {
  const { allTransfersByTeam, isLoading, error } = useTeam();

  const {
    data: randomPlayer,
    isLoading: isLoadingPlayer,
    error: playerError,
  } = useQuery<FetchResponsePlayer>({
    queryKey: ["player"],
    queryFn: () =>
      apiClient.getAll({
        params: { player: allTransfersByTeam?.response[0].id },
      }),
  });

  return { randomPlayer, isLoadingPlayer, playerError };
};

export default usePlayer;
