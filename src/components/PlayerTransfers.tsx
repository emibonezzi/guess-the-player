import { Box, Divider } from "@chakra-ui/react";
import usePlayerByGame from "../hooks/usePlayerByGame";
import useCurrentPlayerStore from "../state-management/current-player/store";
import LoadingSkeletons from "./LoadingSkeletons";
import TransferCard from "./TransferCard";

const PlayerTransfers = () => {
  /* const {
    isLoadingGamePlan,
    isLoadingMatchLineup,
    isLoadingPlayerTransferHistory,
    playerTransferHistoryError,
  } = usePlayerByGame(); */

  /* const player = useCurrentPlayerStore((s) => s.player);

  if (
    isLoadingPlayerTransferHistory ||
    isLoadingGamePlan ||
    isLoadingMatchLineup
  )
    return <LoadingSkeletons />; */

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Divider />
      <Box
        boxShadow="xl"
        display="flex"
        flexDirection="column"
        borderWidth="1px"
        p={5}
        borderRadius="md"
        /*         flexFlow="column wrap" */
        gap={2}
      >
        {/* {playerTransferHistoryError && (
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
                  // if index is less than length of array get date of the next transfer
                  i < player?.transferHistory!!.length - 1
                    ? `${item.date.slice(7)} - ${player
                        ?.transferHistory!!.slice()
                        .reverse()
                        [i + 1].date.slice(7)}`
                    : item.date.slice(7, item.date.length)
                }
              />
            );
          })} */}
      </Box>
      <Divider />
    </Box>
  );
};

export default PlayerTransfers;
