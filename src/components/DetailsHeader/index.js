import { Box, Text } from "@chakra-ui/react";
import React from "react";

export default function DetailsHeader({ name }) {
  return (
    <Box
      borderBottom="1px solid transparent"
      borderColor="naturalLight"
      w="full"
      h="max"
      pb="2"
    >
      <Text fontSize="18px" lineHeight="20px" color="naturalDarkest" fontWeight="semibold">
        {name}
      </Text>
    </Box>
  );
}
