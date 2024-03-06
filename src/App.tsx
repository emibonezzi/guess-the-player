import "./App.css";
import PlayerTransfers from "./components/PlayerTransfers";
import UserInput from "./components/UserInput";

function App() {
  return (
    <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
      <UserInput />
      <PlayerTransfers />
    </div>
  );
}

export default App;
