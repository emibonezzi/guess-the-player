import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { FilterQuery } from "../../entities/TransferMarkt/FilterQuery";

interface FilterQueryStore {
  filterQuery: FilterQuery;
  setFilterQuery: () => void;
}

const seasons = [
  2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
  2018, 2019, 2020, 2021, 2022,
];

const teamsAndLeagues = [
  {
    leagueId: "IT1",
    teams: ["46", "12", "5", "6195", "506", "398", "800", "252", "410", "430"],
  },
  { leagueId: "GB1", teams: ["11", "631", "31", "281"] },
  { leagueId: "ES1", teams: ["131", "418"] },
];

const randomLeagueId =
  teamsAndLeagues[Math.floor(Math.random() * teamsAndLeagues.length)].leagueId;

const randomTeamIdFromLeague = teamsAndLeagues.find(
  (item) => item.leagueId === randomLeagueId
)?.teams[
  Math.floor(
    Math.random() *
      teamsAndLeagues.find((item) => item.leagueId === randomLeagueId)?.teams
        .length!!
  )
];

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: {
    season: seasons[Math.floor(Math.random() * seasons.length)],
    dayId: 0,
    leagueId: randomLeagueId,
    teamId: randomTeamIdFromLeague,
  },
  setFilterQuery: () =>
    set((store) => ({
      filterQuery: {
        season:
          seasons.findIndex((item) => store.filterQuery.season === item) <
          seasons.length - 1
            ? seasons[
                seasons.findIndex((item) => store.filterQuery.season === item) +
                  1
              ]
            : seasons[0],
        dayId: 0,
        leagueId:
          teamsAndLeagues.findIndex(
            (item) => store.filterQuery.leagueId === item.leagueId
          ) <
          teamsAndLeagues.length - 1
            ? teamsAndLeagues[
                teamsAndLeagues.findIndex(
                  (item) => store.filterQuery.leagueId === item.leagueId
                ) + 1
              ].leagueId
            : teamsAndLeagues[0].leagueId,
        teamId:
          teamsAndLeagues.findIndex(
            (item) => store.filterQuery.leagueId === item.leagueId
          ) <
          teamsAndLeagues.length - 1
            ? teamsAndLeagues[
                teamsAndLeagues.findIndex(
                  (item) => store.filterQuery.leagueId === item.leagueId
                ) + 1
              ].teams[
                Math.floor(
                  Math.random() *
                    teamsAndLeagues[
                      teamsAndLeagues.findIndex(
                        (item) => store.filterQuery.leagueId === item.leagueId
                      ) + 1
                    ].teams.length
                )
              ]
            : teamsAndLeagues[0].teams[
                Math.floor(Math.random() * teamsAndLeagues[0].teams.length)
              ],
      },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
