import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { PlayerDetail } from "../../entities/PlayerDetail";

interface CurrentPlayerStore {
  player: PlayerDetail | undefined;
  setPlayer: (player: PlayerDetail) => void;
}

const useCurrentPlayerStore = create<CurrentPlayerStore>((set) => ({
  player: undefined,
  setPlayer: (player) => set((store) => ({ player: player })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentPlayerStore", useCurrentPlayerStore);
}

export default useCurrentPlayerStore;
