import React from 'react'
/** @jsx jsx */
import { jsx, Flex, useThemeUI } from 'theme-ui'
import { readableColor } from 'polished'
import { Link } from 'gatsby'

import TAG_MAP from '../logos/constants'

interface TechLogoProps {
  tag: string | number
  marginRight?: number
  marginBottom?: number
  fontSize?: number
  isLink?: boolean
}

const TechLogo: React.FC<TechLogoProps> = ({ tag, marginRight, marginBottom, fontSize, isLink = false }) => {
  const color = TAG_MAP[tag] ? TAG_MAP[tag].color : 'mutedText'
  const backgroundColor = useThemeUI().theme.colors?.background
  const hoverColor = TAG_MAP[tag] ? TAG_MAP[tag].color : backgroundColor
  const hoverTextColor = readableColor(hoverColor || 'white')

  const logo = (<Flex
    sx={{
      flexGrow: 0,
      flexShrink: 0,
      position: 'relative',
      fontSize: fontSize || TAG_MAP[tag] ? 'inherit' : '0.6em',
      padding: 0,
      // color: 'text',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight,
      marginBottom,
      marginTop: marginBottom,
      backgroundColor: 'transparent',
      '&:hover': {
        color: hoverTextColor,
        '& span.icon': {
          color: hoverTextColor,
        },
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
          className="icon"
          sx={{
            display: 'flex',
            zIndex: 1
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
            zIndex: 0,
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
            transition: 'ease-in-out 0.2s',
            wordBreak: 'keep-all',
            paddingX: 2,
            paddingY: 1,
            position: 'absolute',
            top: '80%',
            left: -2,
            zIndex: 1,
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
  </Flex>)

  if (isLink) {
    return (
      <Link sx={{ color: 'unset' }} to={`/technology/${tag}`} >
        {logo}
      </Link>
    )
  }

  return logo
}

export default TechLogo
