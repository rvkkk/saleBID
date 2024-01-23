import React from 'react'
import {Box, Container as a} from "@chakra-ui/react"

export default function Container({children}) {
  return (
    <Box mx="auto" w="full">
        {children}
    </Box>
  )
}
