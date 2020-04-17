import React from 'react'
import { Flex } from 'rebass'

const Container: React.FC = ({ children, ...props }) => (
  <Flex maxWidth="1024px" width="100%" mx="auto" px={4} flexDirection="column" {...props}>
    {children}
  </Flex>
)

export default Container
