import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import useSearch from "../hooks/useSearch";
import useSearchText from "../state-management/search-text/store";
import LoadingSkeletons from "./LoadingSkeletons";
import PlayerCard from "./PlayerCard";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const ModalSearch = ({ isOpen, onClose, onOpen }: Props) => {
  const { text } = useSearchText();
  const { resultsCleaned, allResults } = useSearch();

  if (allResults.some((item) => item.isFetching))
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent m={5} boxSize="500px" overflowY="scroll">
          <ModalHeader>Results for "{text}"</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoadingSkeletons />;
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Back
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent m={5} boxSize="500px" overflowY="scroll">
        <ModalHeader>Results for "{text}"</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box gap={5} display="flex" flexDirection="column">
            {allResults.some((item) => item.isError) && (
              <p>Error in searching player</p>
            )}
            {resultsCleaned && resultsCleaned.length > 1
              ? resultsCleaned.map((item) => (
                  <PlayerCard
                    key={item?.id}
                    onClosePlayerSearch={onClose}
                    name={item?.playerName}
                    image={item?.playerImage}
                    countryImage={item?.nationImage}
                    playerId={item?.id}
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
  );
};

export default ModalSearch;
