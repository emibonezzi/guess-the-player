import {
  Box,
  Divider,
  Heading,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
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
      <Divider />
      {player?.transferHistory?.length > 8 && (
        <Box
          w="max-content"
          maxH="400px"
          display="flex"
          flexDirection="column"
          flexFlow="column wrap"
          gap={2}
        >
          <TransferCard
            team={player?.transferHistory?.slice().reverse()[0].newClubName}
            logo={player?.transferHistory?.slice().reverse()[0].newClubImage}
            date={player?.transferHistory
              ?.slice()
              .reverse()[0]
              .date.slice(
                7,
                player?.transferHistory?.slice().reverse()[0].date.length
              )}
          />
          <Heading>...</Heading>
        </Box>
      )}
      <Box
        w="max-content"
        maxH="400px"
        display="flex"
        flexDirection="column"
        flexFlow="column wrap"
        gap={2}
      >
        {playerTransferHistoryError && (
          <p>{playerTransferHistoryError.message}</p>
        )}
        {player?.transferHistory
          ?.slice()
          .reverse()
          .slice(
            player?.transferHistory.length - 8,
            player?.transferHistory.length
          )
          .map((item, i) => {
            return (
              <TransferCard
                team={item.newClubName}
                logo={item.newClubImage}
                date={
                  // if index is less than length get date of the next transfer
                  i <
                  player?.transferHistory.slice(
                    player?.transferHistory.length - 8,
                    player?.transferHistory.length
                  ).length -
                    1
                    ? `${item.date.slice(7)} - ${player?.transferHistory
                        .slice()
                        .reverse()
                        .slice(
                          player?.transferHistory.length - 8,
                          player?.transferHistory.length
                        )
                        [i + 1].date.slice(7)}`
                    : item.date.slice(7, item.date.length)
                }
              />
            );
          })}
      </Box>
      <Divider />
    </>
  );
};

export default PlayerTransfers;
