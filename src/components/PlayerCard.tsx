import {
  Badge,
  Button,
  Grid,
  GridItem,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import useCurrentPlayerStore from "../state-management/current-player/store";
import useFilterQueryStore from "../state-management/filter-query/store";
import useSearchText from "../state-management/search-text/store";
import useUserHistoryStore from "../state-management/user-history/store";
import { useRef } from "react";

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
  const { player } = useCurrentPlayerStore();
  const toast = useToast();
  const { resetText } = useSearchText();
  const { setPlayerGuessed, setPlayerNotGuessed } = useUserHistoryStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef(null);

  return (
    <Link
      onClick={(e) => {
        if (player?.id === playerId) {
          onOpen();
          setPlayerGuessed({
            id: player.id,
            name: player.name,
          });
        } else {
          console.log(player?.id, playerId);
          onOpen();
          setPlayerNotGuessed({
            id: player?.id,
            name: player?.name,
          });
        }
        resetText();
        setFilterQuery();
        onClosePlayerSearch();
      }}
    >
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
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
