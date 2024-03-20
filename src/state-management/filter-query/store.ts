import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { FilterQuery } from "../../entities/TransferMarkt/FilterQuery";
import getRandomItem from "../../utils/getRandomItem";
import getNextRandomItem from "../../utils/getNextRandomItem";
import { seasons, teams } from "../../data/teamsAndLeagues";

interface FilterQueryStore {
  filterQuery: FilterQuery;
  setFilterQuery: () => void;
}

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: {
    season: getRandomItem(seasons),
    teamId: getRandomItem(teams),
  },
  setFilterQuery: () =>
    set((store) => ({
      filterQuery: {
        season: getNextRandomItem(seasons, store.filterQuery.season),
        teamId: getNextRandomItem(teams, store.filterQuery.teamId),
      },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
