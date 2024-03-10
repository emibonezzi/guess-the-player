import { Box, Divider, Heading, Image, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TransferCard from "./TransferCard";
import usePlayer from "../hooks/usePlayer";
import useCurrentPlayerStore from "../state-management/current-player/store";

const PlayerTransfers = () => {
  const {
    isLoadingSquad,
    isLoadingPlayerTransferHistory,
    playerTransferHistoryError,
  } = usePlayer();

  const { player } = useCurrentPlayerStore();

  if (isLoadingPlayerTransferHistory || isLoadingSquad) return <Spinner />;

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {playerTransferHistoryError && (
          <p>{playerTransferHistoryError.message}</p>
        )}
        {player?.transferHistory
          ?.slice()
          .reverse()
          .map((item) => {
            return (
              <TransferCard
                team={item.newClubName}
                logo={item.newClubImage}
                date={item.date.slice(7, item.date.length)}
              />
            );
          })}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
