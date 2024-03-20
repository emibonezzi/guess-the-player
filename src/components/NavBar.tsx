import { Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCurrentPlayerStore from "../state-management/current-player/store";
import Points from "./Points";

const NavBar = () => {
  const navigate = useNavigate();
  const { setGameOver } = useCurrentPlayerStore();

  return (
    <Box
      boxShadow="xl"
      border="1px"
      borderRadius={10}
      w={"300px"}
      p={3}
      display="flex"
      justifyItems="center"
      justifyContent="space-between"
      alignItems="center"
    >
      <FaHome
        onClick={() => {
          setGameOver(true);
          navigate("/");
        }}
        fontSize="25px"
      />
      {/*       <Text m={0}>
        {
          allPlayersFiltered.find(
            (playerInSquad) =>
              playerInSquad?.id === player?.data.transferHistory[0].playerID
          )?.positions.first.name
        }
      </Text> */}
      <Points />
    </Box>
  );
};

export default NavBar;
