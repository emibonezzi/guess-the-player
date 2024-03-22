import { Badge, Box, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import usePlayer from "../hooks/usePlayer";
import { styleTransferHistory } from "../utils/styleTransferHistory";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { TOO_MANY_TRANSFERS_PLACEHOLDER } from "./PlayerTransfers";

interface Props {
  team: string | undefined;
  date: string | undefined;
  logo: string | undefined;
}

const TransferCard = ({ team, date, logo }: Props) => {
  const { player } = usePlayer();

  const picSize =
    styleTransferHistory(player?.data.transferHistory).length > 10
      ? "28px"
      : "40px";

  return (
    <Grid
      gridTemplateAreas={`"date logo name"`}
      templateColumns={{
        base: `70px 40px 100px`,
        lg: `110px 40px 150px`,
      }}
      gridAutoFlow="column"
      alignItems="center"
      gap={2}
    >
      <GridItem area="date">
        <Heading fontWeight={200} m={0} fontSize={{ base: "11px", lg: "15px" }}>
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
            h="40px"
            filter="drop-shadow(8px 8px 4px #0e1111)"
            objectFit="scale-down"
            src={logo}
          ></Image>
        </motion.div>
      </GridItem>
      <GridItem area="name">
        <Badge fontSize={{ base: "10px", lg: "13px" }}>{team}</Badge>
      </GridItem>
    </Grid>
  );
};

export default TransferCard;
