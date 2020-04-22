import React, { useState } from 'react'
import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Button, Box, Flex } from 'theme-ui'
import NavLink from '../../elements/NavLink'
import Name from '../../logo/Name'
import Logo from '../../logo/Logo'
import Container from '../Container'
import ColorModeToggle from '../../ColorModeToggle'

const LINKS = [
  {
    title: 'Projects',
    to: '/projects'
  },
  {
    title: 'Blog',
    to: '/blog'
  },
  {
    title: 'ColorMode',
    Component: ColorModeToggle
  }
]

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false)
  const toggleMobileMenu = () => setMobileMenu(!showMobileMenu)
  return (
    <Container
      sx={{
        marginBottom: [2, 0],
        transition: ['ease 0.2s', 'none'],
        backgroundColor: [showMobileMenu ? 'headerMobileBg' : 'background', 'background']
      }}
    >
      <Flex
        py={[2, 4]}
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          flexShrink: 0
        }}
      >
        <Flex sx={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
          <Link
            to="/"
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 0,
              color: [showMobileMenu ? 'logoActive' : 'logo', 'logo']
            }}
          >
            <Logo my={2} height={['25px', '30px']} />
            <Name my={2} ml={3} height={['25px', '30px']} />
          </Link>
          {/* DESKTOP NAV */}
          <Flex sx={{ display: ['none', 'flex'] }}>
            {LINKS.map(item => {
              let component
              if (item.Component) {
                component = <item.Component />
              }
              if (item.to) {
                component = (
                  <Box ml={4} my="auto">
                    <NavLink to={item.to}>{item.title}</NavLink>
                  </Box>
                )
              }
              return (
                <Box key={item.title} ml={4} my="auto">
                  {component}
                </Box>
              )
            })}
          </Flex>
        </Flex>
        {/* MOBILE NAV */}
        <Box sx={{ display: ['block', 'none'], flexShrink: 0, marginLeft: 'auto' }}>
          <Button
            onClick={toggleMobileMenu}
            // onTouchStart={toggleMobileMenu}
            // onTouchStart={toggleMobileMenu}
            title="Toggle Menu"
            sx={{
              outlineColor: 'primary',
              transition: 'ease 0.2s',
              backgroundColor: showMobileMenu ? 'headerMobileBgActive' : 'headerMobileBg',
              color: showMobileMenu ? 'headerMobileBg' : 'headerMobileBgActive',
              padding: 1,
              cursor: 'pointer',
              borderRadius: 0
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentcolor"
              viewBox="0 0 24 24"
              sx={{
                transition: 'ease-in-out 0.3s',
                opacity: 1,
                display: 'block',
                margin: 0
              }}
            >
              {showMobileMenu ? (
                <path d="M 5.7070312 4.2929688 L 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 L 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 L 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 L 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 z" />
              ) : (
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                )}
            </svg>
          </Button>
        </Box>
      </Flex>
      <Flex
        sx={{
          display: ['flex', 'none'],
          flexDirection: 'column',
          alignItems: 'flex-end',
          transition: 'ease-in-out 0.5s, opacity ease 0.3s',
          visibility: showMobileMenu ? 'visible' : 'collapse',
          overflow: 'hidden',
          opacity: showMobileMenu ? 1 : 0,
          maxHeight: showMobileMenu ? 1000 : 0
        }}
      >
        {LINKS.map(item => {
          if (item.Component) {
            return <item.Component key={item.title} />
          }
          return (
            <Link
              key={item.title}
              partiallyActive
              activeClassName="active"
              sx={{
                variant: 'links.mobileNav'
              }}
              to={item.to}
            >
              {item.title}
            </Link>
          )
        })}
        <Box pb={3} />
      </Flex>
    </Container>
  )
}

export default Header
