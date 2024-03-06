import { Box, Spinner } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import useTeam from "./hooks/useTeam";
import useCurrentPlayerStore from "./state-management/current-player/store";

function App() {
  const { allTransfersByTeam, randomPlayer, isLoadingPlayer } = useTeam();
  const { setPlayer } = useCurrentPlayerStore();

  useEffect(() => {
    setPlayer(randomPlayer?.response[0]);
  }, [randomPlayer]);

  if (isLoadingPlayer) return <Spinner />;

  return (
    <div className="d-flex container-sm flex-column gap-3 justify-content-center align-items-center">
      <Box display="flex" alignItems="center" gap={5}>
        <UserInput />
      </Box>
      <PlayerTransfers />
    </div>
  );
}

export default App;
