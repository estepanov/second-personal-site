import React from 'react'
import { Link } from 'gatsby'
import { lighten, darken } from '@theme-ui/color'

/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag?: string
}

const TechLogo: React.FC<TechLogoProps> = ({ tag }) => {
  const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'primaryLight'
  return (
    <Flex
      sx={{
        position: 'relative',
        fontSize: TAG_MAP[tag] ? 3 : 1,
        cursor: 'pointer',
        color,
        transition: 'ease-in 0.3s',
        paddingX: 2,
        paddingY: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginY: 'auto',
        '& span': {
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
        },
        '&:hover': {
          '& span': {
            visibility: 'visible',
            display: 'block',
            opacity: 1,
            color: 'white',
            bottom: '100%'
          },
          color
        }
      }}
      key={tag}
    >
      {TAG_MAP[tag] ? (
        <React.Fragment>
          {TAG_MAP[tag].icon}
          <span>{tag}</span>
        </React.Fragment>
      ) : (
          tag
        )}
    </Flex>
  )
}

export default TechLogo
