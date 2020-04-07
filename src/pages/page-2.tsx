import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layouts'

const PageTwo = () => (
  <Layout>
    <h1>PAGE TWO</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/a-markdown-page/">Show me some Markdown!</Link>
      </li>
      <li>
        <Link to="/">Take me back home.</Link>
      </li>
    </ul>
  </Layout>
)

export default PageTwo
