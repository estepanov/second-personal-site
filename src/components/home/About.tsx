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
        <Flex
          sx={{
            // maxWidth: 600
            flexDirection: ['column', 'row'],
            alignItems: 'center'
          }}
        >
          <Text sx={{ fontSize: 2, float: 'left', marginRight: [0, 4], marginBottom: [4, 0], lineHeight: 1.8 }}>
            I spend most of my time coding, reading code, or reading about software. Winter is my favorite season and skiing on fresh powder
            is the highlight of every winter. Occasionally, I can be found binge-playing Halo on Xbox or Battlefield One on the PC.
          </Text>
          <img
            alt="me"
            src="/me2-small.png"
            sx={{
              flexShrink: 0,
              filter: 'grayscale(1)',
              height: 125,
              width: 125,
              alignSelf: 'flex-end'
              // float: 'left',
              // // marginRight: 4
              // marginLeft: 4
              // marginBottom: 4
            }}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default About
