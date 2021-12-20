import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layouts'
import ProjectListItem from '../components/projects/ProjectListItem'

import { Project } from '../interfaces/Project'
import SectionHeader from '../components/Layout/SectionHeader'

import { Flex } from 'theme-ui'
import TAG_MAP from '../components/logos/constants'
import WorkListItem from '../components/projects/WorkListItem'

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
  }
}

const LanguagePage: React.FC<ProjectProps> = ({ data, location, pageContext }) => {
  const title = `${TAG_MAP[pageContext.tag].name}`
  const workItems = data.post.edges.filter(({ node }) => node.fields.type === "work").sort((a, b) => new Date(b.node?.frontmatter?.startDate) - new Date(a.node?.frontmatter?.startDate))

  const projectItems = data.post.edges.filter(({ node }) => node.fields.type === "projects")
  return (
    <Layout title={title} description={`Where I have worked with ${TAG_MAP[pageContext.tag].name}`} pathname={location.pathname}>
      {workItems.length > 0 && <><SectionHeader title={`${TAG_MAP[pageContext.tag].name} at work`} />
        <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {workItems.map(({ node }) => {
            return (
              <WorkListItem key={node.id} project={node} />
            )
          })}
        </Flex></>}
      {projectItems.length > 0 && <><SectionHeader title={`${TAG_MAP[pageContext.tag].name} for fun`} />
        <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {projectItems.map(({ node }) => {
            return (
              <ProjectListItem key={node.id} project={node} />
            )
          })}
        </Flex></>}
    </Layout>
  )
}

export default LanguagePage

export const query = graphql`
  query languageListQuery($tag: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    post: allMdx(
      filter: { frontmatter: { languages: { in: [$tag] } }, fields: {type: {in: ["projects","work"]}, isMain: {eq: true}} }
      sort: { fields: [frontmatter___date, frontmatter___title], order: [DESC, DESC] }
    ) {
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            position
            companyName
            startDate
            endDate
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
            type
          }
        }
      }
    }
  }
`
