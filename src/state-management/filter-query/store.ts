import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface FilterQueryStore {
  filterQuery: FilterQuery;
  setTeamId: (randomId: number) => void;
  setPlayerId: (randomId: number) => void;
}

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: { teamId: 505, playerId: 1 },
  setTeamId: (randomTeamId) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, teamId: randomTeamId },
    })),
  setPlayerId: (randomPlayerId) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, playerId: randomPlayerId },
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
