import { lighten } from '@theme-ui/color'
import { colors, modes } from './colors'

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
}

const LINK_FOCUS = {
  borderRadius: 3,
  userSelect: 'none',
  outline: 'none',
  '&:focus': {
    boxShadow: t => `0px 0px 0px 3px ${lighten('secondary', 0.1)(t)}`
  }
}

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
    nav: "'Archivo', serif",
    body: "'Open San', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    // heading: "'DM Mono', monospace",
    heading: "'Archivo', serif",
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 300,
    heading: 500,
    display: 700
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
    default: {
      color: 'secondary',
      userSelect: 'none',
      outline: 'none',
      '&:hover': {
        color: 'primary'
      },
      ...LINK_FOCUS
    },
    mobileNav: {
      fontFamily: 'nav',
      transition: 'ease-in-out 0.5s',
      marginTop: 1,
      marginBottom: 1,
      paddingTop: 1,
      paddingBottom: 1,
      paddingRight: 2,
      fontSize: 1,
      fontWeight: '500',
      textTransform: 'uppercase',
      color: 'headerMobile',
      '&:visited': {
        color: 'headerMobile'
      },
      textDecoration: 'none',
      '&:hover': {
        color: 'headerMobileActive'
      },
      '&.active': {
        color: 'headerMobileActive',
        borderRightColor: 'headerMobileBgActive',
        borderRightWidth: 2,
        borderRightStyle: 'solid'
      }
    },
    nav: {
      fontFamily: 'nav',
      textTransform: 'uppercase',
      transition: 'ease-in-out 0.5s',
      paddingTop: 2,
      paddingBottom: 2,
      paddingLeft: 2,
      paddingRight: 2,
      fontSize: 1,
      fontWeight: '500',
      color: 'text',
      '&:visited': {
        color: 'text'
      },
      textDecoration: 'none',
      '&:hover': {
        color: 'headerActive'
      },
      '&.active': {
        color: 'secondary'
      },
      ...LINK_FOCUS
    }
  },
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
      // color: 'secondary',
      variant: 'textStyles.heading',
      fontSize: 6
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
      variant: 'links.default'
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
