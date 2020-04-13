import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { Card } from 'rebass'

import MainLink from '../components/elements/Link'

import Layout from '../layouts'

interface ProjectSummaary {
  excerpt: string
  timeToRead: number
  frontmatter: {
    title: string
  }
  fields: {
    slug: string
  }
}

interface EdgeNode {
  node: ProjectSummaary
}

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
    posts: {
      edges: EdgeNode[]
    }
  }
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  console.log('data', data)
  return (
    <Layout>
      <MainLink to="/a-markdown-page/">Show me some Markdown!</MainLink>
      <br />
      <MainLink to="/">Take me back home.</MainLink>
      <br />
      {data.post.edges.map(({ node }) => {
        return (
          <Card my={2} p={2} bg="primary">
            <Link sx={{ color: 'white', textDecoration: 'none' }} to={node.fields.slug}>
              {node.frontmatter.title}
            </Link>
          </Card>
        )
      })}
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query projectListQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    post: allMdx(filter: { fields: { type: { eq: "projects" }, isMain: { eq: true } } }) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tech
            images {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
