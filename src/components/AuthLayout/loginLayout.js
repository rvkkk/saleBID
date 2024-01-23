import { Flex,Image } from "@chakra-ui/react";
import React from "react";

export default function LoginLayout({ children }) {
  return (
    <Flex h="100vh" dir="rtl">
      <Flex h="full" w="40%" maxW="900px" bg="primary">
        <Image
          h="full"
          w="full"
          objectFit="cover"
          src="/assets/KOTEJ NEON_12 1.svg"
        />
        <Flex position="absolute" m="25px">
            <Image w="100%" src="/assets/LOGO CUBE.png" />
        </Flex>
      </Flex>
      <Flex flex="1" h="full" justifyContent="center" alignItems="center" overflowY="auto" py="20">
        {children}
      </Flex>
    </Flex>
  );
}