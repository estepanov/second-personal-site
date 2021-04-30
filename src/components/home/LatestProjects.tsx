import React, { useMemo, useState } from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading, Button } from 'theme-ui'
import { StaticQuery, graphql, Link } from 'gatsby'
import { Work } from '../../interfaces/Work'
import { TechRunTimeEnv, TechTypes, TechTag } from '../../interfaces/TechTag'
import ProjectListItem from '../projects/ProjectListItem'
import { Project } from '../../interfaces/Project'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query LatestProjects {
    allMdx(
      filter: {
        fields: {
          type: {
            eq: "projects"
          }
        }
      },
      sort: {
        fields: frontmatter___date,
        order: DESC
      },
      limit: 3
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

export interface WorkProps { }

interface EdgeNode {
  node: Project
}

const LatestProjects: React.FC<WorkProps> = () => (
  <StaticQuery
    query={currentQuery}
    render={({ allMdx }) => {

      const list: EdgeNode[] = allMdx.edges

      return (
        <Box
          sx={{
            marginTop: 4
          }}
        >
          <Heading id="latest-projects" as="h2">
            Latest Projects
            <Link to="/projects" sx={{ fontSize: 0, color: 'mutedText', marginLeft: 2 }}>view all</Link>
          </Heading>
          <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 2 }}>
            {list.map(({ node }) => {
              return (
                <ProjectListItem key={node.id} project={node} />
              )
            })}
          </Flex>
        </Box>
      )
    }}
  />
)

export default LatestProjects
