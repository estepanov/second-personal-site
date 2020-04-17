import React from 'react'
import { Box, Flex } from 'rebass'
import IconLink from '../../elements/IconLink'
// import Logo from '../../logo/Logo'

const Header = () => {
  return (
    <Flex py={4} flexDirection="column">
      <Flex color="white" alignItems="center" sx={{ flexDirection: ['column', 'row'] }}>
        {/* <Logo color="secondary" height={['30px']} /> */}

        <Box mx="auto" />
        <Box>
          <IconLink p={1} ml={4} href="https://twitter.com/evans_stepanov">
            <i className="fab fa-twitter" />
            <span>Twitter</span>
          </IconLink>
          <IconLink p={1} ml={4} href="https://www.linkedin.com/in/evansstepanov/">
            <i className="fab fa-linkedin-in" />
            <span>LinkedIn</span>
          </IconLink>
          <IconLink p={1} ml={4} href="https://angel.co/evans-alexis-stepanov">
            <i className="fab fa-angellist" />
            <span>Angellist</span>
          </IconLink>
          <IconLink p={1} ml={4} href="https://stackoverflow.com/users/9340787/evans">
            <i className="fab fa-stack-overflow" />
            <span>Stack Overflow</span>
          </IconLink>
          <IconLink p={1} ml={4} href="https://github.com/estepanov">
            <i className="fab fa-github" />
            <span>Github</span>
          </IconLink>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Header
