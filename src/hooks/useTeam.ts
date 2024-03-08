import { UseQueryOptions, useQueries, useQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponsePlayer } from "../entities/FetchResponsePlayer";
import { FetchResponseTopScorers } from "../entities/FetchResponseTopScorers";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";
import { FetchResponsePlayerSeasons } from "../entities/FetchResponsePlayerSeasons";
import { FetchResponsePlayerProfile } from "../entities/FetchResponsePlayerProfile";
import { Team } from "../entities/Team";

const apiClientTopScorers = new APIClient<FetchResponseTopScorers>(
  "/players/topscorers"
);

const apiClientPlayerSeasons = new APIClient<FetchResponsePlayerSeasons>(
  "/players/seasons"
);

const apiClientPlayerProfile = new APIClient<FetchResponsePlayerProfile>(
  "/players"
);

const apiClientPlayers = new APIClient<FetchResponsePlayer>("/transfers");

const useTeam = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);

  // call top scorers API
  const {
    data: topScorers,
    isLoading: isLoadingTopScorers,
    error: topScorersError,
  } = useQuery<FetchResponseTopScorers>({
    queryKey: ["topScorers", filterQuery],
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

  // call player/seasons API
  const {
    data: playerSeasonsResponse,
    isLoading: isLoadingPlayerSeasons,
    error: playerSeasonsError,
  } = useQuery<FetchResponsePlayerSeasons>({
    queryKey: ["playerSeasons", filterQuery],
    queryFn: () =>
      apiClientPlayerSeasons.getAll({
        params: { player: playerId },
      }),
    enabled: !!playerId,
  });

  // get seasons from seasons list
  const playerSeasons = playerSeasonsResponse?.response;

  // call players API for every season and get clubs array
  const responseForEverySeason = useQueries({
    queries: playerSeasons
      ? playerSeasons.map<UseQueryOptions<FetchResponsePlayerProfile>>(
          (season) => {
            return {
              queryKey: ["playerSeasonDetail", season],
              queryFn: () =>
                apiClientPlayerProfile.getAll({
                  params: { id: playerId, season: season },
                }),
            };
          }
        )
      : [],
  });

  // create clubs obj
  const playerClubs = responseForEverySeason.map((item) => ({
    date: item.data?.parameters.season,
    team: item.data?.response[0].statistics[0].team.name,
    logo: item.data?.response[0].statistics[0].team.logo,
  }));

  // create player object
  const playerProfile = {};

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
    playerClubs,
    responseForEverySeason,
    topScorers,
    playerTransfers,
    randomPlayer,
    isLoadingPlayer,
    playerError,
  };
};

export default useTeam;
