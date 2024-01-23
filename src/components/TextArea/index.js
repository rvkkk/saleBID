import React from 'react'
import PropTypes from "prop-types";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Flex,
    Text,
    Textarea as ChakraTextArea,
  } from "@chakra-ui/react";
import { WarningIcon } from '@chakra-ui/icons';

export default function TextArea(props) {
  return (
    <FormControl
      isInvalid={props.isInvalid}
      isRequired={props.required}
      isDisabled={props.disabled}
    >
      <Flex justifyContent="space-between" alignItems="center">

        <FormLabel fontSize="14px" letterSpacing="0.005em"
          lineHeight="18px" fontWeight={{base: "normal", md: "medium"}}>{props.label}</FormLabel>

        {props.withCounter && <Text color='naturalDark' fontSize="14px">
          0/40
        </Text>}
        {props.desc && <Text textColor="primary">{props.desc}</Text>}
      </Flex>

      <ChakraTextArea
          size="lg"
          h={{base: "90px", md: "110px"}}
          bg={{base: "white", md: props.light ? "inputBg" : "white"}} //inputbg
          textColor={props.isInvalid ? "otherError" : "black"}
          _placeholder={{ color: "naturalDark" }}
          borderRadius={{base: "12px", md: "8px"}}
          borderColor={{base: props.light ? "naturalLight" : "bright", md: props.light ? "transparent" : "bright"}}
          _focus={
            !props.isInvalid
              ? {
                  _placeholder: { color: "black" },
                  border: "1px solid primary inset", //
                  boxShadow: "0 0 0 3px #E8F0FF ", //
                  _hover: {border: "1px solid primary inset"}
                }
              : {
                  border: "1px solid otherError inset", // מסגרת חיצונית
                  boxShadow: "0 0 0 3px threeLight", // מסגרת פנימית (shadow)
                  _hover: {border: "1px solid primary inset"}
                }
          }
          _hover={{ border: "2px solid #E8F0FF"}}
         
          {...props}
          overflow="hidden"
        />
      {props.hint && <FormHelperText>{props.hint}</FormHelperText>}
      {props.isInvalidMessage && <FormErrorMessage display="flex" alignItems="center" gap="1">
        <WarningIcon /> {props.isInvalidMessage}
      </FormErrorMessage>}
    </FormControl>
  )
}


TextArea.propTypes = {
    isInvalid: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    hint: PropTypes.string,
    isInvalidMessage: PropTypes.string,
    label: PropTypes.string,
    desc: PropTypes.string,
    valid: PropTypes.bool,
    light: PropTypes.bool,
    withCounter: PropTypes.bool
  };