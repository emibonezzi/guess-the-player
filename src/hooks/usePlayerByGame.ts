import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { GameLineUp } from "../entities/TransferMarkt/GameLineUp";
import { GamePlan } from "../entities/TransferMarkt/GamePlan";
import { TransferHistory } from "../entities/TransferMarkt/TransferHistory";
import APIClient from "../services/api-client";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useUserHistoryStore from "../state-management/user-history/store";
import { getRandomMatch } from "../utils/getRandomMatch";
import { getRandomPlayer } from "../utils/getRandomPlayer";
import useCurrentLineUp from "../state-management/current-lineup/store";
import useGamePlanStore from "../state-management/game-plan/store";

const apiClientGamePlan = new APIClient<GamePlan>("/matches/list-by-game-plan");

const apiClientGetLineUps = new APIClient<GameLineUp>("/matches/get-line-ups");

const apiClientTransferHistory = new APIClient<TransferHistory>(
  "/players/get-transfer-history"
);

const usePlayerByGame = () => {
  console.log("usePlayerByGame hook invoked");
  const { filterQuery } = useFilterQueryStore();
  const { setPlayer } = useCurrentPlayerStore();
  const { playerGuessed } = useUserHistoryStore();
  const { setLineup, setRandomPlayer, randomPlayer } = useCurrentLineUp();
  const { randomMatch, setGamePlan, setRandomMatch } = useGamePlanStore();

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
          setRandomMatch(
            getRandomMatch(res.playDayMatches, filterQuery.teamId)
          );
          return res;
        }),
  });

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
            id: randomMatch?.id,
            domain: "com",
          },
        })
        .then((res) => {
          setLineup(res);
          setRandomPlayer(
            getRandomPlayer(
              res.formations[randomMatch?.bigTeamIsPlaying].start,
              playerGuessed,
              res.coaches[randomMatch?.bigTeamIsPlaying]
            )
          );
          return res;
        }),
    enabled: !!gamePlanResponse,
  });

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
          params: { id: randomPlayer?.player.id, domain: "com" },
        })
        .then((res) => {
          console.log(randomMatch);
          // set current player state
          setPlayer({
            id: res.transferHistory[0].playerID,
            name: res.transferHistory[0].playerName,
            nationality: Object.values(randomPlayer?.playerInLineup!!).find(
              (item) => item.id === randomPlayer?.player.id
            )?.countryName,
            position: Object.values(randomPlayer?.playerInLineup!!).find(
              (item) => item.id === randomPlayer?.player.id
            )?.position,
            transferHistory: res.transferHistory,
            wasCoachedBy: randomPlayer?.coachName,
            playedWith:
              randomPlayer?.teamWithOutPlayerId[
                Math.floor(
                  Math.random() * randomPlayer.teamWithOutPlayerId.length
                )
              ].playerName,
          });
          return res;
        }),
    enabled: !!matchLineupResponse,
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
