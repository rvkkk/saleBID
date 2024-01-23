import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  IconButton as ChakraIconButton,
  Box,
} from "@chakra-ui/react";
import React from "react";

export default function IconButton(props) {
  if (props.popOverText) {
    return (
      <Box position="relative">
        <Popover placement="top" trigger="hover">
          <PopoverTrigger>
            <IButton {...props} />
          </PopoverTrigger>
          <PopoverContent bg="primary" borderRadius="xl" border="none" w="max">
            <PopoverArrow bg="primary" />
            <PopoverBody textColor="white" w="max">
              {props.popOverText}
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Box>
    );
  }

  return <IButton {...props} />;
}

const IButton = (props) => {
  return (
    <ChakraIconButton
      border="2px solid transparent"
      bg="othersLight"
      borderColor={props.active ? "primary" : "transparent"}
      color="primary"
      {...props}
    />
  );
};
