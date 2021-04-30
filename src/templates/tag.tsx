import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import ProjectListItem from '../components/projects/ProjectListItem'

import { Project } from '../interfaces/Project'
import SectionHeader from '../components/Layout/SectionHeader'
import Pagination from '../components/Pagination'
import HR from '../components/elements/HR'
import { Flex } from 'theme-ui'
import TAG_MAP from '../components/logos/constants'

interface EdgeNode {
  node: Project
}

interface ProjectProps {
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
      edges: EdgeNode[]
    }
  }
  pageContext: {
    tag: string
    // currentPage: number
    // limit: number
    // nextPage: null | number
    // pages: number
    // previousPage: null | number
    // skip: number
  }
}

const Projects: React.FC<ProjectProps> = ({ data, location, pageContext }) => {
  const title = `Projects using ${TAG_MAP[pageContext.tag].name}`
  const description = 'This only includes projects at the moment. It will include more soon!'
  return (
    <Layout title={title} description={description} pathname={location.pathname}>
      <SectionHeader title={title} subtitle={description} />
      <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {data.post.edges.map(({ node }) => {
          return (
            <ProjectListItem key={node.id} project={node} />
          )
        })}
      </Flex>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query tagListQuery($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    post: allMdx(
      filter: { frontmatter: { tech: { in: [$tag] } }, fields: {type: {eq: "projects"}, isMain: {eq: true}} }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC] }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            size
            banners
            date
            title
            tech
            images {
              id
              publicURL
              childImageSharp {
                resize(
                  height: 1000
                  width: 1000
                  cropFocus: NORTH
                  jpegProgressive: true
                  quality: 100
                  pngQuality: 100
                  pngCompressionLevel: 1
                  pngCompressionSpeed: 10
                  jpegQuality: 100
                  grayscale: true
                ) {
                  src
                }
              }
            }
            repo
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
