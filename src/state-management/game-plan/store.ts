import create from "zustand-store-addons";
import { GamePlan } from "../../entities/TransferMarkt/GamePlan";
import { mountStoreDevtool } from "simple-zustand-devtools";
import useFilterQueryStore from "../filter-query/store";
import { Match } from "../../entities/TransferMarkt/Match";
import { getRandomMatch } from "../../utils/getRandomMatch";

interface GamePlanStore {
  gamePlan: GamePlan | undefined;
  randomMatch:
    | {
        id: string | undefined;
        bigTeam: string | undefined;
        bigTeamIsPlaying: string | undefined;
      }
    | undefined;
  setRandomMatch: (match: {
    id: string | undefined;
    bigTeam: string | undefined;
    bigTeamIsPlaying: string | undefined;
  }) => void;
  setGamePlan: (randomGamePlan: GamePlan) => void;
}

const useGamePlanStore = create<GamePlanStore>(
  (set, get) => ({
    gamePlan: undefined,
    randomMatch: undefined,
    setRandomMatch: (newMatch) => set((store) => ({ randomMatch: newMatch })),
    setGamePlan: (randomGamePlan) =>
      set((store) => ({ gamePlan: randomGamePlan })),
  }),
  {
    computed: {
      randomMatch: function () {
        if (this.gamePlan) {
          return getRandomMatch(
            this.gamePlan.playDayMatches.filter(
              (item: Match) =>
                item.homeClubID ===
                  useFilterQueryStore.getState().filterQuery.teamId ||
                item.awayClubID ===
                  useFilterQueryStore.getState().filterQuery.teamId
            ),
            useFilterQueryStore.getState().filterQuery.teamId
          );
        } else {
          return null;
        }
      },
    },
  }
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("GamePlanStore", useGamePlanStore);
}

export default useGamePlanStore;
