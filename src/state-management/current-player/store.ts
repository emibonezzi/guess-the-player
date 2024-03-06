import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { Player } from "../../entities/Player";
import { PlayerDetail } from "../../entities/PlayerDetail";

interface CurrentPlayerStore {
  player: PlayerDetail | null;
  setPlayer: (player: PlayerDetail) => void;
}

const useCurrentPlayerStore = create<CurrentPlayerStore>((set) => ({
  player: null,
  setPlayer: (player) => set((store) => ({ player: player })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentPlayerStore", useCurrentPlayerStore);
}

export default useCurrentPlayerStore;
