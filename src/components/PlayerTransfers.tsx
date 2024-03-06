import React from "react";
import TeamCard from "./TeamCard";
import useCurrentPlayerStore from "../state-management/current-player/store";
import { Divider } from "@chakra-ui/react";

const PlayerTransfers = () => {
  const { player } = useCurrentPlayerStore();
  const firstTransfer = player?.transfers[player.transfers.length - 1];

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {player?.transfers.map((transfer, index) => (
          <TeamCard key={index} type="in" transfer={transfer} />
        ))}
        <TeamCard type="out" transfer={firstTransfer} />
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
