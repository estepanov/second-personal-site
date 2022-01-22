import { modes as modesBase, lightTheme } from "./theme/colors";

export enum CustomColorModes {
  dark = "dark",
  light = "light",
}

export interface ThemeColors {
  [key: string]: string | null | number | undefined;
}

export interface ModeTypes {
  [CustomColorModes.light]: ThemeColors;
  [CustomColorModes.dark]: ThemeColors;
}

export const modes = modesBase as ModeTypes;

export const colors = {
  ...lightTheme,
};
