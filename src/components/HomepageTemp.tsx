import { Box, FormControl, Heading, Image } from "@chakra-ui/react";
import "@fontsource-variable/inter-tight";
import "@fontsource-variable/noto-sans-armenian";
import "@fontsource/protest-strike";
import { motion } from "framer-motion";
import { FaQuestion } from "react-icons/fa";
import logo from "../assets/logoGTP.png";

const HomepageTemp = () => {
  return (
    <Box
      mt="20px"
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
          <Heading>
            Oops. This project is paused for lack of funds. <br /> <br />{" "}
            #BrokeDevAlert
          </Heading>
        </FormControl>
      </motion.div>
    </Box>
  );
};

export default HomepageTemp;
