import * as React from 'react'
import { graphql } from 'gatsby'
import MDX from '../components/MDX'

import Layout from '../layouts'

interface ProjectProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    post: {
      body: string
      excerpt: string
      frontmatter: {
        title: string
      }
    }
  }
}

const Project: React.FC<ProjectProps> = ({ data }) => (
  <Layout>
    <MDX>{data.post.body}</MDX>
  </Layout>
)

export default Project

export const query = graphql`
  query ProjectQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt
      frontmatter {
        tech
        title
      }
    }
  }
`
