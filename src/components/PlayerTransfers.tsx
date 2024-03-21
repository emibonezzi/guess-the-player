import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import usePlayer from "../hooks/usePlayer";
import LoadingSkeletons from "./LoadingSkeletons";
import TransferCard from "./TransferCard";
import { useEffect } from "react";

const PlayerTransfers = () => {
  const { player, isFetching, allData } = usePlayer();

  if (isFetching || allData.some((item) => item.isFetching))
    return <LoadingSkeletons />;

  return (
    <>
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
          {player?.data.transferHistory
            ?.slice()
            .reverse()
            .map((item, i) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                >
                  <TransferCard
                    team={item.newClubName}
                    logo={item.newClubImage}
                    date={
                      // if index is less than length of array get date of the next transfer
                      i < player.data.transferHistory!!.length - 1
                        ? `${item.date.slice(7)} - ${player?.data
                            .transferHistory!!.slice()
                            .reverse()
                            [i + 1].date.slice(7)}`
                        : `${item.date.slice(7, item.date.length)} -`
                    }
                  />
                </motion.div>
              );
            })}
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default PlayerTransfers;
