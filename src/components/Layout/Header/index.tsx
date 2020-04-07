import React from 'react'
import { Button, Box, Flex, Link as StyledLink } from 'rebass'
import Name from '../../logo/Name'
import Logo from '../../logo/Logo'

const Header = () => {
  return (
    <Flex py={4} sx={{ flexDirection: 'column' }}>
      <Flex color="white" alignItems="center" sx={{ flexDirection: ['column', 'row'] }}>
        <Logo my={2} color="secondary" height={['90px', '30px']} />
        <Name my={2} ml="20px" color="secondary" height={['30px']} />
        <Box mx="auto" />
        <Box sx={{ display: ['none', 'block'] }}>
          <StyledLink variant="nav" href="/page-2">
            About
          </StyledLink>
          <StyledLink variant="nav" href="/page-2" ml={4}>
            Projects
          </StyledLink>
          <StyledLink variant="nav" href="/page-3" ml={4}>
            Blog
          </StyledLink>
        </Box>
      </Flex>
      <Box sx={{ display: ['block', 'none'] }}>
        <Button
          title="Toggle Menu"
          sx={{
            appearance: 'none',
            width: 32,
            height: 32,
            m: 0,
            p: 1,
            color: 'primary',
            bg: 'transparent',
            border: 0,
            ':focus': {
              outline: '2px solid'
            },
            ':hover': {
              color: 'primary'
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentcolor"
            viewBox="0 0 24 24"
            sx={{
              display: 'block',
              margin: 0
            }}
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </Button>
      </Box>
    </Flex>
  )
}

export default Header
