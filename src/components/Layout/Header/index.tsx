import React, { useState } from 'react'
import { Link } from 'gatsby'
import { lighten, darken } from '@theme-ui/color'
/** @jsx jsx */
import { jsx, Button, Box, Flex } from 'theme-ui'
import NavLink from '../../elements/NavLink'
import Name from '../../logo/Name'
import Logo from '../../logo/Logo'
import Container from '../Container'
import ColorModeToggle from '../../ColorModeToggle'
import NonProfitConsulting from '../Banners/NonprofitConsulting'

const LINKS = [
  {
    title: 'Projects',
    to: '/projects'
  },
  {
    title: 'Books',
    to: '/books'
  },
  {
    title: 'Blog',
    to: '/blog'
  },
  {
    title: 'Contact',
    to: '/contact'
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
    <React.Fragment>
      <NonProfitConsulting />
      <Container
        sx={{
          paddingY: 4,
          transition: ['ease-in-out 0.3s', 'none'],
          backgroundImage: [
            showMobileMenu
              ? t => `linear-gradient(to bottom left, ${lighten('headerMobileBg', 0.05)(t)}, ${darken('headerMobileBg', 0.05)(t)})`
              : null,
            null
          ],
          backgroundColor: 'background'
        }}
      >
        <Flex
          sx={{
            display: ['flex', 'none'],
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            transition: 'ease-in-out 0.5s, opacity ease-in-out 0.3s',
            visibility: showMobileMenu ? 'visible' : 'collapse',
            overflow: 'hidden',
            opacity: showMobileMenu ? 1 : 0,
            maxHeight: showMobileMenu ? 1000 : 0
          }}
        >
          <Flex sx={{ width: 190, height: 90, justifyContent: 'center' }}>
            <Link to="/">
              <Logo
                sx={{
                  color: 'logoActive',
                  transition: 'ease-in-out 0.3s',
                  transform: showMobileMenu ? 'opacity(1) translate(0,0)' : 'opacity(0.4) translate(0,-100px)',
                  width: 100
                }}
              />
            </Link>
          </Flex>
          <Flex sx={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end' }}>
            {LINKS.map(item => {
              if (item.Component) {
                return <item.Component key={item.title} variant="links.mobileNav" />
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
            <Box mt={4} />
          </Flex>
        </Flex>
        <Flex
          // py={2}
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
                transition: 'ease-in-out 0.2s',
                color: [showMobileMenu ? 'logoActive' : 'logo', 'logo'],
                ':hover': {
                  color: 'mutedText'
                }
              }}
            >
              <Logo sx={{ display: ['none', 'block'], height: '30px' }} />
              <Name
                sx={{
                  height: ['25px', '30px'],
                  width: ['200px', '230px'],
                  marginLeft: [0, 3]
                }}
              />
            </Link>
            {/* DESKTOP NAV */}
            <Flex sx={{ display: ['none', 'flex'] }}>
              {LINKS.map(item => {
                let component
                if (item.Component) {
                  component = <item.Component variant="links.nav" key={item.title} />
                }
                if (item.to) {
                  component = (
                    <Box ml={3} my="auto">
                      <NavLink to={item.to}>{item.title}</NavLink>
                    </Box>
                  )
                }
                return (
                  <Box key={item.title} ml={3} my="auto">
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
              title="Toggle Menu"
              sx={{
                outlineColor: 'primary',
                transition: 'ease 0.2s',
                backgroundColor: 'transparent',
                color: showMobileMenu ? 'logoAlt' : 'logo',
                padding: 1,
                cursor: 'pointer',
                borderRadius: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentcolor"
                viewBox="0 0 24 24"
                sx={{
                  transition: 'ease-in-out 0.4s',
                  opacity: 1,
                  display: 'block',
                  margin: 0,
                  transform: `rotate(${showMobileMenu ? 90 : 0}deg)`
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
      </Container>
    </React.Fragment>
  )
}

export default Header
