import { Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Hints from "./Hints";
import Points from "./Points";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      boxShadow="xl"
      border="1px"
      borderRadius={10}
      w={"300px"}
      p={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <FaHome onClick={() => navigate("/")} fontSize="25px" />
      <Points />
      <Hints />
    </Box>
  );
};

export default NavBar;
