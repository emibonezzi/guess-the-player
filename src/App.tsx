import { useEffect } from "react";
import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";
import useCurrentPlayerStore from "./state-management/current-player/store";
import { sampleResponsePlayer } from "./utils/sampleResponsePlayer";

function App() {
  const { player, setPlayer } = useCurrentPlayerStore();

  useEffect(() => {
    setPlayer(sampleResponsePlayer.response[0]);
  }, []);

  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
      <UserInput />
      <PlayerTransfers />
    </div>
  );
}

export default App;
