import * as React from 'react'
import { graphql } from 'gatsby'
import MDX from '../components/MDX'

import Layout from '../layouts'

interface BlogPostPageTemplateProps {
  location: Location
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

const BlogPostPageTemplate: React.FC<BlogPostPageTemplateProps> = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <MDX>{data.post.body}</MDX>
  </Layout>
)

export default BlogPostPageTemplate

export const query = graphql`
  query BlogPostPageTemplateQuery($slug: String!) {
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
        title
      }
    }
  }
`
