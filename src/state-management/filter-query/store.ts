import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface FilterQueryStore {
  teams: string[];
  setCurrentTeams: (teams: string[]) => void;
  level: number[];
  setLevel: (level: number[]) => void;
}

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  teams: [],
  setCurrentTeams: (newTeamsArray) => set(() => ({ teams: newTeamsArray })),
  level: [],
  setLevel: (newLevelArray) => set(() => ({ level: newLevelArray })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
