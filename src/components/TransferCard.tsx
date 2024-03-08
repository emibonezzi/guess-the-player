import { Badge, Box, Heading, Image } from "@chakra-ui/react";
import { Team } from "../entities/Team";

interface Props {
  from: Team | null;
  to: Team | null;
  date: string;
  firstTransfer: boolean;
}

const TransferCard = ({ from, to, date, firstTransfer }: Props) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      {firstTransfer ? (
        <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
          <Box boxSize="110px" display="flex" alignItems="center">
            <Image
              h="110px"
              filter="drop-shadow(8px 8px 4px #0e1111)"
              objectFit="scale-down"
              src={from?.logo}
            ></Image>
          </Box>
          <Badge>{from?.name}</Badge>
          <Heading fontSize="20px">{new Date(date).getFullYear()}</Heading>
        </Box>
      ) : null}
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
            src={to?.logo}
          ></Image>
        </Box>
        <Badge>{to?.name}</Badge>
        <Heading fontSize="20px">{new Date(date).getFullYear()}</Heading>
      </Box>
    </Box>
  );
};

export default TransferCard;
