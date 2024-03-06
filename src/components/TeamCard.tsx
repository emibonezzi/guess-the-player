import { Box, Image } from "@chakra-ui/react";
import { Team } from "../entities/Team";
import { Transfer } from "../entities/Transfer";

interface Props {
  type: "in" | "out";
  transfer: Transfer | undefined;
}

const TeamCard = ({ transfer, type }: Props) => {
  return (
    <div className="d-flex align-items-center flex-column gap-2">
      <Box boxSize="110px" display="flex" alignItems="center">
        <Image objectFit="scale-down" src={transfer?.teams[type].logo}></Image>
      </Box>
      <div>{transfer?.teams[type].name}</div>
      <div>{transfer?.date}</div>
    </div>
  );
};

export default TeamCard;
