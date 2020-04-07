import React from 'react'
import { Box } from 'rebass'

const Container: React.FC = ({ children }) => (
  <Box maxWidth="1024px" width="100%" mx="auto">
    {children}
  </Box>
)

export default Container
