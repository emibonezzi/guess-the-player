import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Search } from "../entities/TransferMarkt/Search";
import ms from "ms";

const apiClientSearchText = new APIClient<Search>("/search");

const useSearch = (searchText: string) => {
  const {
    data: results,
    isLoading: isLoadingResults,
    error: searchError,
  } = useQuery<Search>({
    queryKey: ["searchText", searchText],
    queryFn: () =>
      apiClientSearchText.getAll({
        params: {
          query: searchText,
          domain: "com",
        },
      }),
    staleTime: ms("1h"),
  });

  return { results, isLoadingResults, searchError };
};

export default useSearch;
