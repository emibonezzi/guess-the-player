import { useEffect } from "react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import useCurrentPlayerStore from "./state-management/current-player/store";
import { sampleResponsePlayer } from "./utils/sampleResponsePlayer";
import { Box, Divider, Heading } from "@chakra-ui/react";

function App() {
  const { player, setPlayer } = useCurrentPlayerStore();

  useEffect(() => {
    setPlayer(sampleResponsePlayer.response[0]);
  }, []);

  return (
    <div className="d-flex container-sm flex-c  olumn gap-3 justify-content-center align-items-center">
      <Box display="flex" alignItems="center" gap={5}>
        <UserInput />
      </Box>
      <PlayerTransfers />
    </div>
  );
}

export default App;
