import { Box } from "@chakra-ui/react";
import BarLoader from "react-spinners/ClipLoader";

const LoadingSkeletons = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Box
        boxShadow="xl"
        maxH="400px"
        display="flex"
        flexDirection="column"
        borderWidth="1px"
        p={5}
        borderRadius="md"
        gap={2}
      >
        <BarLoader color="grey.700" />
        {/* <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton /> */}
      </Box>
    </Box>
  );
};

export default LoadingSkeletons;
