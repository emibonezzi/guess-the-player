import { Box } from "@chakra-ui/react";
import HintsPopover from "./HintsPopover";

const Hints = () => {
  return (
    <Box borderRadius="10%" color="red.100" display="flex" alignItems="center">
      <HintsPopover />
    </Box>
  );
};

export default Hints;
