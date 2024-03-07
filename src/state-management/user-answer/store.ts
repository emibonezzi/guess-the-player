import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface UserAnswerStore {
  answer: boolean;
  setAnswer: () => void;
}

const useUserAnswer = create<UserAnswerStore>((set) => ({
  answer: false,
  setAnswer: () => set((store) => ({ answer: !store })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("UserAnswerStore", useUserAnswer);
}

export default useUserAnswer;
