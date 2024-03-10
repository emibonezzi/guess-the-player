import { Box, Button, Input, useToast } from "@chakra-ui/react";
import { useRef } from "react";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomSeason from "../utils/getRandomSeason";
import getRandomTeamId from "../utils/getRandomTeamId";
import useCurrentPlayerStore from "../state-management/current-player/store";

const UserInput = () => {
  const { player } = useCurrentPlayerStore();
  const { setFilterQuery } = useFilterQueryStore();
  const ref = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const { randomTeamId } = getRandomTeamId();
  const { randomSeason } = getRandomSeason();

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (ref.current) {
            if (
              player?.name?.toLowerCase() === ref.current.value.toLowerCase()
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
            setFilterQuery({ teamId: randomTeamId, season: randomSeason });
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
      <p>{player?.name}</p>
    </Box>
  );
};

export default UserInput;
