import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Search } from "../entities/TransferMarkt/Search";
import ms from "ms";
import useSearchText from "../state-management/search-text/store";

const apiClientSearchText = new APIClient<Search>("/search/quick-search");

const useSearch = () => {
  const { text } = useSearchText();

  const {
    data: results,
    isLoading: isLoadingResults,
    error: searchError,
    refetch,
  } = useQuery<Search>({
    queryKey: ["searchText", text],
    queryFn: () =>
      apiClientSearchText.getAll({
        params: {
          query: text,
          locale: "COM",
        },
      }),
    staleTime: ms("1h"),
    retry: 0,
    refetchOnWindowFocus: false,
  });

  return { results, isLoadingResults, searchError, refetch };
};

export default useSearch;
