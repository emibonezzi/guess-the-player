import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

interface SearchTextStore {
  text: string;
  setSearchText: (text: string) => void;
}

const useSearchText = create<SearchTextStore>((set) => ({
  text: "",
  setSearchText: (userText) => set((store) => ({ text: userText })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("SearchTextStore", useSearchText);
}

export default useSearchText;
