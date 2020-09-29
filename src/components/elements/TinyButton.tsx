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
        borderRadius: 3,
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        color: isSelected ? 'white' : 'mutedText',
        backgroundColor: isSelected ? 'secondary' : 'muted',
        userSelect: 'none',
        outline: 'none',
        '&:hover': {
          transition: 'background 0.3s ease',
          backgroundColor: 'muted200',
          color: 'text'
          // boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
          // textDecoration: 'underline'
        },
        '&:focus': {
          boxShadow: t => `0px 0px 0px 2px ${lighten('secondary', 0.1)(t)}`
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
