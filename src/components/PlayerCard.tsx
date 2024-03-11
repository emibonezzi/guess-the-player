import { Badge, Box, Card, Image, Link, useToast } from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useUserAnswer from "../state-management/user-answer/store";
import getRandomSeason from "../utils/getRandomSeason";
import getRandomTeamId from "../utils/getRandomTeamId";

interface Props {
  name: string;
  image: string;
  countryImage: string;
  onClose: () => void;
  playerId: string;
}

const PlayerCard = ({
  name,
  image,
  countryImage,
  onClose,
  playerId,
}: Props) => {
  const { setFilterQuery } = useFilterQueryStore();
  const { randomTeamId } = getRandomTeamId();
  const { player } = useCurrentPlayerStore();
  const { randomSeason } = getRandomSeason();
  const toast = useToast();

  return (
    <Link
      onClick={(e) => {
        if (player?.id === playerId) {
          toast({
            title: "Correct!",
            colorScheme: "green",
          });
        } else {
          console.log(player?.id, playerId);
          toast({
            title: "Stronzo!",
          });
        }

        setFilterQuery({
          teamId: randomTeamId,
          season: randomSeason,
        });
        onClose();
      }}
    >
      <Card>
        <Box boxShadow="xl" display="flex" alignItems="center" gap={5}>
          <Image w="100px" h="100px" objectFit="cover" src={image} />{" "}
          <Box
            display="flex"
            gap={2}
            flexDirection="column"
            alignItems="center"
          >
            <Badge>{name}</Badge>
            <Image w="25px" h="25px" objectFit="contain" src={countryImage} />
          </Box>
        </Box>
      </Card>
    </Link>
  );
};

export default PlayerCard;
