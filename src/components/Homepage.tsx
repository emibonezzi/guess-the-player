import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Select,
} from "@chakra-ui/react";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/noto-sans-armenian";
import "@fontsource/protest-strike";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logoGTP.png";
import usePlayer from "../hooks/usePlayer";

const Homepage = () => {
  const navigate = useNavigate();
  const { refetchPlayer } = usePlayer();

  return (
    <Box
      mt="60px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 20,
        }}
        className="d-flex flex-column gap-3 align-items-center"
      >
        <Box w="250px" position="relative" borderRadius={50} p={3}>
          <Box
            fontSize="40px"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%);"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <FaQuestion />
            </motion.div>
          </Box>
          <Image src={logo} />
        </Box>

        <FormControl w="280px">
          <FormLabel>League: </FormLabel>
          <Select>
            <option value=""></option>
          </Select>
          <FormHelperText>
            Up for a challenge? Select all leagues.
          </FormHelperText>
        </FormControl>
        <FormControl w="280px">
          <FormLabel>Level: </FormLabel>
          <Select>
            <option value=""></option>
          </Select>
          <FormHelperText>
            The extreme mode will unleash obscure players.
          </FormHelperText>
        </FormControl>
        <Button
          mt={3}
          onClick={() => {
            refetchPlayer();
            navigate("/game");
          }}
          w="100px"
        >
          Play now
        </Button>
      </motion.div>
    </Box>
  );
};

export default Homepage;
