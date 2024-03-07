import { Divider, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TeamCard from "./TeamCard";

const PlayerTransfers = () => {
  const { randomPlayer, isLoadingPlayer } = useTeam();

  if (isLoadingPlayer) return <Spinner />;

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {randomPlayer?.response[0].transfers.map((transfer, index) => (
          <TeamCard key={index} type="in" transfer={transfer} />
        ))}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
