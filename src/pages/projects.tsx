import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import ProjectListItem from '../components/projects/ProjectListItem'

import { Project } from '../interfaces/Project'

interface EdgeNode {
  node: Project
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
        return <ProjectListItem key={node.id} project={node} />
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
    post: allMdx(
      filter: { fields: { type: { eq: "projects" }, isMain: { eq: true } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC] }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            date
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
