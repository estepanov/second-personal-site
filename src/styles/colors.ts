import * as CSS from 'csstype'

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
    text: 'hsl(230, 25%, 18%)',
    background: '#F5FFFF'
  },
  [Modes.dark]: {
    text: 'hsl(210, 50%, 96%)',
    background: 'hsl(230, 25%, 18%)'
  }
}

export const colors: ColorMode = {
  text: 'hsl(210, 50%, 96%)',
  background: 'hsl(230, 25%, 18%)',
  primary: '#7EB731',
  secondary: '#6970CF',
  // highlight: '#945FFF',
  highlight: 'yellow',
  muted: '#C8C3F7',
  gray: 'hsl(210, 50%, 60%)'
}
