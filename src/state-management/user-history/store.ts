import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";
import { PlayerInDb } from "../../entities/TransferMarkt/PlayerInDb";

interface UserHistoryStore {
  playerGuessed: PlayerInDb[];
  playerNotGuessed: PlayerInDb[];
  setPlayerGuessed: (newPlayer: PlayerInDb) => void;
  setPlayerNotGuessed: (newPlayer: PlayerInDb) => void;
  resetAll: () => void;
}

const useUserHistoryStore = create<UserHistoryStore>((set) => ({
  playerGuessed: [],
  playerNotGuessed: [],
  setPlayerGuessed: (player) =>
    set((store) => ({ playerGuessed: [...store.playerGuessed, player] })),
  setPlayerNotGuessed: (player) =>
    set((store) => ({ playerNotGuessed: [...store.playerNotGuessed, player] })),
  resetAll: () => set(() => ({ playerGuessed: [], playerNotGuessed: [] })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UserHistoryStore", useUserHistoryStore);
}

export default useUserHistoryStore;
