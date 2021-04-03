import React from 'react'
/** @jsx jsx */
import { jsx, Flex, useThemeUI } from 'theme-ui'
import { readableColor } from 'polished'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag?: string | number
  marginRight?: number
  marginBottom?: number
  fontSize?: number
}

const TechLogo: React.FC<TechLogoProps> = ({ tag, marginRight, marginBottom, fontSize }) => {
  const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText'
  const backgroundColor = useThemeUI().theme.colors?.background
  const hoverColor = TAG_MAP[tag] ? TAG_MAP[tag].color : backgroundColor
  const hoverTextColor = readableColor(hoverColor || 'white')

  return (
    <Flex
      sx={{
        flexGrow: 0,
        flexShrink: 0,
        position: 'relative',
        fontSize: fontSize || TAG_MAP[tag] ? 'inherit' : '0.6em',
        padding: 0,
        color: 'text',
        transition: 'ease-in 0.3s',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight,
        marginBottom,
        marginTop: marginBottom,
        backgroundColor: 'transparent',
        '&:hover': {
          color: hoverTextColor,
          '& span.bg': {
            opacity: 1
          },
          '& span.name': {
            visibility: 'visible',
            display: 'block',
            left: -2,
            opacity: 1,
            top: '100%',
            maxHeight: '13em',
            maxWidth: '13em'
          }
        },
        '&:focus': {
          color: hoverTextColor,
          '& span.bg': {
            opacity: 1
          },
          '& span.name': {
            visibility: 'visible',
            display: 'block',
            left: -2,
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
          <span
            sx={{
              display: 'flex',
              zIndex: 2
            }}
          >
            {TAG_MAP[tag].icon}
          </span>
          <span
            className="bg"
            sx={{
              position: 'absolute',
              left: -2,
              right: -2,
              top: -2,
              bottom: -2,
              opacity: 0,
              zIndex: 1,
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
              left: -2,
              visibility: 'hidden',
              color: hoverTextColor,
              backgroundColor: color,
              opacity: 0,
              fontSize: 1,
              fontFamily: 'heading',
              fontWeight: 'heading'
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
