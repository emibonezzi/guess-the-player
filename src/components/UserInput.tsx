import { Box, Divider, Input } from "@chakra-ui/react";
import { useRef } from "react";

const UserInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <Box w="sm" mb={4}>
        <Input
          ref={ref}
          fontWeight="700"
          h="150px"
          fontSize="70px"
          textAlign="center"
        ></Input>
      </Box>
    </form>
  );
};

export default UserInput;
