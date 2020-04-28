import React from 'react'
import { Link } from 'gatsby'
/** @jsx jsx */
import { jsx, Heading, AspectImage, Box } from 'theme-ui'

import Layout from '../layouts'

const NotFoundPage = () => (
  <Layout title="Page not found">
    <Box mt={4} sx={{ maxHeight: 270 }}>
      <AspectImage ratio={16 / 9} src="/great-success.gif" alt="great success" />
    </Box>
    <Heading sx={{ py: 4 }}>404: Page not found.</Heading>
    <p>You've hit the void. </p>
    <Link sx={{ fontSize: 4 }} to="/">
      Would you like to go back?
    </Link>
  </Layout>
)

export default NotFoundPage
