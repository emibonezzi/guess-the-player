import { Box } from "@chakra-ui/react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import NavBar from "./components/NavBar";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 20,
      }}
      className="d-flex flex-column gap-3 align-items-center "
    >
      <Box
        gap={1}
        mt="30px"
        flexDirection="column"
        display="flex"
        alignItems="center"
      >
        <NavBar />
        <PlayerTransfers />
        <UserInput />
      </Box>
    </motion.div>
  );
}

export default App;
