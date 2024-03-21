import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import ModalSearch from "./ModalSearch";
import useSearchText from "../state-management/search-text/store";
import useSearch from "../hooks/useSearch";

const UserInput = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setSearchText } = useSearchText();
  const { allResults } = useSearch();
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box
      mb={10}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap={5}
    >
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          if (ref.current) {
            if (ref.current.value) {
              onOpen();
              setSearchText(ref.current.value);
            }
          }
          e.currentTarget.reset();
        }}
      >
        <ModalSearch isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          w={{ base: "200px", lg: "450px" }}
        >
          <Box>
            <InputGroup fontSize={{ base: "15px", lg: "50px" }}>
              <InputLeftElement>
                <FaSearch />
              </InputLeftElement>
              <Input
                w="250px"
                ref={ref}
                placeholder="Guess the player..."
                fontWeight="700"
              ></Input>
            </InputGroup>
          </Box>
        </Box>
      </form>

      {/* <p>{player?.name}</p> */}
    </Box>
  );
};

export default UserInput;
