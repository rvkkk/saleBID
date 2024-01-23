import { Box, Image } from "@chakra-ui/react";
import React from "react";

export default function Banner() {
  return (
    <Box
      w="full"
      h={{ base: "203px", sm: "250px", md: "350px", lg: "420px" }}
    >
      <Image
        display={{ base: "none", md: "block" }}
        w="full"
        h="full"
        objectFit="cover"
        src="/assets/banner1.png"
      />
      <Image
        display={{ base: "block", md: "none" }}
        w="full"
        h="full"
        objectFit="cover"
        src="/assets/splash screen.PNG"
      />
    </Box>
  );
}
