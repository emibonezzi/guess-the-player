import { create } from "zustand";
import { Lineup } from "../../entities/TransferMarkt/PlayerFromLineup";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { GameLineUp } from "../../entities/TransferMarkt/GameLineUp";

interface CurrentLineUpStore {
  lineup: GameLineUp | null;
  setLineup: (lineup: GameLineUp) => void;
}

const useCurrentLineUp = create<CurrentLineUpStore>((set) => ({
  lineup: null,
  setLineup: (newLineUp) =>
    set((store) => ({
      lineup: newLineUp,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentLineUpStore", useCurrentLineUp);
}

export default useCurrentLineUp;
