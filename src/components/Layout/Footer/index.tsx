import React from 'react'
import { Flex, Text } from 'theme-ui'
import IconLink from '../../elements/IconLink'
import ColorModeToggle from '../../ColorModeToggleText'
import Container from '../Container'

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
    <Container>
      <Flex
        my={4}
        sx={{
          flexShrink: 0,
          flexDirection: ['column-reverse', 'row']
        }}
      >
        <Flex
          sx={{
            flex: '1 0 auto',
            justifyContent: ['space-between', null],
            alignItems: 'center',
            paddingTop: [4, 0]
          }}
        >
          <Text sx={{ color: 'gray', paddingRight: 2, fontSize: 1 }}>© {new Date().getFullYear()} Evans Stepanov</Text>
          <ColorModeToggle />
        </Flex>
        <Flex sx={{ flexDirection: 'row', alignItems: 'center', justifyContent: ['space-between'] }}>
          {SOCIAL.map(social => {
            return (
              <IconLink key={social.title} href={social.href}>
                <i className={social.icon} />
                <span>{social.title}</span>
              </IconLink>
            )
          })}
        </Flex>
      </Flex>
    </Container>
  )
}

export default Footer
