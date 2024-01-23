import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowLeftIcon } from '../Icons'

export default function FaqQuestion({title, desc}) {
  return (
    <Flex w="full" alignItems="center" justifyContent="space-between" padding="20px 30px" h="89px" _hover={{borderColor: "primary"}} border="1px solid transparent" borderColor="naturalLight" borderRadius="12px">
    <Box>
      <Text color="naturalBlack" fontWeight="700" fontSize="18px" lineHeight="24px" letterSpacing="-0.015em">
       {title}
      </Text>
      <Text color="naturalBlack" fontSize="14px" letterSpacing="-0.015em" lineHeight="24px">
       {desc}
      </Text>
    </Box>

    <Box>
      <ArrowLeftIcon fill="#0738D2" />
    </Box>
  </Flex>
  )
}
