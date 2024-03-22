import {
  Box,
  Button,
  Divider,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import usePlayer from "../hooks/usePlayer";
import { styleDate } from "../utils/styleDate";
import TransferCardPopover from "./TransferCardPopover";

const ShowMoreTransfers = () => {
  const { player } = usePlayer();

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      my={1}
      w="100%"
    >
      <Divider />
      <Popover>
        <PopoverTrigger>
          <Button w="150px" size="xs" variant="outline" colorScheme="yellow">
            Show all {player?.data.transferHistory.length} transfers
          </Button>
        </PopoverTrigger>
        <PopoverContent w="98%">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {player?.data.transferHistory
              .slice()
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
                    <TransferCardPopover
                      teamId={item.newClubID}
                      team={item.newClubName}
                      logo={item.newClubImage}
                      date={styleDate(
                        item,
                        i,
                        player?.data.transferHistory.slice().reverse()
                      )}
                    />
                  </motion.div>
                );
              })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
      <Divider />
    </Box>
  );
};

export default ShowMoreTransfers;
