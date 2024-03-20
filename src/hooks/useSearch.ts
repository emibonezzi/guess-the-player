import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Search } from "../entities/TransferMarkt/Search";
import ms from "ms";
import useSearchText from "../state-management/search-text/store";

const apiClientSearchText = new APIClient<Search>("/search/quick-search");

const useSearch = () => {
  const { text } = useSearchText();
  /* const pages = [0, 1, 2, 3, 4];

  const allResults = useQueries({
    queries: pages.map((n) => ({
      queryKey: ["resultPage", n],
      queryFn: () =>
        apiClientSearchText.getAll({
          params: {
            query: text,
            locale: "COM",
            page_number: n,
          },
        }),
      staleTime: ms("1h"),
      retry: 0,
      refetchOnWindowFocus: false,
    })),
  }); */

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

  /*   const resultsCleaned = allResults
    .map((item) => item.data?.data.players)
    .flat();

  console.log(allResults); */

  return { results, isLoadingResults, searchError, refetch };
};

export default useSearch;
