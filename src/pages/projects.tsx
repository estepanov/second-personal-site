import React from 'react'
/** @jsx jsx */
import { jsx, Text } from 'theme-ui'
import { graphql, Link } from 'gatsby'
import { Card } from 'rebass'

import Layout from '../layouts'

interface Images {
  id: string
  publicURL: string
}

interface ProjectSumary {
  id: string
  excerpt: string
  timeToRead: number
  frontmatter: {
    title: string
    images: Images[]
    tech: string[]
  }
  fields: {
    slug: string
  }
}

interface EdgeNode {
  node: ProjectSumary
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
    post: {
      edges: EdgeNode[]
    }
  }
}

const Projects: React.FC<ProjectProps> = ({ data }) => {
  return (
    <Layout>
      {data.post.edges.map(({ node }) => {
        return (
          <Link key={node.id} sx={{ color: 'white', textDecoration: 'none' }} to={node.fields.slug}>
            <Card my={2} p={2} bg="gray">
              <Text sx={{ fontSize: 4 }}>{node.frontmatter.title}</Text>
              <Text sx={{ fontSize: 2 }}>{node.excerpt}</Text>
              {node.frontmatter.images.map(imgs => {
                return <img key={imgs.id} src={imgs.publicURL} sx={{ maxWidth: 100 }} alt={`${node.frontmatter.title} project`} />
              })}
            </Card>
          </Link>
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
          id
          excerpt
          timeToRead
          frontmatter {
            title
            tech
            images {
              id
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
