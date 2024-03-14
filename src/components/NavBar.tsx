import { Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import Hints from "./Hints";
import Points from "./Points";

const NavBar = () => {
  return (
    <Box
      boxShadow="xl"
      border="1px"
      borderRadius={10}
      w="100%"
      p={3}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <FaHome fontSize="25px" />
      <Points />
      <Hints />
    </Box>
  );
};

export default NavBar;
