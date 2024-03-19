import { Box } from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import Slideshow from "./Slideshow";

const HintsGallery = () => {
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
    <Box display="flex" alignItems="center">
      <Slideshow slides={playerHints} />
    </Box>
  );
};

export default HintsGallery;
