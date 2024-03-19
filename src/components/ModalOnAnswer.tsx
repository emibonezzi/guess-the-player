import {
  Badge,
  Box,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import encodeUtf8 from "encode-utf8";
import { TiSocialTwitterCircular } from "react-icons/ti";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useUserHistoryStore from "../state-management/user-history/store";

const ModalOnAnswer = () => {
  const { gameOver, setGameOver } = useCurrentPlayerStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { playerGuessed, resetAll } = useUserHistoryStore();
  const { setFilterQuery } = useFilterQueryStore();

  let shareOnSocialString =
    "I guessed the following players by their transfer history! Can you beat my streak?" +
    "\n";

  const fullString = playerGuessed.map((player) => {
    shareOnSocialString = shareOnSocialString + player.name + "✅" + "\n";
  });

  return (
    <Modal isOpen={gameOver} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="80%">
        <ModalHeader>Game over! ❌ </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Thank you for playing! Here are the players you guessed correctly:
            <Box mt={4}>
              {playerGuessed.length > 0 ? (
                playerGuessed.map((player) => (
                  <Box alignItems="center" display="flex" gap={3}>
                    <Badge
                      colorScheme="purple"
                      whiteSpace="wrap"
                      w="max-content"
                      h="max-content"
                      variant="outline"
                    >
                      {player.name}
                    </Badge>
                    <Text m={0}>✅</Text>
                  </Box>
                ))
              ) : (
                <Box alignItems="center" display="flex" gap={3}>
                  <Badge
                    colorScheme="purple"
                    whiteSpace="wrap"
                    w="max-content"
                    h="max-content"
                    variant="outline"
                  >
                    No players guessed correctly!
                  </Badge>
                </Box>
              )}
            </Box>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Box display="flex" alignItems="center" fontSize="50px">
            <Link
              target="_blank"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                shareOnSocialString + "\n#GuessThePlayer"
              )}`}
            >
              <TiSocialTwitterCircular />
            </Link>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setGameOver(false);
                resetAll();
                setFilterQuery();
              }}
            >
              Play again!
            </Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalOnAnswer;
