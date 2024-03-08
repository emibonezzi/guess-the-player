import { Box, Divider, Heading, Image, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TransferCard from "./TransferCard";

const PlayerTransfers = () => {
  const { playerClubs, playerFiltered, responseForEverySeason } = useTeam();

  if (responseForEverySeason.every((item) => item.isLoading))
    return <Spinner />;

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        <Divider />
        {playerFiltered.map((t) =>
          t.logo || t.team ? (
            <TransferCard team={t.team} date={t.date} logo={t.logo} />
          ) : null
        )}
        <Divider />
      </div>
    </>
  );
};

export default PlayerTransfers;
