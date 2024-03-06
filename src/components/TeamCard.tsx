import { Team } from "../entities/Team";
import { Transfer } from "../entities/Transfer";

interface Props {
  type: "in" | "out";
  transfer: Transfer | undefined;
}

const TeamCard = ({ transfer, type }: Props) => {
  return (
    <div className="d-flex align-items-center  flex-column gap-2">
      <img src={transfer?.teams[type].logo}></img>
      <div>{transfer?.teams[type].name}</div>
      <div>{transfer?.date}</div>
    </div>
  );
};

export default TeamCard;
