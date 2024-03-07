import { Box, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import useTeam from "../hooks/useTeam";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomTeamId from "../utils/getRandomTeamId";

const UserInput = () => {
  const { randomPlayer } = useTeam();
  const ref = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const { setTeamId } = useFilterQueryStore();
  const { randomTeamId } = getRandomTeamId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setTeamId(randomTeamId);
        if (ref.current) {
          if (
            randomPlayer?.response[0].player?.name
              .toLowerCase()
              .split(" ")
              .includes(ref.current.value.toLowerCase())
          ) {
            toast({
              title: "Right!",
              colorScheme: "green",
            });
          } else {
            toast({
              title: "Wrong!",
              colorScheme: "red",
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
