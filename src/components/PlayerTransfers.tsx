import { Box, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import usePlayer from "../hooks/usePlayer";
import { styleDate } from "../utils/styleDate";
import { styleTransferHistory } from "../utils/styleTransferHistory";
import LoadingSkeletons from "./LoadingSkeletons";
import ShowMoreTransfers from "./ShowMoreTransfers";
import TransferCard from "./TransferCard";

export const TOO_MANY_TRANSFERS_PLACEHOLDER = "[ ... ]";

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
          {styleTransferHistory(player?.data.transferHistory!!).map(
            (item: any, i: number) => {
              if (item.newClubName !== TOO_MANY_TRANSFERS_PLACEHOLDER) {
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
                        item.loan === "ist"
                          ? "loan"
                          : styleDate(
                              item,
                              i,
                              styleTransferHistory(
                                player?.data.transferHistory!!
                              )
                            )
                      }
                    />
                  </motion.div>
                );
              } else {
                return <ShowMoreTransfers />;
              }
            }
          )}
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default PlayerTransfers;
