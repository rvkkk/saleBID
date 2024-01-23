import { Box, Flex, Radio, Text, useRadio } from "@chakra-ui/react";
import { RadioButtonIcon, RadioButtonUncheckedIcon } from "../Icons";

export default function CustomRadio({ children, ...rest }) {
  const { getInputProps, getCheckboxProps } = useRadio(rest);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  let isChecked = checkbox["data-checked"] === "";

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius="12px"
        px="6"
        bg="naturalLightest"
        w="190px" h="68px"
        _checked={{bg: "othersLight"}}
        py="2"
      >
        <Flex justifyContent="space-between" h="full" alignItems="center">
          <Box>
            {isChecked ? <RadioButtonIcon /> : <RadioButtonUncheckedIcon />}
          </Box>
          <Box>{children}</Box>
        </Flex>
      </Box>
    </Box>
  );
}
