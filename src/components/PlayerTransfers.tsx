import React from "react";
import TeamCard from "./TeamCard";
import useCurrentPlayerStore from "../state-management/current-player/store";

const PlayerTransfers = () => {
  const { player } = useCurrentPlayerStore();
  const firstTransfer = player?.transfers[player.transfers.length - 1];

  return (
    <div className="d-flex gap-2 flex-wrap">
      {player?.transfers.map((transfer) => (
        <TeamCard type="in" transfer={transfer} />
      ))}
      <TeamCard type="out" transfer={firstTransfer} />
    </div>
  );
};

export default PlayerTransfers;
