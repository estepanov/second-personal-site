import React from 'react'
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Text, Box } from 'rebass'
import { Switch } from '@rebass/forms'
import { Modes } from '../styles/colors'

const options = Object.keys(Modes)

const MODE_TEXT = {
  // [Modes.dark]: 'Dark Mode',
  [Modes.dark]: (
    <React.Fragment>
      <i className="fad fa-moon-stars" />
    </React.Fragment>
  ),
  [Modes.light]: (
    <React.Fragment>
      <i className="fad fa-sun" />
    </React.Fragment>
  )
  // [Modes.light]: 'Light Mode'
}

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <Box
      display="flex"
      alignItems="center"
      bg="transparent"
      onClick={() => {
        const index = options.indexOf(mode)
        const next = options[(index + 1) % options.length]
        setMode(next)
      }}
    >
      <Text mr={2} color="primary" fontSize={3} key={mode}>
        {MODE_TEXT[mode]}
      </Text>
      <Switch checked={mode === Modes.dark} />
    </Box>
  )
}
