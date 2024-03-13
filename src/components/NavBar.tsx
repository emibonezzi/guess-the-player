import { Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineSos } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";
import Hints from "./Hints";

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
      <TiStarFullOutline fontSize="25px" />
    </Box>
  );
};

export default NavBar;
