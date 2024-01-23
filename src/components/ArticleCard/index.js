import { Flex, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function ArticleCard({ imageUrl, text, onClick }) {
  return (
    <Flex
      w="410px" //350
      borderRadius="16px"
      p="50px 20px"
      dir="rtl"
      h="260px" //220
      _hover={{ boxShadow: "4px 8px 53px rgba(13, 47, 153, 0.09)" }}
      gap="30px"
      bg="white"
      flexDirection="column"
      alignItems="center"
      onClick={onClick}
      cursor="pointer"
    >
      <Box h="120px">
        <Image h="120px" src={imageUrl} />
      </Box>
      <Text
        color="primary"
        fontSize="18px"
        lineHeight="22.6px"
        letterSpacing="0.02em"
        fontWeight="medium"
        style={{ direction: "rtl" }}
      >
        {text}
      </Text>
    </Flex>
  );
}
