import React from 'react'
/** @jsx jsx */
import { jsx, Box, Text } from 'theme-ui'
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
      <Container>
        <Box>
          <img
            alt="me"
            src="/me.jpg"
            sx={{
              flexShrink: 0,
              filter: 'grayscale(1)',
              height: 100,
              width: 100,
              float: 'left',
              marginRight: 4
              // marginBottom: 4
            }}
          />
          <Text sx={{ fontSize: 2 }}>
            I spend most of my time coding, reading code, or reading about software. Winter is my favorite season and skiing on fresh powder
            is the highlight of every winter. Occasionally, I can be found binge-playing Halo on Xbox or Battlefield One on the PC.
          </Text>
        </Box>
      </Container>
    </Box>
  )
}

export default About
