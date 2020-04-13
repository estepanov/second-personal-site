import React from 'react'
import { Box } from 'rebass'

const Container: React.FC = ({ children, image }) => (
  <Box maxWidth="1024px" width="100%" mx="auto" px={4}>
    {children}
  </Box>
)

export default Container
