import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { leagues, levels } from "../../data/teamsAndLeagues";

interface FilterQueryStore {
  teams: string[];
  setCurrentTeams: (teams: string[]) => void;
  level: number[];
  setLevel: (level: number[]) => void;
}

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  teams: leagues[0].teams,
  setCurrentTeams: (newTeamsArray) => set(() => ({ teams: newTeamsArray })),
  level: levels[0].seasons,
  setLevel: (newLevelArray) => set(() => ({ level: newLevelArray })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
