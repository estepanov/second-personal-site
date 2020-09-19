// src/gatsby-plugin-theme-ui/components.js
import Prism from '@theme-ui/prism'
import BlockQuote from '../components/elements/BlockQuote'

export default {
  pre: props => props.children,
  code: Prism,
  blockquote: BlockQuote
}
