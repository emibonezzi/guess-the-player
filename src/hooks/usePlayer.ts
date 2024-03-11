import { useQuery } from "@tanstack/react-query";
import { Squad } from "../entities/TransferMarkt/Squad";
import { TransferHistory } from "../entities/TransferMarkt/TransferHistory";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";
import useCurrentPlayerStore from "../state-management/current-player/store";
import ms from "ms";

const apiClientSquad = new APIClient<Squad>("/clubs/get-squad");

const apiClientTransferHistory = new APIClient<TransferHistory>(
  "/players/get-transfer-history"
);

const usePlayer = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { setPlayer } = useCurrentPlayerStore();

  // call squad API
  const {
    data: squadResponse,
    isLoading: isLoadingSquad,
    error: squadError,
  } = useQuery<Squad>({
    queryKey: ["squad", filterQuery],
    queryFn: () =>
      apiClientSquad.getAll({
        params: {
          id: filterQuery.teamId,
          saison_id: filterQuery.season,
          domain: "com",
        },
      }),
    staleTime: ms("1h"),
  });

  // filter young players out
  const squadFiltered = squadResponse?.squad.filter((item) => item.age > 21);

  // get random playerId from squad list
  const playerId = squadFiltered?.filter((item) => item.age > 21)[
    Math.floor(Math.random() * squadFiltered.length)
  ].id;

  // call player transfer history API
  const {
    data: playerTransferHistoryResponse,
    isLoading: isLoadingPlayerTransferHistory,
    error: playerTransferHistoryError,
  } = useQuery<TransferHistory>({
    queryKey: ["playerTransferHistory", filterQuery],
    queryFn: () =>
      apiClientTransferHistory
        .getAll({
          params: { id: playerId, domain: "com" },
        })
        .then((res) => {
          // set current player state
          setPlayer({
            id: res.transferHistory[0].playerID,
            name: res.transferHistory[0].playerName,
            transferHistory: res.transferHistory,
          });
          return res;
        }),
    enabled: !!playerId,
    staleTime: ms("1h"),
  });

  // get transfer history array
  const playerTransferHistory = playerTransferHistoryResponse?.transferHistory;

  return {
    playerTransferHistory,
    isLoadingPlayerTransferHistory,
    isLoadingSquad,
    squadError,
    playerTransferHistoryError,
  };
};

export default usePlayer;
