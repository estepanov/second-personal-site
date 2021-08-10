/** @jsxRuntime classic */ // real-dumb-fix https://github.com/system-ui/theme-ui/issues/1160#issuecomment-786822435
/** @jsx jsx */
import { jsx } from 'theme-ui'

const BlockQuote: React.FC = ({ children }) => {
  return (
    <div sx={{ backgroundColor: 'listBg', color: 'text' }}>
      <blockquote>{children}</blockquote>
    </div>
  )
}

export default BlockQuote
