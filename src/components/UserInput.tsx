import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import useTeam from "../hooks/useTeam";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomTeamId from "../utils/getRandomTeamId";
import getRandomLeague from "../utils/getRandomLeague";
import getRandomSeason from "../utils/getRandomSeason";

const UserInput = () => {
  const { randomPlayer } = useTeam();
  const ref = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const { setFilterQuery } = useFilterQueryStore();
  const { randomLeague } = getRandomLeague();
  const { randomSeason } = getRandomSeason();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setFilterQuery({ leagueId: randomLeague, season: randomSeason });
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
      <Button display="none" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default UserInput;
