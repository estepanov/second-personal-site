/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

export default props => (
  <Link
    {...props}
    partiallyActive
    activeClassName="active"
    sx={{
      variant: 'links.nav'
    }}
  />
)
