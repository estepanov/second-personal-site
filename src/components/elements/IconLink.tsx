/** @jsx jsx */
import { jsx, Link } from 'theme-ui'
import { lighten, darken } from '@theme-ui/color'

export default props => (
  <Link
    {...props}
    sx={{
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
        left: 0,
        visibility: 'hidden',
        // backgroundColor: 'primary',
        // backgroundImage: t => `linear-gradient(to bottom right, ${lighten('primary', 0.1)(t)}, ${t.colors.primary})`,
        backgroundImage: t => `linear-gradient(to top left, ${lighten('primary', 0.1)(t)}, ${darken('primary', 0.01)(t)})`,

        opacity: 0,
        fontSize: 1
      },
      '&:hover': {
        '& span': {
          visibility: 'visible',
          display: 'block',
          opacity: 1,
          color: 'white',
          bottom: '100%'
        },
        color: 'primary'
      }
    }}
  />
)
