import React from 'react'
/** @jsx jsx */
import { jsx, Flex, useThemeUI } from 'theme-ui'
import { readableColor } from 'polished'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag?: string | number
  marginRight?: number
}

const TechLogo: React.FC<TechLogoProps> = ({ tag, marginRight, marginBottom }) => {
  const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText'
  const backgroundColor = useThemeUI().theme.colors?.background
  const hoverColor: string = TAG_MAP[tag] ? TAG_MAP[tag].color : backgroundColor || 'white'
  return (
    <Flex
      sx={{
        flexShrink: 0,
        position: 'relative',
        fontSize: TAG_MAP[tag] ? 'inherit' : '0.6em',
        cursor: 'default',
        padding: 0,
        color,
        transition: 'ease-in 0.3s',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        marginBottom,
        backgroundColor: 'transparent',
        '&:hover': {
          color: readableColor(hoverColor),
          '& span.bg': {
            opacity: 1
          },
          '& span.name': {
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'block',
            left: -1,
            opacity: 1,
            top: '100%',
            maxHeight: '13em',
            maxWidth: '13em'
          }
        },
        '&:focus': {
          color: readableColor(hoverColor),
          '& span.bg': {
            opacity: 1
          },
          '& span.name': {
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'block',
            left: -1,
            opacity: 1,
            top: '100%',
            maxHeight: '13em',
            maxWidth: '13em'
          }
        }
      }}
    >
      {TAG_MAP[tag] ? (
        <React.Fragment>
          {TAG_MAP[tag].icon}
          <span
            className="bg"
            sx={{
              position: 'absolute',
              left: -1,
              right: -1,
              top: -1,
              bottom: -1,
              opacity: 0,
              zIndex: -1,
              transition: 'all ease 0.2s',
              backgroundColor: TAG_MAP[tag]?.color || 'text'
            }}
          />
          <span
            className="name"
            sx={{
              overflow: 'hidden',
              maxHeight: 0,
              maxWidth: 0,
              pointerEvents: 'none',
              whiteSpace: 'nowrap',
              transition: 'ease-in-out 0.5s',
              wordBreak: 'keep-all',
              paddingX: 2,
              paddingY: 1,
              position: 'absolute',
              top: '100%',
              left: -1,
              visibility: 'hidden',
              backgroundColor: color,
              opacity: 0,
              fontSize: 1,
              fontFamily: 'heading',
              fontWeight: 'heading',
              transform: 'scale(0.9)'
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
