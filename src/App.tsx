import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import useFilterQueryStore from "./state-management/filter-query/store";

function App() {
  return (
    <div className="d-flex container-sm flex-column gap-3 justify-content-center align-items-center">
      <Box display="flex" alignItems="center" gap={5}></Box>
      <PlayerTransfers />
    </div>
  );
}

export default App;
