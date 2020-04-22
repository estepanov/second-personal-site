import React from 'react'
import { Flex } from 'theme-ui'
import IconLink from '../../elements/IconLink'
import ColorModeToggle from '../../ColorModeToggle'

const Footer = () => {
  return (
    <Flex
      my={2}
      py={2}
      sx={{
        flexShrink: 0,
        flexDirection: ['column', 'row']
      }}
    >
      <Flex sx={{ flex: '1 0 auto', paddingY: [2, 0], alignItems: 'center' }}>
        <ColorModeToggle />
      </Flex>
      <Flex color="white" sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: ['space-between'] }}>
        <IconLink p={1} m={[2, 4]} href="https://twitter.com/evans_stepanov">
          <i className="fab fa-twitter" />
          <span>Twitter</span>
        </IconLink>
        <IconLink p={1} m={[2, 4]} href="https://www.linkedin.com/in/evansstepanov/">
          <i className="fab fa-linkedin-in" />
          <span>LinkedIn</span>
        </IconLink>
        <IconLink p={1} m={[2, 4]} href="https://angel.co/evans-alexis-stepanov">
          <i className="fab fa-angellist" />
          <span>Angellist</span>
        </IconLink>
        <IconLink p={1} m={[2, 4]} href="https://stackoverflow.com/users/9340787/evans">
          <i className="fab fa-stack-overflow" />
          <span>Stack Overflow</span>
        </IconLink>
        <IconLink p={1} m={[2, 4]} href="https://github.com/estepanov">
          <i className="fab fa-github" />
          <span>Github</span>
        </IconLink>
      </Flex>
    </Flex>
  )
}

export default Footer
