import { Box, Heading } from "@chakra-ui/react";
import useUserHistoryStore from "../state-management/user-history/store";
import { TiStarFullOutline } from "react-icons/ti";

const Points = () => {
  const { playerGuessed } = useUserHistoryStore();
  return (
    <Box display="flex" gap={1} alignItems="center">
      <TiStarFullOutline fontSize="25px" />
      <Heading m={0} fontSize="25px">
        {playerGuessed.length > 0 ? playerGuessed.length * 50 : 0}
      </Heading>
    </Box>
  );
};

export default Points;
