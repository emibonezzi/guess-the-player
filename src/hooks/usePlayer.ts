import { useQueries, useSuspenseQueries } from "@tanstack/react-query";
import { seasons, teams } from "../data/teamsAndLeagues";
import { Squad } from "../entities/TransferMarkt/Squad";
import { TransferHistory } from "../entities/TransferMarkt/TransferHistory";
import APIClient from "../services/api-client";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomItem from "../utils/getRandomItem";
import ms from "ms";
import { dummy1 } from "../dummyData1";
import { dummy2 } from "../dummyData2";
import { dummy3 } from "../dummyData3";
import { all } from "axios";

const apiClientSquad = new APIClient<Squad>("/clubs/squad");

const apiClientTransferHistory = new APIClient<TransferHistory>(
  "/players/get-transfer-history"
);

const usePlayer = () => {
  const { filterQuery } = useFilterQueryStore();

  // get multiple squads from random season and assemble list of players ID
  const allData = useQueries({
    queries: teams.map((team) => ({
      queryKey: ["team", team],
      queryFn: () =>
        apiClientSquad.getAll({
          params: {
            club_id: team,
            season_id: getRandomItem(seasons),
            locale: "COM",
          },
        }),
      staleTime: ms("24h"),
    })),
  });

  /* // dummy response sample
  const allSquads = [dummy1.json, dummy2.json, dummy3.json]; */

  const allSquads = allData.map((item) => item.data.data);

  const randomPlayer = getRandomItem(allSquads.flat());

  return { randomPlayer };
};

export default usePlayer;
