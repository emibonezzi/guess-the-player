import { create } from "zustand";
import { Player } from "../../entities/TransferMarkt/Player";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface CurrentTeamStore {
  team: number;
  squad: Player[];
  setTeam: (team: number) => void;
  setSquad: (squad: Player[]) => void;
}

const useCurrentTeamStore = create<CurrentTeamStore>((set) => ({
  team: 0,
  squad: [],
  setTeam: (randomTeam) => set(() => ({ team: randomTeam })),
  setSquad: (teamSquad) => set(() => ({ squad: teamSquad })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentTeamStore", useCurrentTeamStore);
}

export default useCurrentTeamStore;
