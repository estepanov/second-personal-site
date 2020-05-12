import React from 'react'
/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag?: string
}

const TechLogo: React.FC<TechLogoProps> = ({ tag }) => {
  const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText'
  return (
    <Flex
      sx={{
        flexShrink: 0,
        position: 'relative',
        fontSize: 'inherit',
        cursor: 'default',
        padding: 1,
        color,
        transition: 'ease-in 0.3s',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          '& span': {
            visibility: 'visible',
            display: 'block',
            left: 0,
            opacity: 1,
            color: 'white',
            bottom: '100%'
          },
          color
        }
      }}
    >
      {TAG_MAP[tag] ? (
        <React.Fragment>
          {TAG_MAP[tag].icon}
          <span
            sx={{
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transition: 'ease-in-out 0.5s',
              wordBreak: 'keep-all',
              padding: 2,
              position: 'absolute',
              bottom: 0,
              left: 0,
              visibility: 'hidden',
              backgroundColor: color,
              opacity: 0,
              fontSize: 1
            }}
          >
            {TAG_MAP[tag].name}
          </span>
        </React.Fragment>
      ) : (
          tag
        )}
    </Flex>
  )
}

export default TechLogo
