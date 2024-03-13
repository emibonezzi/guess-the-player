import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameLineUp } from "../entities/TransferMarkt/GameLineUp";
import { GamePlan } from "../entities/TransferMarkt/GamePlan";
import { TransferHistory } from "../entities/TransferMarkt/TransferHistory";
import APIClient from "../services/api-client";
import useCurrentLineUp from "../state-management/current-lineup/store";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useGamePlanStore from "../state-management/game-plan/store";
import getRandomTeamId from "../utils/getRandomTeamId";
import { Lineup } from "../entities/TransferMarkt/Lineup";

const apiClientGamePlan = new APIClient<GamePlan>("/matches/list-by-game-plan");

const apiClientGetLineUps = new APIClient<GameLineUp>("/matches/get-line-ups");

const apiClientTransferHistory = new APIClient<TransferHistory>(
  "/players/get-transfer-history"
);

const usePlayerByGame = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { setPlayer } = useCurrentPlayerStore();
  const { setGamePlan } = useGamePlanStore();
  const { setLineup } = useCurrentLineUp();
  const { randomTeamId } = getRandomTeamId();

  // call game plan API
  const {
    data: gamePlanResponse,
    isLoading: isLoadingGamePlan,
    error: gamePlanError,
  } = useQuery<GamePlan>({
    queryKey: ["gamePlan", filterQuery],
    queryFn: () =>
      apiClientGamePlan
        .getAll({
          params: {
            seasonID: filterQuery.season,
            leagueID: filterQuery.leagueId,
            dayID: 0,
            domain: "com",
          },
        })
        .then((res) => {
          setGamePlan(res);
          return res;
        }),
    staleTime: ms("1h"),
  });

  // pick game only if is played by random big team either home or away
  const gamesFiltered = gamePlanResponse?.playDayMatches.filter(
    (item) =>
      item.homeClubID === randomTeamId || item.awayClubID === randomTeamId
  );

  // get random match ID
  const randomMatchId = gamesFiltered
    ? gamesFiltered[Math.floor(Math.random() * gamesFiltered?.length)].id
    : null;

  // is random big team from random match playing home or away?
  const type =
    gamesFiltered?.find((item) => item.id === randomMatchId)?.awayClubID ===
    randomTeamId
      ? "away"
      : gamesFiltered?.find((item) => item.id === randomMatchId)?.homeClubID ===
        randomTeamId
      ? "home"
      : null;

  // call match lineup API
  const {
    data: matchLineupResponse,
    isLoading: isLoadingMatchLineup,
    error: matchLineupError,
  } = useQuery<GameLineUp>({
    queryKey: ["lineUps", filterQuery],
    queryFn: () =>
      apiClientGetLineUps
        .getAll({
          params: {
            id: randomMatchId,
            domain: "com",
          },
        })
        .then((res) => {
          setLineup(res);
          return res;
        }),
    staleTime: ms("1h"),
    enabled: !!randomMatchId,
  });

  // get starting lineup
  const startingLineUp = type
    ? matchLineupResponse?.formations[type].start
    : null;

  // get playerId from random position in starting lineups
  const playerId = startingLineUp
    ? startingLineUp[
        Math.floor(
          Math.random() * Object.keys(startingLineUp).length
        ).toString() as keyof Lineup
      ].id
    : null;

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
    isLoadingGamePlan,
    gamePlanError,
    isLoadingMatchLineup,
    matchLineupError,
    playerTransferHistoryError,
  };
};

export default usePlayerByGame;
