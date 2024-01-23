import { TagCloseButton, TagLabel, Tag as ChakraTag, Flex} from "@chakra-ui/react";
import React from "react";

export default function Tag({closeTag, title}) {
  return (
    <ChakraTag
      p="1"
      gap="1"
      border="1px solid transparent"
      borderColor="naturalLight"
      bg="transparent"
      borderRadius="full"
      px="8px"
      pr="1px"
    >
      <TagCloseButton color="black" onClick={() => closeTag()}/>
      <TagLabel color="naturalDarkest"> {title} </TagLabel>
    </ChakraTag>
  );
}

export const Tags = ({children}) => {
    return <Flex flexWrap="wrap" gap="2">
        {children}
    </Flex>
}