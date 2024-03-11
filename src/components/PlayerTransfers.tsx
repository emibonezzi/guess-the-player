import { Box, Divider, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import usePlayer from "../hooks/usePlayer";
import useCurrentPlayerStore from "../state-management/current-player/store";
import TransferCard from "./TransferCard";
import LoadingSkeletons from "./LoadingSkeletons";

const PlayerTransfers = () => {
  const {
    isLoadingSquad,
    isLoadingPlayerTransferHistory,
    playerTransferHistoryError,
  } = usePlayer();

  const { player } = useCurrentPlayerStore();

  if (isLoadingPlayerTransferHistory || isLoadingSquad)
    return <LoadingSkeletons />;

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
          .map((item, i) => {
            return (
              <TransferCard
                team={item.newClubName}
                logo={item.newClubImage}
                date={
                  // if index is less than length get date of the next transfer
                  i < player?.transferHistory?.length - 1
                    ? `${item.date.slice(7)} - ${player?.transferHistory
                        .slice()
                        .reverse()
                        [i + 1].date.slice(7)}`
                    : item.date.slice(7, item.date.length)
                }
              />
            );
          })}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
