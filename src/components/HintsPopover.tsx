import {
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  useDisclosure
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdOutlineSos } from "react-icons/md";
import HintsGallery from "./HintsGallery";

const HintsPopover = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = useRef(null);

  return (
    <Popover initialFocusRef={ref}>
      <PopoverTrigger>
        <Link onClick={isOpen ? onClose : onOpen}>
          <MdOutlineSos fontSize="30px" />
        </Link>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody display="flex" flexDirection="column">
            <HintsGallery />
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
};

export default HintsPopover;
