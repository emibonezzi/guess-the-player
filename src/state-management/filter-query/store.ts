import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import getRandomLeague from "../../utils/getRandomLeague";
import getRandomSeason from "../../utils/getRandomSeason";

interface FilterQueryStore {
  filterQuery: FilterQuery;
  setLeagueId: (randomId: number) => void;
  setSeasonId: (randomId: number) => void;
  setFilterQuery: (newQuery: FilterQuery) => void;
}

const { randomLeague } = getRandomLeague();
const { randomSeason } = getRandomSeason();

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: { leagueId: randomLeague, season: randomSeason },
  setLeagueId: (randomLeagueId) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, leagueId: randomLeagueId },
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
