import { Divider, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TeamCard from "./TeamCard";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomTeamId from "../utils/getRandomTeamId";

const PlayerTransfers = () => {
  const { randomPlayer, isLoadingPlayer } = useTeam();

  if (isLoadingPlayer) return <Spinner />;

  if (randomPlayer?.response.length === 0)
    return <p>Player without a career</p>;

  const transfers = randomPlayer?.response[0].transfers.slice().reverse();

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {/* if first transfer, switch in and out */}
        {transfers
          ?.filter((item) => item.teams.in.id !== 20674)
          .map((t, i) =>
            i === 0 ? { ...t, teams: { ...t.teams, in: t.teams.out } } : t
          )
          .map((transfer, index) => (
            <TeamCard key={index} type="in" transfer={transfer} />
          ))}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
