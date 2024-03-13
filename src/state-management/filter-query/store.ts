import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import getRandomSeason from "../../utils/getRandomSeason";
import { FilterQuery } from "../../entities/TransferMarkt/FilterQuery";
import getRandomTeamId from "../../utils/getRandomTeamId";
import getRandomLeague from "../../utils/getRandomLeague";

interface FilterQueryStore {
  filterQuery: FilterQuery;
  setTeamId: (randomId: number) => void;
  setSeasonId: (randomId: number) => void;
  setFilterQuery: (newQuery: FilterQuery) => void;
}

const { randomSeason } = getRandomSeason();
const { randomTeamId } = getRandomTeamId();
const { randomLeague } = getRandomLeague();

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: {
    season: randomSeason,
    dayId: 0,
    leagueId: randomLeague,
  },
  setTeamId: (randomTeamId) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, teamId: randomTeamId },
    })),
  setSeasonId: (randomSeasonId) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, seasonId: randomSeasonId },
    })),
  setFilterQuery: (newQuery) => set((store) => ({ filterQuery: newQuery })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
