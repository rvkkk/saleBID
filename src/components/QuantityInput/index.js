import { Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";

export default function QuantityInput(props) {
  return (
    <Flex
      dir="ltr"
      alignItems="center"
      w={"max"}
      p={{base: "6px", md: "1"}}
      borderRadius="10px"
      border="1px solid transparent"
      borderColor="Lightest"
      bg={{base: "borderBg", md: "white"}}
      gap={{base: "3", md: "2"}}
    >
      <IconButton
        h={{base: "30px", md: "22px", lg: "28px"}}
        w={{base: "30px", md: "22px", lg: "28px"}}
        borderRadius="8px"
        shadow="xl"
        size="med"
        bg={{base: "primaryLight", md: "white"}}
        color={{base: "white", md: "primary"}}
        _hover={{bg: "primaryLightest"}}
        _disabled={{ base: {bg: "naturalLight", shadow: "none" }, md: {bg: "Gray30", color: "naturalDarkest", shadow: "none" }}}
        isDisabled={props.value === 1 ? true : false}
        icon={<Text> - </Text>}
        onClick={() =>
          parseInt(props.value) > 1 && props.onChange(parseInt(props.value) - 1)
        }
      />
      <Text fontSize="16px" lineHeight={{md: "20px", lg: "26px"}}>{props.value}</Text>
      <IconButton
        h={{base: "30px", md: "22px", lg: "28px"}}
        w={{base: "30px", md: "22px", lg: "28px"}}
        borderRadius="8px"
        shadow="xl"
        size="med"
        bg={{base: "primaryLight", md: "white"}}
        _hover={{bg: "primaryLightest"}}
        color={{base: "white", md: "primary"}}
        _disabled={{ base: {bg: "naturalLight", shadow: "none" }, md: {bg: "Gray30", color: "naturalDarkest", shadow: "none" }}}
        isDisabled={props.value !== props.limit ? false : true}
        icon={<Text> + </Text>}
        onClick={() =>
          parseInt(props.value) <= parseInt(props.limit) - 1 &&
          props.onChange(parseInt(props.value) + 1)
        }
      />
    </Flex>
  );
}
