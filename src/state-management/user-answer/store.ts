import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface UserAnswerStore {
  selectedPlayerId: string;
  setSelectedPlayerId: (playerId: string) => void;
}

const useUserAnswer = create<UserAnswerStore>((set) => ({
  selectedPlayerId: "",
  setSelectedPlayerId: (playerId) =>
    set((store) => ({ selectedPlayerId: playerId })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UserAnswerStore", useUserAnswer);
}

export default useUserAnswer;
