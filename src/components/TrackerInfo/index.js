import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function TrackerInfo({ children, title, icon }) {
  let Icon = () => icon;
  return (
    <Flex gap="2">
      {icon && <Icon />}
      <Flex flexDir="column" gap="4">
        <Text fontWeight="500">{title}</Text>
        <Box>{children}</Box>
      </Flex>
    </Flex>
  );
}
