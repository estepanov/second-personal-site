import React from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

const Container: React.FC = ({ children, sx, ...props }) => (
  <Flex
    sx={{
      ...sx,
      flexShrink: 0,
      maxWidth: 1140,
      width: '100%',
      flexDirection: 'column'
    }}
    mx="auto"
    px={4}
    {...props}
  >
    {children}
  </Flex>
)

export default Container
