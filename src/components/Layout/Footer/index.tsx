import React from 'react'
import { Flex } from 'theme-ui'
import IconLink from '../../elements/IconLink'
import ColorModeToggle from '../../ColorModeToggle'

const SOCIAL = [
  {
    title: 'Github',
    href: 'https://github.com/estepanov',
    icon: 'fab fa-github'
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/evans_stepanov',
    icon: 'fab fa-twitter'
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/evansstepanov/',
    icon: 'fab fa-linkedin-in'
  },
  {
    title: 'Angellist',
    href: 'https://angel.co/evans-alexis-stepanov',
    icon: 'fab fa-angellist'
  },
  {
    title: 'Stack Overflow',
    href: 'https://stackoverflow.com/users/9340787/evans',
    icon: 'fab fa-stack-overflow'
  }
]

const Footer = () => {
  return (
    <Flex
      my={4}
      // py={4}
      sx={{
        flexShrink: 0,
        flexDirection: ['column', 'row']
      }}
    >
      <Flex sx={{ flex: '1 0 auto', alignItems: 'center', mb: [2, 0] }}>
        <ColorModeToggle />
      </Flex>
      <Flex color="white" sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: ['space-between'] }}>
        {SOCIAL.map(social => {
          return (
            <IconLink px={[2, 4]} key={social.title} href={social.href}>
              <i className={social.icon} />
              <span>{social.title}</span>
            </IconLink>
          )
        })}
      </Flex>
    </Flex>
  )
}

export default Footer
