import { Box, Heading } from "@chakra-ui/react";

interface Props {
  hint: string | undefined;
}

const Hint = ({ hint }: Props) => {
  return (
    <Box>
      <Heading fontSize="20px">{hint}</Heading>
    </Box>
  );
};

export default Hint;
