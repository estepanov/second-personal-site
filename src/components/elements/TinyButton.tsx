import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { lighten } from '@theme-ui/color'

interface TinyButtonProps {
  isSelected?: boolean
  onClick: () => void
}

const TinyButton: React.FC<TinyButtonProps> = ({ isSelected = false, onClick, children }) => {
  return (
    <button
      type="button"
      sx={{
        fontFamily: 'heading',
        marginRight: 2,
        marginBottom: 1,
        textTransform: 'uppercase',
        fontSize: 0,
        borderRadius: 3,
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        color: isSelected ? 'white' : 'mutedText',
        backgroundColor: isSelected ? 'secondary' : 'muted',
        userSelect: 'none',
        outline: 'none',
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          backgroundColor: isSelected ? 'secondary' : 'muted200',
          color: isSelected ? 'white' : 'text'
          // backgroundColor: 'muted200',
          // color: 'text'
          // boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
          // textDecoration: 'underline'
        },
        '&:focus': {
          boxShadow: t => `0px 0px 0px 2px ${lighten('secondary', 0.2)(t)}`
          // color: 'white',
          // backgroundColor: 'primary'
          // transition: 'background 0.3s ease'
          // textDecoration: 'underline'
        },
        paddingY: 1,
        paddingX: 1
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TinyButton
