import { Box, Divider, Heading, Image, Spinner } from "@chakra-ui/react";
import useTeam from "../hooks/useTeam";
import TransferCard from "./TransferCard";

const PlayerTransfers = () => {
  const {
    isLoadingPlayer,
    playerTransfers,
    playerClubs,
    responseForEverySeason,
  } = useTeam();

  if (isLoadingPlayer && responseForEverySeason.some((item) => item.isLoading))
    return <Spinner />;

  return (
    <>
      <div className="d-flex gap-2 flex-wrap">
        {playerClubs.map((item) => (
          <Box>
            <Image w="100px" src={item.logo} />
            <Heading fontSize="20px">{item.date}</Heading>
          </Box>
        ))}
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
