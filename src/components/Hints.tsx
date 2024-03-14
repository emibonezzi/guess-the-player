import {
  Box,
  Button,
  Link,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdCheckCircle, MdOutlineSos } from "react-icons/md";
import useCurrentPlayerStore from "../state-management/current-player/store";
import Hint from "./Hint";

const Hints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { player } = useCurrentPlayerStore();

  const playerPosition = player?.position;
  const playerWasCoachedBy = player?.wasCoachedBy;
  const playerPlayedWith = player?.playedWith;

  const playerHints = [
    `He played as a ${playerPosition} at least once in his career.`,
    `The player during his career was coached by ${playerWasCoachedBy}`,
    `${playerPlayedWith} was his teammate during player's career.`,
  ];

  return (
    <Box
      borderRadius="10%"
      color="red.100"
      display="flex"
      gap={2}
      alignItems="center"
    >
      <Popover>
        <PopoverTrigger>
          <Link onClick={isOpen ? onClose : onOpen}>
            <MdOutlineSos fontSize="30px" />
          </Link>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>Hints</PopoverHeader>
            <PopoverCloseButton />
            <PopoverBody display="flex" flexDirection="column" gap={2}>
              <Text>
                To help guessing the player you will receive one of these
                details:
              </Text>
              <List>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  One of positions played by
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  One of player's coaches
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  One of player's teammate
                </ListItem>
              </List>
              <Box display="flex" justifyContent="center">
                <Button w="100px" colorScheme="blue">
                  Get hint!
                </Button>
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                <Hint
                  hint={
                    playerHints[Math.floor(Math.random() * playerHints.length)]
                  }
                />
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Hints;
