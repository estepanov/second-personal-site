import React from 'react'
/** @jsx jsx */
import { css, jsx } from 'theme-ui'
import { lighten } from '@theme-ui/color'
import { Transition } from 'react-transition-group'

const transitionStyles = {
  entering: { opacity: 1, transform: 'scale(1.05)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0.8)' },
  exited: { opacity: 0, transform: 'scale(0.8)' }
}

const baseStyle = {
  display: 'inline-flex',
  transition: 'all ease-in-out 500ms'
}

const TIMEOUT = 500

interface ToggleProps {
  id: string
  checked: boolean
  onChange: () => {}
  CheckedIcon?: React.FC
  UncheckedIcon?: React.FC
}

const Toggle: React.FC<ToggleProps> = ({ id, checked, UncheckedIcon, CheckedIcon, onChange }) => {
  return (
    <label
      sx={{
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        paddingX: '0.5em',
        flexDirection: 'row',
        width: '3.75em',
        height: '2.125em',
        backgroundColor: t => lighten('listBgAlt', 0.1)(t),
        borderRadius: '1.5em',
        '&:focus-within': {
          boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
        },
        '&:focus-within > #slider': {
          backgroundColor: 'background'
          // boxShadow: t => `0px 0px 0px 1px ${lighten('secondary', 0)(t)}`
        }
      }}
      htmlFor={id}
    >
      <input
        id={id}
        sx={{
          opacity: 0,
          width: 0,
          height: 0
        }}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <div
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Transition in={checked && CheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles[state], ...baseStyle })}>
                <CheckedIcon />
              </span>
            )
          }}
        </Transition>
        <Transition in={!checked && UncheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles[state], ...baseStyle })}>
                <UncheckedIcon />
              </span>
            )
          }}
        </Transition>
      </div>
      <span
        id="slider"
        sx={{
          transform: checked ? 'translateX(1.625em)' : 'translateX(0px)',
          position: 'absolute',
          cursor: 'pointer',
          height: '1.625em',
          width: '1.625em',
          top: '0.25em',
          left: '0.25em',
          right: 0,
          bottom: 0,
          backgroundColor: 'background',
          borderRadius: '1.5em',
          transition: '.4s',
          // boxShadow: t => `0px 0px 0px 1px ${transparentize('text', 0.6)(t)}`,
          '::before': {
            position: 'absolute',
            content: '',
            height: '1.625em',
            width: '1.625em',
            left: '0.25em',
            bottom: '0.25em',
            backgroundColor: 'white',
            transition: '.4s'
          }
        }}
      />
    </label>
  )
}

export default Toggle
