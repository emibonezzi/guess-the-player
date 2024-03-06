import React from "react";
import TeamCard from "./TeamCard";
import useCurrentPlayerStore from "../state-management/current-player/store";

const PlayerTransfers = () => {
  const { player } = useCurrentPlayerStore();

  return (
    <div className="d-flex gap-2 flex-wrap">
      {player?.transfers.map((transfer) => (
        <TeamCard transfer={transfer} />
      ))}
    </div>
  );
};

export default PlayerTransfers;
