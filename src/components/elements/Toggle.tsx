import React from 'react'
/** @jsx jsx */
import { css, jsx } from 'theme-ui'
import { lighten, darken, transparentize } from '@theme-ui/color'
import { Transition } from 'react-transition-group'
import { keyframes } from '@emotion/core'

const TIMEOUT = 500
const TIMEOUT_CIRCLE = 500

const TRANSITION = 'ease'
const TRANSITION_CIRCLE = 'ease'

const enteringSpinAnimation = (dir: number) => {
  return keyframes`
    0%   {
      transform: scale(0.6) rotate(${dir * 90}deg) translate3d(${dir * 30}px, 0px, 10px);
    }
    100% {
      transform: scale(1) rotate(0deg) translate3d(0px, 0px, 0);
    }
`
}

const spinInAnimation = (dir: number) => {
  return keyframes`
    0%   {
      transform: scale(0.5) rotate(${dir * 180}deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
`
}

const transitionStyles = (dir: number) => ({
  entering: { opacity: 1, animation: `${enteringSpinAnimation(dir)} ${TIMEOUT}ms ${TRANSITION}`, animationPlayState: 'running' },
  entered: { opacity: 1, animationPlayState: 'running' },
  exiting: { opacity: 0, animationPlayState: 'running' },
  exited: { opacity: 0, animationPlayState: 'paused' }
})

const transitionStylesBasic = (dir: number) => ({
  entering: { opacity: 1, animation: `${spinInAnimation(dir)} ${TIMEOUT_CIRCLE}ms ${TRANSITION_CIRCLE}`, animationPlayState: 'running' },
  entered: { opacity: 1, transform: 'scale(1) rotate(0deg)', animationPlayState: 'running' },
  exiting: {
    opacity: 0,
    animation: `${spinInAnimation(dir * -1)} ${TIMEOUT_CIRCLE}ms ${TRANSITION_CIRCLE} reverse`,
    animationPlayState: 'running'
  },
  exited: { opacity: 0, transform: `scale(0.6) rotate(${dir * 360}deg)`, animationPlayState: 'paused' }
})

const baseStyle = {
  display: 'inline-flex',
  transition: `all ${TRANSITION} ${TIMEOUT}ms`
}

const baseCircleStyle = {
  position: 'absolute',
  display: 'inline-flex',
  flex: 1,
  width: '100%',
  height: '100%',
  transition: `opacity ${TRANSITION} ${TIMEOUT_CIRCLE * 0.67}ms, transform  ${TRANSITION_CIRCLE} ${TIMEOUT_CIRCLE}ms`
}

interface ToggleProps {
  id: string
  checked: boolean
  onChange: () => {}
  CheckedIcon?: React.FC
  CheckedCircleIcon?: React.FC
  UncheckedIcon?: React.FC
  UncheckedCircleIcon?: React.FC
}

const Toggle: React.FC<ToggleProps> = ({ id, checked, UncheckedIcon, UncheckedCircleIcon, CheckedIcon, CheckedCircleIcon, onChange }) => {
  return (
    <label
      sx={{
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        paddingX: '0.5em',
        flexDirection: 'row',
        width: '3.75em',
        height: '2.125em',
        backgroundColor: t => lighten('listBgAlt', 0.1)(t),
        boxShadow: t => `0px 0px 0.3em ${darken('listBgAlt', 0.1)(t)} inset`,
        borderRadius: '1.5em',
        '&:focus-within': {
          boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
        },
        '&:focus-within > #slider': {
          backgroundColor: 'background'
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
          alignItems: 'center',
          width: '100%'
        }}
      >
        <Transition in={checked && !!CheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles(-1)[state], ...baseStyle })}>
                <CheckedIcon />
              </span>
            )
          }}
        </Transition>
        <Transition in={!checked && !!UncheckedIcon} timeout={TIMEOUT}>
          {state => {
            return (
              <span css={css({ ...transitionStyles(1)[state], ...baseStyle })}>
                <UncheckedIcon />
              </span>
            )
          }}
        </Transition>
      </div>
      <span
        id="slider"
        sx={{
          boxShadow: t => `0px 0px 0.3em ${darken('listBgAlt', 0.1)(t)}`,
          transform: checked ? 'translateX(1.625em)' : 'translateX(0px)',
          position: 'absolute',
          zIndex: 1,
          cursor: 'pointer',
          height: '1.625em',
          width: '1.625em',
          top: '0.25em',
          left: '0.25em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          right: 0,
          bottom: 0,
          backgroundColor: 'background',
          color: t => transparentize('text', 0.5),
          borderRadius: '1.5em',
          transition: `${TIMEOUT}ms ${TRANSITION}`,
          overflow: 'hidden'
          // boxShadow: t => `0px 0px 0px 1px ${transparentize('text', 0.6)(t)}`,
          // '::before': {
          //   position: 'absolute',
          //   content: '""',
          //   height: '1.625em',
          //   width: '1.625em',
          //   left: '0',
          //   bottom: '0',
          //   backgroundColor: 'background',
          //   borderRadius: '1.5em',
          //   transition: `${TIMEOUT}ms ${TRANSITION}`
          // }
        }}
      >
        <Transition
          in={checked && !!CheckedCircleIcon}
          timeout={TIMEOUT_CIRCLE}
          // unmountOnExit
          // mountOnEnter
          appear={checked && !!CheckedCircleIcon}
        >
          {state => {
            return (
              <span css={css({ ...transitionStylesBasic(-1)[state], ...baseCircleStyle })}>
                <CheckedCircleIcon />
              </span>
            )
          }}
        </Transition>
        <Transition
          in={!checked && !!UncheckedCircleIcon}
          timeout={TIMEOUT_CIRCLE}
          // unmountOnExit
          // mountOnEnter
          appear={!checked && !!UncheckedCircleIcon}
        >
          {state => {
            return (
              <span css={css({ ...transitionStylesBasic(1)[state], ...baseCircleStyle })}>
                <UncheckedCircleIcon />
              </span>
            )
          }}
        </Transition>
      </span>
    </label>
  )
}

export default Toggle
