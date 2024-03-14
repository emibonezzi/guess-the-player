import { Badge, Grid, GridItem, Image, Link, useToast } from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useSearchText from "../state-management/search-text/store";
import useUserHistoryStore from "../state-management/user-history/store";

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
  const { player } = useCurrentPlayerStore();
  const toast = useToast();
  const { resetText } = useSearchText();
  const { setPlayerGuessed, setPlayerNotGuessed } = useUserHistoryStore();

  return (
    <Link
      onClick={(e) => {
        if (player?.id === playerId) {
          toast({
            title: "Correct!",
            colorScheme: "green",
          });
          setPlayerGuessed({
            id: player.id,
            name: player.name,
          });
        } else {
          console.log(player?.id, playerId);
          toast({
            title: "Stronzo!",
          });
          setPlayerNotGuessed({
            id: player?.id,
            name: player?.name,
          });
        }
        resetText();
        setFilterQuery();
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
