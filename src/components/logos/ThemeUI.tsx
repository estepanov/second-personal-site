import React from 'react'

const ThemeUI = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      style={{
        display: 'inline-block',
        fontSize: 'inherit',
        height: '1em',
        width: '1em',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.1em',
        fill: 'currentcolor',
        color: 'inherit'
      }}
    >
      <defs>
        <mask id="ui">
          <rect width="32" height="32" fill="white" />
          <text x="16" y="21" fill="black" textAnchor="middle" style={{ fontSize: '16px' }}>
            UI
          </text>
        </mask>
      </defs>
      <circle cx="16" cy="16" r="16" mask="url(#ui)" />
    </svg>
  )
}

export default ThemeUI
