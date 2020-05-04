/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import { lighten, darken } from '@theme-ui/color'

export default props => (
  <Link
    {...props}
    sx={{
      mx: [2, 3],
      position: 'relative',
      fontSize: 4,
      cursor: 'pointer',
      color: 'gray',
      transition: 'ease-in 0.3s',
      '& span': {
        padding: 2,
        transition: 'ease-in 0.3s',
        position: 'absolute',
        bottom: 0,
        right: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
        color: 'white',
        // backgroundColor: 'primary',
        // backgroundImage: t => `linear-gradient(to bottom right, ${lighten('primary', 0.1)(t)}, ${t.colors.primary})`,
        backgroundImage: t => `linear-gradient(to top left, ${lighten('primary', 0.1)(t)}, ${darken('primary', 0.01)(t)})`,
        opacity: 0,
        fontSize: 1
      },
      '&:hover': {
        '& span': {
          pointerEvents: 'auto',
          visibility: 'visible',
          display: 'block',
          opacity: 1,
          bottom: '100%'
        },
        color: 'primary'
      }
    }}
  />
)
