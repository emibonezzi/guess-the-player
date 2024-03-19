import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface SearchTextStore {
  text: string;
  setSearchText: (text: string) => void;
  resetText: () => void;
}

const useSearchText = create<SearchTextStore>((set) => ({
  text: "",
  setSearchText: (userText) => set(() => ({ text: userText })),
  resetText: () => set(() => ({ text: "" })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("SearchTextStore", useSearchText);
}

export default useSearchText;
