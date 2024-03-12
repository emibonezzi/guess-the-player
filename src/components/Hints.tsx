import {
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

const Hints = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <PopoverBody>
              <Text>
                To help guessing the player you will receive one of these
                details:
              </Text>
              <List>
                <ListItem>
                  {" "}
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Age
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Nationality
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Market value
                </ListItem>
                <ListItem>
                  <ListIcon as={MdCheckCircle} color="green.500" />
                  Shirt number
                </ListItem>
              </List>
              <Button colorScheme="blue">Get hint!</Button>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </Box>
  );
};

export default Hints;
