import { Box, Divider, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const LoadingSkeletons = () => {
  return (
    <div className="d-flex gap-2 flex-wrap">
      <Divider />
      <Box>
        <SkeletonCircle size="100px" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
      <Box>
        <SkeletonCircle size="100px" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
      <Box>
        <SkeletonCircle size="100px" />
        <SkeletonText mt="4" noOfLines={2} spacing="4" skeletonHeight="2" />
      </Box>
      <Divider />
    </div>
  );
};

export default LoadingSkeletons;
