import { Divider, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TransferCard from "./TeamCard";

const PlayerTransfers = () => {
  const { isLoadingPlayer, playerTransfers } = useTeam();

  if (isLoadingPlayer) return <Spinner />;

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {playerTransfers
          ?.slice()
          .reverse()
          .map((t, i) =>
            i === 0 ? (
              <TransferCard
                from={t.teams.out}
                to={t.teams.in}
                date={t.date}
                firstTransfer={true}
              />
            ) : (
              <TransferCard
                from={t.teams.out}
                to={t.teams.in}
                date={t.date}
                firstTransfer={false}
              />
            )
          )}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
