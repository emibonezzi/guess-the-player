import { Badge, Grid, GridItem, Heading, Image } from "@chakra-ui/react";

interface Props {
  team: string | undefined;
  date: string | undefined;
  logo: string | undefined;
}

const TransferCard = ({ team, date, logo }: Props) => {
  return (
    <Grid
      gridTemplateAreas={`"date logo name"`}
      templateColumns={{ base: "80px 35px 100px", lg: "110px 50px 150px" }}
      gridAutoFlow="column"
      alignItems="center"
      gap={2}
    >
      <GridItem area="date">
        <Heading fontWeight={200} m={0} fontSize={{ base: "12px", lg: "15px" }}>
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
        <Badge fontSize={{ base: "11px", lg: "13px" }}>{team}</Badge>
      </GridItem>
    </Grid>
  );
};

export default TransferCard;
