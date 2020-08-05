import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui'
import Layout from '../layouts'

import Work from '../components/home/Work'
import Container from '../components/Layout/Container'
import GitHubActivity from '../components/GitHubActivity'
import TechSection from '../components/home/Tech'

interface IndexProps {
  location: Location
}

const IndexPage: React.FC<IndexProps> = ({ location }) => {
  return (
    <Layout container={false} pathname={location.pathname}>
      <Container>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            paddingY: 3
          }}
        >
          <Box sx={{ fontSize: 6, fontFamily: 'heading', color: 'primary' }}>Howdy 👋 I'm Evans</Box>
          <Text
            sx={{
              marginTop: 2,
              color: 'mutedText',
              fontSize: 4,
              // fontStyle: 'italic',
              fontFamily: 'heading'
            }}
          >
            I love building full stack web applications!
          </Text>
          <Box sx={{ marginTop: 2 }}>
            Usually you can find me coding or reading about software. Winter is my favorite season and ⛷ or 🏂 on fresh pow 🌨 is the
            highlight of every winter. Occasionally, I can be found binge-playing Halo on 🎮 or Battlefield One on 🖱.
          </Box>
          <Work />
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', marginTop: 2 }}>
            <GitHubActivity />
          </Flex>
          <TechSection />
        </Flex>
      </Container>
    </Layout>
  )
}

export default IndexPage
