import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

const BlockQuote: React.FC = ({ children }) => {
  return (
    <div sx={{ backgroundColor: 'listBg', color: 'listContent' }}>
      <blockquote>{children}</blockquote>
    </div>
  )
}

export default BlockQuote
