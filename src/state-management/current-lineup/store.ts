import { mountStoreDevtool } from "simple-zustand-devtools";
import create from "zustand-store-addons";
import { GameLineUp } from "../../entities/TransferMarkt/GameLineUp";
import { Lineup } from "../../entities/TransferMarkt/Lineup";
import { PlayerFromLineup } from "../../entities/TransferMarkt/PlayerFromLineup";

export interface CurrentLineUpStore {
  lineup: GameLineUp | null;
  randomPlayer:
    | {
        player: PlayerFromLineup;
        playerInLineup: Lineup;
        teamWithOutPlayerId: PlayerFromLineup[];
        coachName: string | undefined;
      }
    | undefined;
  setRandomPlayer: (newRandomPlayer: {
    player: PlayerFromLineup;
    playerInLineup: Lineup;
    teamWithOutPlayerId: PlayerFromLineup[];
    coachName: string | undefined;
  }) => void;
  setLineup: (lineup: GameLineUp) => void;
}

const useCurrentLineUp = create<CurrentLineUpStore>((set) => ({
  lineup: null,
  randomPlayer: undefined,
  setRandomPlayer: (newRandomPlayer) =>
    set(() => ({ randomPlayer: newRandomPlayer })),
  setLineup: (newLineUp) =>
    set(() => ({
      lineup: newLineUp,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("CurrentLineUpStore", useCurrentLineUp);
}

export default useCurrentLineUp;
