import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import Container from '../Layout/Container'
import TechLogoList from '../projects/TechLogoList'
import WorkItem from './WorkItem'
// import TechLogo from '../projects/TechLogo'
// import { techTagFilter } from '../logos/constants'
// import { TechRunTimeEnv } from '../../interfaces/TechTag'
// import { TechTag } from '../../interfaces/TechTag'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query Work {
    allMdx(filter: { fields: { type: { in: ["work", "projects"] } } }, sort: { fields: [frontmatter___title], order: [DESC, DESC] }) {
      edges {
        node {
          id
          fields {
            type
          }
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
  <StaticQuery
    query={currentQuery}
    render={({ allMdx }) => {
      const list: NodeWork[] = allMdx.edges
      const data = useMemo(() => {
        const allLanguages = new Set<string>()
        const currentPositions: Work[] = []
        const previousPositions: Work[] = []
        const allTech = new Set<string>()
        list.forEach(item => {
          if (item.node.fields.type === 'work') {
            // is it current or previous job?
            if (item.node.frontmatter.endDate === '') {
              currentPositions.push(item.node)
            } else {
              previousPositions.push(item.node)
            }
          }
          // get the languages
          if (item.node.frontmatter.languages) {
            item.node.frontmatter.languages.forEach(lang => {
              if (!allLanguages.has(lang)) allLanguages.add(lang)
            })
          }
          // get the tech
          if (item.node.frontmatter.tech) {
            item.node.frontmatter.tech.forEach(lang => {
              if (!allTech.has(lang)) allTech.add(lang)
            })
          }
        })
        return {
          allLanguages: Array.from(allLanguages),
          currentPositions,
          previousPositions,
          allTech: Array.from(allTech)
        }
      }, [list])

      return (
        <React.Fragment>
          <Box
            sx={{
              backgroundImage: t => `linear-gradient(to bottom left, ${lighten('orange', 0.1)(t)}, ${lighten('yellow', 0.1)(t)})`
            }}
          >
            <Container>
              <Flex
                sx={{
                  flexDirection: ['column', 'row'],
                  flexWrap: 'wrap',
                  marginY: 4,
                  color: 'white'
                }}
              >
                {data.currentPositions.length ? (
                  <Box sx={{ marginBottom: 2, flex: 1 }}>
                    <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                      Currently
                    </Heading>
                    <Flex>
                      {data.currentPositions.map(item => {
                        return <WorkItem item={item} key={item.id} />
                      })}
                    </Flex>
                  </Box>
                ) : null}
                {data.previousPositions.length ? (
                  <Box sx={{ marginBottom: 2, flex: 1 }}>
                    <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                      Previously
                    </Heading>
                    <Flex>
                      {data.previousPositions.map(item => {
                        return <WorkItem item={item} key={item.id} />
                      })}
                    </Flex>
                  </Box>
                ) : null}
              </Flex>
            </Container>
          </Box>
          <Container>
            <Box sx={{ marginY: 4 }}>
              <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Languages
              </Heading>
              <Flex sx={{ fontSize: 6, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allLanguages} />
              </Flex>
            </Box>
          </Container>
          <Container>
            <Box sx={{ marginY: 4 }}>
              <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Technologies
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech} />
              </Flex>
            </Box>
          </Container>
        </React.Fragment>
      )
    }}
  />
)

export default WorkSection

WorkSection.defaultProps = {}
