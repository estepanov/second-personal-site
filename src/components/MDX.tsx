import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'

const MDX: React.FC = ({ children }) => {
  return <MDXRenderer>{children}</MDXRenderer>
}

export default MDX
