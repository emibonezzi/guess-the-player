import { Box, Divider, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import useCurrentPlayerStore from "../state-management/current-player/store";

const UserInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { player } = useCurrentPlayerStore();
  const toast = useToast();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          if (
            player?.player.name
              .toLowerCase()
              .split(" ")
              .includes(ref.current.value.toLowerCase())
          ) {
            toast({
              title: "Right!",
            });
          }
        }
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
