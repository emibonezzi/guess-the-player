import { Box } from "@chakra-ui/react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box
      gap={3}
      mt="30px"
      flexDirection="column"
      display="flex"
      alignItems="center"
    >
      <NavBar />
      <PlayerTransfers />
      <UserInput />
    </Box>
  );
}

export default App;
