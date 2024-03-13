import {
  Badge,
  Box,
  Button,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { MdCheckCircle, MdOutlineSos } from "react-icons/md";
import useCurrentTeamStore from "../state-management/current-team/store";
import useCurrentPlayerStore from "../state-management/current-player/store";

const Hints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { squad } = useCurrentTeamStore();
  const { player } = useCurrentPlayerStore();

  const playerDOBinMS =
    squad.find((item) => item.id === player?.id)?.dateOfBirth * 1000;
  const playerAge =
    new Date(Date.now()).getFullYear() - new Date(playerDOBinMS).getFullYear();
  const playerNationality = squad.find((item) => item.id === player?.id)
    ?.nationalities[0].name;
  const playerMarketValue = squad.find((item) => item.id === player?.id)
    ?.marketValue.value;
  const playerPosition = squad.find((item) => item.id === player?.id)?.positions
    .first.group;

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
          <Link onClick={onOpen}>
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
                  {" "}
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Current age
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Nationality
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Position
                </ListItem>
              </List>
              <Box display="flex" justifyContent="center">
                <Button w="100px" colorScheme="blue">
                  Get hint!
                </Button>
              </Box>

              <Box display="flex" flexDirection="column" gap={2}>
                <Heading>{playerAge}</Heading>
                <Heading>{playerNationality}</Heading>
                <Heading>{playerPosition}</Heading>
              </Box>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Hints;
