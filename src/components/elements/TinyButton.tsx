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
        marginRight: 1,
        marginBottom: 1,
        textTransform: 'uppercase',
        fontSize: 0,
        cursor: 'pointer',
        textDecoration: 'none',
        border: 'none',
        color: isSelected ? 'white' : 'mutedText',
        backgroundColor: isSelected ? 'secondary' : 'muted',
        userSelect: 'none',
        outline: 'none',
        letterSpacing: 1,
        transition: 'all 0.25s ease-in-out',
        '&:hover': {
          backgroundColor: isSelected ? 'secondary' : 'muted200',
          color: isSelected ? 'white' : 'text'
        },
        '&:focus': {
          boxShadow: t => `0px 0px 0px 2px ${lighten('secondary', 0.2)(t)}`
        },
        paddingY: 2,
        paddingX: 3
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default TinyButton
