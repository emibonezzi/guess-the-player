import { Team } from "../entities/Team";
import { Transfer } from "../entities/Transfer";

interface Props {
  transfer: Transfer;
}

const TeamCard = ({ transfer }: Props) => {
  return (
    <div className="d-flex align-items-center  flex-column gap-2">
      <img src={transfer.teams.in.logo}></img>
      <div>{transfer.teams.in.name}</div>
      <div>{new Date(transfer.date).getFullYear()}</div>
    </div>
  );
};

export default TeamCard;
