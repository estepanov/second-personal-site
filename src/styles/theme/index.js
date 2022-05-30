const { lighten } = require("@theme-ui/color");
const { modes, lightTheme } = require("./colors");

const heading = {
  fontFamily: "heading",
  fontWeight: "heading",
  lineHeight: "heading",
};

const LINK_FOCUS = {
  borderRadius: 0,
  userSelect: "none",
  outline: "none",
  "&:focus": {
    boxShadow: (t) => `0px 0px 0px 3px ${lighten("secondary", 0.1)(t)}`,
  },
};

module.exports = {
  initialColorModeName: "light",
  config: {
    useColorSchemeMediaQuery: true,
  },
  forms: {
    input: {
      backgroundColor: "background",
      "&:disabled": {
        opacity: 0.8,
        borderColor: "transparent",
        cursor: "not-allowed",
      },
      borderRadius: 0,
      outline: "none",
      "&:focus": {
        boxShadow: (t) => `0px 0px 0px 3px ${lighten("secondary", 0.1)(t)}`,
      },
    },
    textarea: {
      backgroundColor: "background",
      borderRadius: 0,
      outline: "none",
      "&:focus": {
        boxShadow: (t) => `0px 0px 0px 3px ${lighten("secondary", 0.1)(t)}`,
      },
    },
  },
  colors: {
    ...lightTheme,
    modes: {
      ...modes,
    },
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    nav: "'Archivo', serif",
    body: "'Open San', sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
    heading: "'Roboto Condensed', sans-serif",
    writing: "'Kalam', cursive",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64, 72, 80],
  fontWeights: {
    body: 300,
    heading: 500,
    display: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading,
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "display",
      letterSpacing: "-0.03em",
      mt: 3,
    },
  },
  buttons: {
    primary: {
      "&:focus": {
        boxShadow: (t) => `0px 0px 0px 3px ${lighten("secondary", 0.2)(t)}`,
      },
      outline: "none",
      borderRadius: 0,
      color: "white",
      bg: "primary",
    },
    outline: {
      borderRadius: 0,
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
    text: {
      bg: "muted",
      fontFamily: "heading",
      fontWeight: "heading",
      paddingY: 1,
      paddingX: 2,
      border: "none",
      color: "text",
      borderRadius: 0,
    },
  },
  links: {
    default: {
      color: "secondary",
      userSelect: "none",
      outline: "none",
      "&:hover": {
        color: "primary",
      },
      ...LINK_FOCUS,
    },
    mobileNav: {
      fontFamily: "nav",
      transition: "ease-in-out 0.5s",
      marginTop: 1,
      marginBottom: 1,
      paddingTop: 1,
      paddingBottom: 1,
      paddingRight: 2,
      fontSize: 2,
      fontWeight: "500",
      textTransform: "uppercase",
      color: "headerMobile",
      "&:visited": {
        color: "headerMobile",
      },
      textDecoration: "none",
      "&:hover": {
        color: "headerMobileActive",
      },
      "&.active": {
        color: "headerMobileActive",
        borderRightColor: "headerMobileBgActive",
        borderRightWidth: 2,
        borderRightStyle: "solid",
      },
    },
    nav: {
      transition: "border ease 0.3s",
      fontFamily: "nav",
      textTransform: "uppercase",
      paddingTop: 1,
      paddingBottom: 1,
      paddingLeft: 2,
      paddingRight: 2,
      fontSize: 2,
      letterSpacing: 1,
      fontWeight: "700",
      color: "text",
      borderBottomStyle: "solid",
      borderBottomSize: "2px",
      borderBottomColor: "transparent",
      "&:visited": {
        color: "text",
      },
      textDecoration: "none",
      "&:hover": {
        borderRadius: 0,
        color: "text",
        borderBottomColor: "text",
      },
      "&.active": {
        color: "text",
        borderRadius: 0,
        borderBottomStyle: "solid",
        borderBottomSize: "2px",
        borderBottomColor: "text",
      },
      ...LINK_FOCUS,
    },
  },
  styles: {
    Container: {
      p: 3,
      maxWidth: 1024,
    },
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
    },
    h1: {
      // color: 'secondary',
      variant: "textStyles.heading",
      fontSize: 6,
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    a: {
      variant: "links.default",
    },
    pre: {
      variant: "prism",
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      // color: 'secondary',
      fontSize: 1,
      padding: 4,
    },
    inlineCode: {
      fontSize: 1,
      paddingX: 2,
      paddingY: 1,
      fontFamily: "monospace",
      color: "text",
      bg: "listBg",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "muted",
        borderBottomStyle: "solid",
      },
    },
    th: {
      verticalAlign: "bottom",
      borderBottomWidth: "2px",
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: "1px",
    },
    hr: {
      border: 0,
      borderBottom: "1px solid",
      borderColor: "muted",
    },
    img: {
      maxWidth: "100%",
    },
  },
  prism: {
    ".comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url": {
      color: "gray600",
    },
    ".comment": {
      fontStyle: "italic",
    },
    ".property,.tag,.boolean,.number,.constant,.symbol,.deleted,.function,.class-name,.regex,.important,.variable": {
      color: "pink",
    },
    ".atrule,.attr-value,.keyword": {
      color: "orange",
    },
    ".selector,.attr-name,.string,.char,.bultin,.inserted": {
      color: "green",
    },
  },
};
