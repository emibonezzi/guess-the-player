import {
  Badge,
  Box,
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaSquareXTwitter } from "react-icons/fa6";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useUserHistoryStore from "../state-management/user-history/store";

const ModalOnAnswer = () => {
  const { gameOver, setGameOver } = useCurrentPlayerStore();
  const { onClose } = useDisclosure();
  const { playerGuessed, resetAll } = useUserHistoryStore();

  let shareOnSocialString =
    "I guessed the following players by their transfer history! Can you beat my streak?\n\n";

  playerGuessed.map((player) => {
    shareOnSocialString = shareOnSocialString + player.name + "✅" + "\n";
  });

  return (
    <Modal isOpen={gameOver} onClose={onClose}>
      <ModalOverlay />
      <ModalContent w="80%">
        <ModalHeader>Game over! ❌ </ModalHeader>
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
          <Text>
            This game is currently in beta. As a new developer, your feedback is
            invaluable! Please share your experience on X and send any feedback
            to{" "}
            <Link
              isExternal
              href="https://twitter.com/letemicode"
              color="teal.500"
            >
              @letemicode
            </Link>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={4}
          >
            <Button fontSize="30px" colorScheme="blue">
              <Link
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  shareOnSocialString + "\n#GuessThePlayer\n\n"
                )}&via=letemicode&url=https://guess-the-player-nine.vercel.app`}
              >
                <FaSquareXTwitter />
              </Link>
            </Button>

            <Button
              colorScheme="blue"
              onClick={() => {
                setGameOver(false);
                resetAll();
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
