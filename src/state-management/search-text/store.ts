import { mountStoreDevtool } from "simple-zustand-devtools";
import { text } from "stream/consumers";
import { create } from "zustand";

interface SearchTextStore {
  text: string;
  setSearchText: (text: string) => void;
  resetText: () => void;
}

const useSearchText = create<SearchTextStore>((set) => ({
  text: "",
  setSearchText: (userText) => set((store) => ({ text: userText })),
  resetText: () => set((store) => ({ text: "" })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("SearchTextStore", useSearchText);
}

export default useSearchText;
