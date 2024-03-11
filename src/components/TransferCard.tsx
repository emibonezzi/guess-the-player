import { Badge, Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { Team } from "../entities/APIFootball/Team";

interface Props {
  team: string | undefined;
  date: string | undefined;
  logo: string | undefined;
}

const TransferCard = ({ team, date, logo }: Props) => {
  return (
    <Grid
      gridTemplateAreas={`"date logo name"`}
      templateColumns="minmax(70px, auto) 30px 150px"
      gridAutoFlow="column"
      alignItems="center"
      gap={2}
    >
      <GridItem area="date">
        <Heading m={0} fontSize="15px">
          {date}
        </Heading>
      </GridItem>
      <GridItem area="logo">
        <Image
          h="40px"
          filter="drop-shadow(8px 8px 4px #0e1111)"
          objectFit="scale-down"
          src={logo}
        ></Image>
      </GridItem>
      <GridItem area="name">
        <Badge>{team}</Badge>
      </GridItem>
    </Grid>
  );
};

export default TransferCard;