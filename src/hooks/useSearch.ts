import { useQueries } from "@tanstack/react-query";
import { Search } from "../entities/TransferMarkt/Search";
import APIClientSearch from "../services/api-client-search";
import useSearchText from "../state-management/search-text/store";

const apiClientSearchText = new APIClientSearch<Search>("/search");

const useSearch = () => {
  const { text } = useSearchText();
  const pages = ["1", "2", "3"];

  const allResults = useQueries({
    queries: pages.map((n) => ({
      queryKey: ["resultPage", [n, text]],
      queryFn: () =>
        apiClientSearchText.getAll({
          params: {
            query: text,
            domain: "COM",
            page: n,
          },
        }),
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      enabled: !!text,
    })),
  });

  const resultsCleaned = allResults.map((item) => item.data?.players).flat();

  return {
    resultsCleaned,
    allResults,
  };
};

export default useSearch;
