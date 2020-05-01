import React from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import Container from '../Layout/Container'
import TechLogo from '../projects/TechLogo'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query Work {
    allMdx(filter: { fields: { type: { eq: "work" } } }, sort: { fields: [frontmatter___title], order: [DESC, DESC] }) {
      edges {
        node {
          id
          frontmatter {
            companyName
            startDate
            endDate
            tech
            website
            position
            languages
          }
        }
      }
    }
  }
`

export interface WorkProps { }

const WorkSection: React.FC<WorkProps> = () => (
  <Box
    sx={{
      backgroundImage: t => `linear-gradient(to bottom right, ${lighten('orange', 0.1)(t)}, ${lighten('yellow', 0.1)(t)})`
    }}
  >
    <Container>
      <StaticQuery
        query={currentQuery}
        render={({ allMdx }) => {
          const list: NodeWork[] = allMdx.edges
          const allLanguages = list.reduce((all, item) => {
            return all.concat(item.node.frontmatter.languages)
          }, [])
          const currentPositions = list.reduce<NodeWork[]>((all, item) => {
            if (item.node.frontmatter.endDate === '') all.push(item)
            return all
          }, [])
          const previousPositions = list.reduce<NodeWork[]>((all, item) => {
            if (item.node.frontmatter.endDate !== '') all.push(item)
            return all
          }, [])
          return (
            <Flex
              sx={{
                flexDirection: ['column', 'row'],
                flexWrap: 'wrap',
                marginY: 4,
                color: 'white'
              }}
            >
              {currentPositions.length ? (
                <Box sx={{ marginBottom: 2, flex: 1 }}>
                  <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                    Currently
                  </Heading>
                  <Flex>
                    {currentPositions.map(item => {
                      return (
                        <Box sx={{ padding: 2 }} key={item.node.id}>
                          {item.node.frontmatter.position} @ <span sx={{ fontWeight: 'bold' }}>{item.node.frontmatter.companyName}</span>
                        </Box>
                      )
                    })}
                  </Flex>
                </Box>
              ) : null}
              {previousPositions.length ? (
                <Box sx={{ marginBottom: 2, flex: 1 }}>
                  <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                    Previously
                  </Heading>
                  <Flex>
                    {currentPositions.map(item => {
                      return (
                        <Box sx={{ padding: 2 }} key={item.node.id}>
                          {item.node.frontmatter.position} @ <span sx={{ fontWeight: 'bold' }}>{item.node.frontmatter.companyName}</span>
                        </Box>
                      )
                    })}
                  </Flex>
                </Box>
              ) : null}
              <Box sx={{ marginBottom: 2, flex: 1 }}>
                <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                  Languages
                </Heading>
                <Flex sx={{ fontSize: 6 }}>
                  {allLanguages.map(item => {
                    return <TechLogo key={item} tag={item} />
                  })}
                </Flex>
              </Box>
            </Flex>
          )
        }}
      />
    </Container>
  </Box>
)

export default WorkSection

WorkSection.defaultProps = {}
