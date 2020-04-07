import React from 'react'
import { Box, Flex, Link as StyledLink } from 'rebass'
// import Logo from '../../logo/Logo'
import ColorModeToggle from '../../ColorModeToggle'

const Header = () => {
  return (
    <Flex px={4} py={4} sx={{ flexDirection: 'column' }}>
      <Flex color="white" alignItems="center" sx={{ flexDirection: ['column', 'row'] }}>
        {/* <Logo color="secondary" height={['30px']} /> */}
        <Box mr="auto">
          <ColorModeToggle />
        </Box>
        <Box mx="auto" />
        <Box>
          <StyledLink bg="transparent" color="secondary" fontSize={4} p={1} ml={4}>
            <i className="fab fa-twitter" />
          </StyledLink>
          <StyledLink bg="transparent" color="secondary" fontSize={4} p={1} ml={4}>
            <i className="fab fa-linkedin-in" />
          </StyledLink>
          <StyledLink bg="transparent" color="secondary" fontSize={4} p={1} ml={4}>
            <i className="fab fa-angellist" />
          </StyledLink>
          <StyledLink bg="transparent" color="secondary" fontSize={4} p={1} ml={4}>
            <i className="fab fa-stack-overflow" />
          </StyledLink>
          <StyledLink bg="transparent" color="secondary" fontSize={4} p={1} ml={4}>
            <i className="fab fa-github" />
          </StyledLink>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
