import { UseQueryOptions, useQueries, useQuery } from "@tanstack/react-query";
import { FetchResponsePlayer } from "../entities/APIFootball/FetchResponsePlayer";
import { FetchResponsePlayerProfile } from "../entities/APIFootball/FetchResponsePlayerProfile";
import { FetchResponsePlayerSeasons } from "../entities/APIFootball/FetchResponsePlayerSeasons";
import { FetchResponseTopScorers } from "../entities/APIFootball/FetchResponseTopScorers";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";
import ms from "ms";

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
    queries: playerSeasonsResponse
      ? playerSeasons?.map<UseQueryOptions<FetchResponsePlayerProfile>>(
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
    date: parseInt(item.data?.parameters.season),
    team:
      item.data?.response.length!! > 0
        ? item.data?.response[0].statistics[0].team.name
        : null,
    logo:
      item.data?.response.length!! > 0
        ? item.data?.response[0].statistics[0].team.logo
        : null,
  }));

  // reduce duplicates and years

  const playerFiltered = playerClubs.reduce((groups, club) => {
    console.log(playerClubs);
    const lastGroup = groups[groups.length - 1];

    if (
      !lastGroup ||
      lastGroup.date !== club.date - 1 ||
      lastGroup.team !== club.team
    ) {
      groups.push({ date: club.date, team: club.team, logo: club.logo });
    } else {
      lastGroup.date = club.date;
    }

    return groups;
  }, []);

  // create player object
  const playerProfile = {};

  return {
    playerClubs,
    playerFiltered,
    responseForEverySeason,
    topScorers,
  };
};

export default useTeam;
