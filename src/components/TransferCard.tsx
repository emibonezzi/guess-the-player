import { Badge, Box, Heading, Image } from "@chakra-ui/react";
import { Team } from "../entities/APIFootball/Team";

interface Props {
  team: string | undefined;
  date: string | undefined;
  logo: string | undefined;
}

const TransferCard = ({ team, date, logo }: Props) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
      <Box
        boxSize="110px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          h="110px"
          filter="drop-shadow(8px 8px 4px #0e1111)"
          objectFit="scale-down"
          src={logo}
        ></Image>
      </Box>
      <Badge>{team}</Badge>
      <Heading fontSize="15px">{date}</Heading>
    </Box>
  );
};

export default TransferCard;
