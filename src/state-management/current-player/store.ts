import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { PlayerComplete } from "../../entities/TransferMarkt/PlayerComplete";

interface CurrentPlayerStore {
  player: PlayerComplete | null;
  gameOver: boolean;
  setGameOver: (status: boolean) => void;
  setPlayer: (player: PlayerComplete) => void;
}

const useCurrentPlayerStore = create<CurrentPlayerStore>((set) => ({
  player: null,
  gameOver: false,
  setGameOver: (status) =>
    set((store) => {
      return { ...store, gameOver: status };
    }),
  setPlayer: (newPlayer) => set(() => ({ player: newPlayer })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentPlayerStore", useCurrentPlayerStore);
}

export default useCurrentPlayerStore;
