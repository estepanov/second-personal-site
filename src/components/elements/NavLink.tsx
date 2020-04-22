/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default props => (
  <Link
    partiallyActive
    activeClassName="active"
    sx={{
      variant: 'links.nav'
    }}
    {...props}
  />
)
