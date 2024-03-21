import { Box, Image, Text } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useCurrentPlayerStore from "../state-management/current-player/store";
import Points from "./Points";
import { motion } from "framer-motion";

const NavBar = () => {
  const navigate = useNavigate();
  const { setGameOver, nationality, position } = useCurrentPlayerStore();

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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Box display="flex" gap={2} alignItems="center">
          <Image objectFit="contain" src={nationality}></Image>
          <Text m={0}>{position}</Text>
        </Box>
      </motion.div>
      <Points />
    </Box>
  );
};

export default NavBar;
