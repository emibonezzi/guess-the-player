import { Box } from "@chakra-ui/react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className="d-flex container-sm flex-column gap-3 justify-content-center align-items-center">
      <Box
        mt="100px"
        flexDirection="column"
        display="flex"
        alignItems="center"
        gap={5}
      >
        <UserInput />
        <PlayerTransfers />
      </Box>
    </div>
  );
}

export default App;
