import { create } from "zustand";
import { GamePlan } from "../../entities/TransferMarkt/GamePlan";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GamePlanStore {
  gamePlan: GamePlan | {};
  setGamePlan: (randomGamePlan: GamePlan) => void;
}

const useGamePlanStore = create<GamePlanStore>((set) => ({
  gamePlan: {},
  setGamePlan: (randomGamePlan) =>
    set((store) => ({ gamePlan: randomGamePlan })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("GamePlanStore", useGamePlanStore);
}

export default useGamePlanStore;
