import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import useSearch from "../hooks/useSearch";
import useUserAnswer from "../state-management/search-text/store";
import PlayerCard from "./PlayerCard";

const UserInput = () => {
  const { text, setSearchText } = useUserAnswer();
  const { results, isLoadingResults, searchError } = useSearch(text);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            if (ref.current.value) {
              onOpen();
              setSearchText(ref.current.value);
            }
          }
          e.target.reset();
        }}
      >
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent m={5} boxSize="500px" overflowY="scroll">
            <ModalHeader>Results for "{text}"</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box gap={5} display="flex" flexDirection="column">
                {isLoadingResults && <Spinner />}
                {searchError && <p>Error in searching player</p>}
                {results && results.count.players > 1
                  ? results?.players.map((item) => (
                      <PlayerCard
                        key={item.id}
                        onClosePlayerSearch={onClose}
                        name={item.playerName}
                        image={item.playerImage}
                        countryImage={item.nationImage}
                        playerId={item.id}
                      />
                    ))
                  : null}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Back
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={{ base: "200px", lg: "450px" }}
        >
          <Box>
            <InputGroup fontSize={{ base: "15px", lg: "50px" }}>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input
                w="250px"
                ref={ref}
                placeholder="Type a player name..."
                fontWeight="700"
              ></Input>
            </InputGroup>
          </Box>
        </Box>
      </form>

      {/* <p>{player?.name}</p> */}
    </Box>
  );
};

export default UserInput;
