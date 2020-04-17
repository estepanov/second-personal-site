import * as CSS from 'csstype'
// import {  } from 'polished'

export enum Modes {
  dark = 'dark',
  light = 'light'
}

export interface ThemeColors {
  text?: CSS.ColorProperty
  background?: CSS.ColorProperty
  primary?: CSS.ColorProperty
  secondary?: CSS.ColorProperty
  highlight?: CSS.ColorProperty
  muted?: CSS.ColorProperty
  gray?: CSS.ColorProperty
  // link: CSS.ColorProperty
  // success: CSS.ColorProperty
  // warning: CSS.ColorProperty
  // error: CSS.ColorProperty
  // heading: CSS.ColorProperty
  // text: CSS.ColorProperty
  // disabled: CSS.ColorProperty
  // border: CSS.ColorProperty
}

export interface ModeTypes {
  [Modes.light]: ThemeColors
  [Modes.dark]: ThemeColors
}

export const modes: ModeTypes = {
  [Modes.light]: {
    text: '#2A2D34',
    background: '#FFFFFA',
    muted: '#6761A8'
  },
  [Modes.dark]: {
    text: '#C9DEF0',
    background: '#2F2F2E',
    muted: '#423E6B'
  }
}

export const colors: ColorMode = {
  text: '#C9DEF0',
  background: '#2A2D34',
  primary: '#009DDC',
  muted: '#B3BDD0',
  secondary: '#F26430',
  highlight: '#009B72',
  gray: '#B1B2B5'
}
