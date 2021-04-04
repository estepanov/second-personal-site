import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui'
import { lighten, darken } from '@theme-ui/color'
import Layout from '../layouts'

import Work from '../components/home/Work'
import Container from '../components/Layout/Container'
import GitHubActivity from '../components/GitHubActivityBook'
import TechSection from '../components/home/TechCloud'
import Hero from '../components/home/Hero'

interface IndexProps {
  location: Location
}

const IndexPage: React.FC<IndexProps> = ({ location }) => {
  return (
    <Layout container={false} pathname={location.pathname}>
      <Hero>
        <Container>
          <Flex
            sx={{
              flexDirection: 'column',
              justifyContent: 'center',
              paddingY: 3,
              alignItems: 'center',
              flex: 1
            }}
          >
            <Text
              sx={{
                color: 'text',
                lineHeight: '1.5em',
                fontSize: [6, 9],
                // fontStyle: 'italic',
                fontFamily: 'heading',
                fontWeight: 'display',
                background: t => `linear-gradient(135deg, ${lighten('text', 0.3)(t)}, ${darken('text', 0.3)(t)})`,
                'background-clip': 'text',
                '-webkit-background-clip': 'text',
                '-moz-background-clip': 'text',
                '-moz-text-fill-color': 'transparent',
                '-webkit-text-fill-color': 'transparent'
              }}
            >
              Howdy, I'm{' '}
              <span
                sx={{
                  color: 'primary',
                  fontFamily: 'monospace',
                  background: t => `linear-gradient(90deg, ${lighten('primary', 0.01)(t)}, ${darken('warning', 0.01)(t)})`,
                  'background-clip': 'text',
                  '-webkit-background-clip': 'text',
                  '-moz-background-clip': 'text',
                  '-moz-text-fill-color': 'transparent',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                Evans
              </span>
              . <br />I love{' '}
              <span
                sx={{
                  color: 'highlight',
                  fontFamily: 'monospace',
                  background: t => `linear-gradient(90deg, ${lighten('highlight', 0.01)(t)}, ${darken('primary', 0.01)(t)})`,
                  'background-clip': 'text',
                  '-webkit-background-clip': 'text',
                  '-moz-background-clip': 'text',
                  '-moz-text-fill-color': 'transparent',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                crafting
              </span>{' '}
              full stack web applications that{' '}
              <span
                sx={{
                  color: 'secondary',
                  fontFamily: 'monospace',
                  background: t => `linear-gradient(90deg, ${lighten('teal', 0.01)(t)}, ${darken('green', 0.01)(t)})`,
                  'background-clip': 'text',
                  '-webkit-background-clip': 'text',
                  '-moz-background-clip': 'text',
                  '-moz-text-fill-color': 'transparent',
                  '-webkit-text-fill-color': 'transparent'
                }}
              >
                delight
              </span>{' '}
              users.
            </Text>
          </Flex>
        </Container>
      </Hero>
      <Container>
        <Box sx={{ marginTop: 2 }}>
          Usually you can find me coding or reading about software. Winter is my favorite season and ⛷ or 🏂 on fresh pow 🌨 is the highlight
          of every winter. Occasionally, I can be found binge-playing Halo on 🎮 or Battlefield One on 🖱.
        </Box>
        <Work />
        <TechSection />
        <Flex sx={{ justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
          <GitHubActivity />
        </Flex>
        {/* </Flex> */}
      </Container>
    </Layout>
  )
}

export default IndexPage
