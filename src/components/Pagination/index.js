import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Pagination(props) {
  let amount = 1;
  let opositeAmount = 6;
  return (
    <Box w="420px" h="32px">
      <Flex gap="2" fontSize="14px" justifyContent="center" alignItems="center">
        <PaginationTextButton onClick={() => props.onBack()}>
          הקודם
        </PaginationTextButton>
        {Pagination &&
          [...Array(props.pages)].map((_, i) => (
            <>{}
              {props.currentPage === i + 1 ? (
                <PaginationButton
                  bg="primaryLightest"
                  color="primaryLight"
                  borderColor="transparent"
                  onClick={() => props.onPageChange(i + 1)}
                >
                  {i + 1}
                </PaginationButton>
              ) : props.currentPage <= i + 1 && amount++ < 7 ? (
                <PaginationButton onClick={() => props.onPageChange(i + 1)}>
                  {i + 1}
                </PaginationButton>
              ) : props.currentPage + 7 >= props.pages && props.currentPage - opositeAmount  === i && opositeAmount-- ? (
                <PaginationButton onClick={() => props.onPageChange(i + 1)}>
                  {i + 1}
                </PaginationButton>
              ) : props.pages === i + 1 ? (
                <PaginationButton onClick={() => props.onPageChange(i + 1)}>
                  {i + 1}
                </PaginationButton>
              ) : <></>
              }
            </>
          ))}
        <PaginationTextButton onClick={() => props.onForward()}>
          הבא
        </PaginationTextButton>
      </Flex>
    </Box>
  );
}

const PaginationButton = (props) => {
  return (
    <Button
      w="32px"
      h="32px"
      bg="transparent"
      color="naturalDark"
      _hover={{
        color: "primaryLight",
        bg: "primaryLightest",
        borderColor: "transparent",
      }}
      borderRadius="8px"
      border="1px solid transparent"
      borderColor="Gray30"
      {...props}
    />
  );
};

const PaginationTextButton = (props) => {
  return (
    <Text
      fontSize="14px"
      color="naturalDark"
      _hover={{ color: "primary" }}
      {...props}
    />
  );
};
