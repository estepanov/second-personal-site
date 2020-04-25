import { css } from '@emotion/core'

const globalStyle = css`
  /* @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap'); */
  @import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto+Slab&display=swap');

  html {
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
  }
  body {
    height: 100%;
    margin: 0;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
`

export default globalStyle
