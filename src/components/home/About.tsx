import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text, Flex } from 'theme-ui'
import { lighten } from '@theme-ui/color'
import Container from '../Layout/Container'

const About: React.FC = () => {
  return (
    <Box
      sx={{
        paddingY: 4,
        // backgroundImage: theme => `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})`,
        backgroundImage: t => `linear-gradient(to bottom right, ${lighten('primary', 0.1)(t)}, ${lighten('secondary', 0.1)(t)})`,
        color: 'white'
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            maxWidth: 800,
            fontSize: 2,
            lineHeight: 1.8
          }}
        >
          <img
            alt="me"
            src="/me2-small.png"
            sx={{
              flexShrink: 0,
              filter: 'grayscale(1)',
              height: 125,
              width: 125,
              float: 'right',
              marginLeft: 3
            }}
          />
          <Box sx={{ textAlign: 'right', fontSize: 3, fontFamily: 'heading' }}>Howdy 👋 I'm Evans</Box> Usually you can find me coding or
          reading about software. Winter is my favorite season and ⛷ or 🏂 on fresh pow 🌨 is the highlight of every winter. Occasionally, I
          can be found binge-playing Halo on 🎮 or Battlefield One on 🖱.
        </Box>
      </Container>
    </Box>
  )
}

export default About
