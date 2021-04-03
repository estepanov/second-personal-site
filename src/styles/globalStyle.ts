import { css } from '@emotion/core'

const globalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@500&family=Open+Sans:wght@300;700&display=swap');

  html {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  #gatsby-focus-wrapper {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
`

export default globalStyle
