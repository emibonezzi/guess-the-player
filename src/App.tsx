import { Box } from "@chakra-ui/react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import NavBar from "./components/NavBar";
import ModalOnAnswer from "./components/ModalOnAnswer";

function App() {
  return (
    <Box
      gap={3}
      mt="30px"
      flexDirection="column"
      display="flex"
      alignItems="center"
    >
      <ModalOnAnswer />
      <NavBar />
      <PlayerTransfers />
      <UserInput />
    </Box>
  );
}

export default App;
