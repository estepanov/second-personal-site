import React from 'react'
import { Flex } from 'theme-ui'
import IconLink from '../../elements/IconLink'

const Footer = () => {
  return (
    <Flex py={4} sx={{ flexShrink: 0, flexDirection: 'row' }}>
      <Flex sx={{ flex: 1 }} />
      <Flex color="white" sx={{ flexDirection: 'row', alignItems: 'center' }}>
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
      </Flex>
    </Flex>
  )
}

export default Footer
