import { Badge, Box, Heading, Image } from "@chakra-ui/react";
import { Team } from "../entities/Team";

interface Props {
  team: string | null | undefined;
  date: number | null | undefined;
  logo: string | null | undefined;
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
      <Heading fontSize="20px">{date}</Heading>
    </Box>
  );
};

export default TransferCard;
