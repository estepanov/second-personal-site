import { modes as modesBase, lightTheme } from './theme/colors'
export enum Modes {
  dark = 'dark',
  light = 'light'
}

export interface ThemeColors {
  [key: string]: string | null | number | undefined;
}

export interface ModeTypes {
  [Modes.light]: ThemeColors
  [Modes.dark]: ThemeColors
}

export const modes = modesBase as ModeTypes

export const colors = {
  ...lightTheme
}
