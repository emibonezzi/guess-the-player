import { Badge, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { teams } from "../data/teamsAndLeagues";

interface Props {
  teamId: string;
  team: string | undefined;
  date: string | undefined;
  logo: string | undefined;
}

const TransferCardPopover = ({ teamId, team, date, logo }: Props) => {
  return (
    <Grid
      gridTemplateAreas={`"date logo name"`}
      templateColumns={{
        base: `70px 20px 100px`,
        lg: `110px 20px 150px`,
      }}
      gridAutoFlow="column"
      alignItems="center"
      gap={2}
    >
      <GridItem area="date">
        <Heading fontWeight={200} m={0} fontSize={{ base: "10px", lg: "15px" }}>
          {date}
        </Heading>
      </GridItem>
      <GridItem area="logo">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 20,
          }}
        >
          <Image
            h="10px"
            filter="drop-shadow(8px 8px 4px #0e1111)"
            objectFit="scale-down"
            src={logo}
          ></Image>
        </motion.div>
      </GridItem>
      <GridItem area="name">
        <Badge
          colorScheme={teams.includes(teamId) ? "yellow" : "gray"}
          fontSize={{ base: "8px", lg: "13px" }}
        >
          {team}
        </Badge>
      </GridItem>
    </Grid>
  );
};

export default TransferCardPopover;
