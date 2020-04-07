import React from 'react'
import { Button, Link as StyledLink } from 'rebass'
import Layout from '../layouts'
// import { Link } from 'gatsby'

import Link from '../components/elements/Link'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      <Button variant="primary" mr={2}>
        Beep
      </Button>
      <Button variant="outline">Boop</Button>
    </Layout>
  )
}

export default IndexPage
