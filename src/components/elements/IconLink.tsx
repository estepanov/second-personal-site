/** @jsx jsx */
import { jsx, Link } from 'theme-ui'

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
        backgroundColor: 'primary',
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
