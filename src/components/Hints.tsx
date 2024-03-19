import {
  Box,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import HintsPopover from "./HintsPopover";
import { MdOutlineSos } from "react-icons/md";
import HintsGallery from "./HintsGallery";
import React, { useRef } from "react";

const Hints = () => {
  return (
    <Box borderRadius="10%" color="red.100" display="flex" alignItems="center">
      <HintsPopover />
    </Box>
  );
};

export default Hints;
