// import { Theme } from 'styled-system'
import { colors, modes } from './colors'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
}

export const breakpoints: string[] = ['319px', '424px', '767px', '1023px']

export const defaultTheme = {
  useColorSchemeMediaQuery: true,
  colors: {
    ...colors,
    modes: {
      ...modes
    }
  },
  // space: { ...space },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    nav: "'Nunito', sans-serif",
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    display: 900
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25
  },
  textStyles: {
    heading,
    display: {
      variant: 'textStyles.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3
    }
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 2px'
    }
  },
  links: {
    nav: {
      transition: 'ease-in-out 0.5s',
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 3,
      paddingRight: 3,
      fontSize: 3,
      fontWeight: '500',
      color: 'gray',
      '&:visited': {
        color: 'gray'
      },
      textDecoration: 'none',
      '&:hover': {
        color: 'primary'
      },
      '&.active': {
        color: 'primary'
      }
    }
  },
  variants: {},
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024
    },
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'textStyles.display'
    },
    h2: {
      variant: 'textStyles.heading',
      fontSize: 5
    },
    h3: {
      variant: 'textStyles.heading',
      fontSize: 4
    },
    h4: {
      variant: 'textStyles.heading',
      fontSize: 3
    },
    h5: {
      variant: 'textStyles.heading',
      fontSize: 2
    },
    h6: {
      variant: 'textStyles.heading',
      fontSize: 1
    },
    a: {
      color: 'secondary',
      '&:hover': {
        color: 'primary'
      }
    },
    pre: {
      variant: 'prism',
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      // color: 'secondary',
      fontSize: 1
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted'
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      'th,td': {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid'
      }
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px'
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px'
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted'
    },
    img: {
      maxWidth: '100%'
    }
  },
  prism: {
    '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
      color: 'gray'
    },
    '.comment': {
      fontStyle: 'italic'
    },
    '.property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable': {
      color: 'secondary'
    },
    '.atrule,.attr-value,.keyword': {
      color: 'primary'
    },
    '.selector,.attr-name,.string,.char,.bultin,.inserted': {
      color: 'text'
    }
  }
}
