import React from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag?: string | number
  marginRight?: number
}

const TechLogo: React.FC<TechLogoProps> = ({ tag, marginRight, marginBottom }) => {
  // const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText'
  return (
    <Flex
      sx={{
        flexShrink: 0,
        position: 'relative',
        fontSize: TAG_MAP[tag] ? 'inherit' : '0.6em',
        cursor: 'default',
        padding: 0,
        // color,
        transition: 'ease-in 0.3s',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        marginBottom
      }}
    >
      {TAG_MAP[tag] ? <React.Fragment>{TAG_MAP[tag].icon}</React.Fragment> : tag}
    </Flex>
  )
}

export default TechLogo
