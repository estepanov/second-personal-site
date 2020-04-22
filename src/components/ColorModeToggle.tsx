import React from 'react'
/** @jsx jsx */
import { jsx, useColorMode, Text } from 'theme-ui'
import { Modes } from '../styles/colors'

const options = Object.keys(Modes)

const MODE_TEXT = {
  [Modes.dark]: 'Dark Mode',
  [Modes.light]: 'Light Mode'
}

const MODE_TEXT_REVERSE = {
  [Modes.dark]: MODE_TEXT.light,
  [Modes.light]: MODE_TEXT.dark
}
const MODE_ICON = {
  [Modes.dark]: <i className="fad fa-moon-stars" />,
  [Modes.light]: <i className="fad fa-sun" />
}
const MODE_ICON_REVERSE = {
  [Modes.dark]: MODE_ICON.light,
  [Modes.light]: MODE_ICON.dark
}

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <button
      type="button"
      key={mode}
      sx={{
        // borderRadius: 5,
        position: 'relative',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
        display: 'flex',
        height: 'max-content',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'headerMobileBgActive',
        color: 'logoActive',
        padding: 2,
        overflow: 'hidden',
        backgroundColor: 'headerMobileBg',
        '&:hover': {
          backgroundColor: 'text',
          color: 'background'
        }
      }}
      onClick={() => {
        const index = options.indexOf(mode)
        const next = options[(index + 1) % options.length]
        setMode(next)
      }}
    >
      <Text>{MODE_ICON_REVERSE[mode]}</Text>
      <span sx={{ marginLeft: 2, fontSize: 0 }}>{MODE_TEXT_REVERSE[mode]}</span>
    </button>
  )
}
