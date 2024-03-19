import { Badge, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";

interface Props {
  slides: string[];
}

const Slideshow = ({ slides }: Props) => {
  const [currentSlide, setSlide] = useState(0);

  function nextSlide() {
    if (currentSlide >= slides.length - 1) {
      setSlide(0);
    } else {
      setSlide(currentSlide + 1);
    }
  }

  useEffect(() => {
    setSlide(0);
  }, []);

  return (
    <Box>
      <Box
        gap={3}
        py={2}
        display="flex"
        alignItems="center"
        position="relative"
      >
        <Badge
          colorScheme="purple"
          p={2}
          whiteSpace="wrap"
          w="100%"
          variant="outline"
        >
          {slides[currentSlide]}
        </Badge>
        <Box>
          <FaArrowAltCircleRight fontSize="20px" onClick={nextSlide} />
        </Box>
      </Box>
    </Box>
  );
};

export default Slideshow;
