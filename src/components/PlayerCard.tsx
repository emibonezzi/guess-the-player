import { Badge, Grid, GridItem, Image, Link, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useSearchText from "../state-management/search-text/store";
import useUserHistoryStore from "../state-management/user-history/store";

interface Props {
  name: string | undefined;
  image: string | undefined;
  countryImage: string | undefined;
  onClosePlayerSearch: () => void;
  playerId: string | undefined;
}

const PlayerCard = ({
  name,
  image,
  countryImage,
  onClosePlayerSearch,
  playerId,
}: Props) => {
  const { player } = usePlayer();
  const { setGameOver } = useCurrentPlayerStore();
  const { resetText } = useSearchText();
  const { setPlayerGuessed, setQuestionToggle } = useUserHistoryStore();
  const toast = useToast();
  const navigate = useNavigate();
  return (
    <Link
      onClick={() => {
        if (player?.data.transferHistory[0].playerID === playerId) {
          setPlayerGuessed({
            id: player?.data.transferHistory[0].playerID,
            name: player?.data.transferHistory[0].playerName,
          });
          toast({
            title: "Correct!",
            description: "Player guessed!",
            status: "success",
            duration: 1500,
          });
          setQuestionToggle();
        } else {
          toast({
            title: "Oh no!",
            description: "Wrong player 😔",
            status: "error",
            duration: 1500,
          });
          setGameOver(true);
          navigate("/");
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
