import { Grid, GridItem, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return (
    <Grid
      gridTemplateAreas={`"date logo name"`}
      templateColumns={{
        base: "80px 32px 80px",
        lg: "80px 32px 80px",
      }}
      gridAutoFlow="column"
      alignItems="center"
      gap={2}
    >
      <GridItem area="date">
        <SkeletonText
          noOfLines={1}
          fontWeight={200}
          m={0}
          fontSize={{ base: "12px", lg: "15px" }}
        ></SkeletonText>
      </GridItem>
      <GridItem area="logo">
        <SkeletonCircle
          h="40px"
          filter="drop-shadow(8px 8px 4px #0e1111)"
        ></SkeletonCircle>
      </GridItem>
      <GridItem area="name">
        <SkeletonText
          noOfLines={1}
          fontSize={{ base: "11px", lg: "13px" }}
        ></SkeletonText>
      </GridItem>
    </Grid>
  );
};

export default LoadingSkeleton;
