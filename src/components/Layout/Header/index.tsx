import React from 'react'
import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Button, Box, Flex } from 'theme-ui'
import NavLink from '../../elements/NavLink'
import Name from '../../logo/Name'
import Logo from '../../logo/Logo'
import Container from '../Container'
import ColorModeToggle from '../../ColorModeToggle'

const Header = () => {
  // <Box sx={{ backgroundImage: 'linear-gradient(to bottom right, #61BBFD, #4C80BA)' }}>
  return (
    <Box>
      <Container>
        <Flex py={4} sx={{ flexDirection: 'column' }}>
          <Flex alignItems="center" sx={{ flexDirection: ['column', 'row'] }}>
            <Link to="/">
              <Logo my={2} color="gray" height={['90px', '30px']} />
              <Name my={2} ml="20px" color="gray" height={['30px']} />
            </Link>
            <Box mx="auto" />
            <Flex sx={{ display: ['none', 'flex'] }} flexDirection="row">
              <Box ml={4} my="auto">
                <NavLink to="/projects">Projects</NavLink>
              </Box>
              <Box ml={4} my="auto">
                <NavLink to="/blog">Blog</NavLink>
              </Box>
              <Box ml={4} my="auto">
                <ColorModeToggle />
              </Box>
            </Flex>
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
      </Container>
    </Box>
  )
}

export default Header
