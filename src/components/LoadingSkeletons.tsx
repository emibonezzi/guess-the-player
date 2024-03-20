import { Box, Divider, Heading } from "@chakra-ui/react";
import { MagnifyingGlass } from "react-loader-spinner";
const LoadingSkeletons = () => {
  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Divider />
      <Box
        boxShadow="xl"
        w="100%"
        h="400px"
        display="flex"/*  */
        flexDirection="column"
        borderWidth="1px"
        alignItems="center"
        justifyContent="center"
        p={5} /*  */
        borderRadius="md"
        gap={2}
      >
        <MagnifyingGlass glassColor="grey" color="white" />
        <Heading fontSize="20px">Looking for players...</Heading>
        {/* <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton /> */}
      </Box>
      <Divider />
    </Box>
  );
};

export default LoadingSkeletons;
