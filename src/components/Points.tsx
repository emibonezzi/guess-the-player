import { Box, Heading } from "@chakra-ui/react";
import { TiStarFullOutline } from "react-icons/ti";
import useUserHistoryStore from "../state-management/user-history/store";

const Points = () => {
  const { playerGuessed } = useUserHistoryStore();
  return (
    <Box color="yellow.200" display="flex" gap={1} alignItems="center">
      <TiStarFullOutline fontSize="25px" />
      <Heading m={0} p={0} fontSize="18px">
        {playerGuessed.length > 0 ? playerGuessed.length * 50 : 0}
      </Heading>
    </Box>
  );
};

export default Points;
