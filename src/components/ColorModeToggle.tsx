/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Flex, Text, Button } from 'rebass'
import { Switch } from '@rebass/forms'
import { Modes } from '../styles/colors'

const options = Object.keys(Modes)

const MODE_TEXT = {
  [Modes.dark]: 'Dark Mode',
  [Modes.light]: 'Light Mode'
}

export default props => {
  const [mode, setMode] = useColorMode()
  return (
    <Button
      display="flex"
      alignItems="center"
      bg="transparent"
      onClick={() => {
        const index = options.indexOf(mode)
        const next = options[(index + 1) % options.length]
        setMode(next)
      }}
    >
      <Switch checked={mode === Modes.dark} />
      <Text ml={2} color="primary" fontSize={0}>
        {MODE_TEXT[mode]}
      </Text>
    </Button>
  )
}
