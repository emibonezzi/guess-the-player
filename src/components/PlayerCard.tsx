import {
  Badge,
  Box,
  Card,
  Grid,
  GridItem,
  Image,
  Link,
  useToast,
} from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import getRandomSeason from "../utils/getRandomSeason";
import getRandomTeamId from "../utils/getRandomTeamId";
import useSearchText from "../state-management/search-text/store";

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
  const { resetText } = useSearchText();

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
        resetText();
        setFilterQuery({
          teamId: randomTeamId,
          season: randomSeason,
        });
        onClose();
      }}
    >
      <Grid
        boxShadow="xl"
        p={5}
        gridTemplateAreas={`"image playerInfo"`}
        templateColumns="50% 50%"
      >
        <GridItem area="image">
          <Image borderRadius="10px" h="100px" objectFit="cover" src={image} />
        </GridItem>
        <GridItem
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={2}
          area="playerInfo"
        >
          <Badge w={"max-content"} fontSize={{ base: "10px", lg: "13px" }}>
            {name}
          </Badge>
          <Image w="15px" h="15px" objectFit="contain" src={countryImage} />
        </GridItem>
      </Grid>
    </Link>
  );
};

export default PlayerCard;
