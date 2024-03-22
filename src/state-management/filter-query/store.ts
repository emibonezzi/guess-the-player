import { create } from "zustand";
import { FilterQuery } from "../../entities/FilterQuery";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface FilterQueryStore {
  filterQuery: FilterQuery | null;
  setFilterQuery: (filterQuery: FilterQuery) => void;
}

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: null,
  setFilterQuery: (newFilterQuery) =>
    set(() => ({ filterQuery: newFilterQuery })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("FilterQueryStore", useFilterQueryStore);
}

export default useFilterQueryStore;
