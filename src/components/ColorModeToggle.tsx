import React from 'react'
/** @jsx jsx */
import { jsx, useColorMode, Text, IconButton } from 'theme-ui'
import { Modes } from '../styles/colors'

const options = Object.values(Modes)

// const MODE_TEXT = {
//   [Modes.dark]: 'Dark Mode',
//   [Modes.light]: 'Light Mode'
// }

// const MODE_TEXT_REVERSE = {
//   [Modes.dark]: MODE_TEXT.light,
//   [Modes.light]: MODE_TEXT.dark
// }

const MODE_ICON = {
  [Modes.dark]: <i className="fad fa-moon-stars" />,
  [Modes.light]: <i className="fad fa-sun" />
}
const MODE_ICON_REVERSE = {
  [Modes.dark]: MODE_ICON.light,
  [Modes.light]: MODE_ICON.dark
}

interface ColorModeToggle {
  variant: string
}

const ColorModeToggle: React.FC<ColorModeToggle> = ({ variant }) => {
  const [mode, setMode] = useColorMode<Modes>()
  return (
    <IconButton
      aria-label="Toggle dark mode"
      key={mode}
      variant={variant}
      sx={{
        // borderRadius: 10,
        position: 'relative',
        cursor: 'pointer',
        transition: 'ease-in-out 0.3s',
        display: 'flex',
        height: 'max-content',
        alignItems: 'center',
        border: 'none',
        background: 'none',
        // borderStyle: 'solid',
        // borderWidth: 1,
        // // borderColor: 'headerMobileBgActive',
        color: 'text',
        backgroundColor: 'none',
        paddingX: 2,
        paddingY: 2,
        overflow: 'hidden',
        '&:hover': {
          // backgroundColor: 'text',
          color: 'mutedText'
        }
      }}
      onClick={() => {
        const index = options.indexOf(mode)
        const next = options[(index + 1) % options.length]
        setMode(next)
      }}
    >
      <Text>{MODE_ICON_REVERSE[mode]}</Text>
      {/* <span sx={{ marginLeft: 2, fontSize: 0 }}>{MODE_TEXT_REVERSE[mode]}</span> */}
    </IconButton>
  )
}

export default ColorModeToggle
