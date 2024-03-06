import { Badge, Box, Heading, Image } from "@chakra-ui/react";
import { Transfer } from "../entities/Transfer";

interface Props {
  type: "in" | "out";
  transfer: Transfer | undefined;
}

const TeamCard = ({ transfer, type }: Props) => {
  return (
    <Box display="flex" alignItems="center" flexDirection="column" gap={2}>
      <Box boxSize="110px" display="flex" alignItems="center">
        <Image
          filter="drop-shadow(8px 8px 4px #0e1111)"
          objectFit="scale-down"
          src={transfer?.teams[type].logo}
        ></Image>
      </Box>
      <Badge>{transfer?.teams[type].name}</Badge>
      <div>
        <Heading fontSize="20px">
          {transfer?.date ? new Date(transfer.date).getFullYear() : ""}
        </Heading>
      </div>
    </Box>
  );
};

export default TeamCard;
