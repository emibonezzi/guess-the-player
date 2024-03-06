import { create } from "zustand";

interface UserAnswerStore {
  answer: string;
  setAnswer: (answer: string) => void;
}

create<UserAnswerStore>((set) => ({
  answer: "",
  setAnswer: (userAnswer) => set((store) => ({ answer: userAnswer })),
}));
