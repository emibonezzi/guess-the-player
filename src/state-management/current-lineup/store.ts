import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { GameLineUp } from "../../entities/TransferMarkt/GameLineUp";

export interface CurrentLineUpStore {
  lineup: GameLineUp | null;
  whereIsBigTeamPlaying: string;
  setWhereIsBigTeamPlaying: (where: string) => void;
  setLineup: (lineup: GameLineUp) => void;
}

const useCurrentLineUp = create<CurrentLineUpStore>((set) => ({
  lineup: null,
  whereIsBigTeamPlaying: "home",
  setWhereIsBigTeamPlaying: (where) =>
    set((store) => ({ ...store.lineup, whereIsBigTeamPlaying: where })),
  setLineup: (newLineUp) =>
    set((store) => ({
      lineup: newLineUp,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentLineUpStore", useCurrentLineUp);
}

export default useCurrentLineUp;
