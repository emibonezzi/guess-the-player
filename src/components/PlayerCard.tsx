import { Badge, Grid, GridItem, Image, Link } from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useSearchText from "../state-management/search-text/store";
import useUserHistoryStore from "../state-management/user-history/store";

interface Props {
  name: string;
  image: string;
  countryImage: string;
  onClosePlayerSearch: () => void;
  playerId: string;
}

const PlayerCard = ({
  name,
  image,
  countryImage,
  onClosePlayerSearch,
  playerId,
}: Props) => {
  const { setFilterQuery } = useFilterQueryStore();
  const { player, setGameOver } = useCurrentPlayerStore();
  const { resetText } = useSearchText();
  const { setPlayerGuessed, setPlayerNotGuessed } = useUserHistoryStore();

  return (
    <Link
      onClick={() => {
        if (player?.id === playerId) {
          setPlayerGuessed({
            id: player.id,
            name: player.name,
          });
          setFilterQuery();
        } else {
          setGameOver(true);
          setPlayerNotGuessed({
            id: player?.id,
            name: player?.name,
          });
        }
        resetText();
        onClosePlayerSearch();
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
