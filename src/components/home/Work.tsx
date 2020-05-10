import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import Container from '../Layout/Container'
import TechLogoList from '../projects/TechLogoList'
import WorkItem from './WorkItem'
import TechLogo from '../projects/TechLogo'
import { techTagFilter } from '../logos/constants'
import { TechRunTimeEnv, TechTypes } from '../../interfaces/TechTag'
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
          currentPositions: currentPositions.sort((a, b) => {
            return new Date(b.frontmatter.startDate) - new Date(a.frontmatter.startDate)
          }),
          previousPositions: previousPositions.sort((a, b) => {
            return new Date(b.frontmatter.endDate) - new Date(a.frontmatter.endDate)
          }),
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
                    <Flex sx={{ flexDirection: 'column' }}>
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
                <TechLogoList tags={data.allLanguages} renderItem={TechLogo} />
              </Flex>
            </Box>
          </Container>
          {/* <Container>
            <Box sx={{ marginY: 4 }}>
              <Heading as="h2" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Technologies
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech} renderItem={TechLogo} />
              </Flex>
            </Box>
          </Container> */}
          <Container sx={{ flexDirection: ['column', 'row'], flexWrap: 'wrap' }}>
            <Box sx={{ marginY: 2, marginRight: 4 }}>
              <Heading as="h4" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Frontend Tech
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech.filter(techTagFilter('environment', TechRunTimeEnv.frontend))} renderItem={TechLogo} />
              </Flex>
            </Box>
            <Box sx={{ marginY: 2, marginRight: 4 }}>
              <Heading as="h4" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Backend Tech
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech.filter(techTagFilter('environment', TechRunTimeEnv.backend))} renderItem={TechLogo} />
              </Flex>
            </Box>
            <Box sx={{ marginY: 2, marginRight: 4 }}>
              <Heading as="h4" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Data Stores
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech.filter(techTagFilter('type', TechTypes.database))} renderItem={TechLogo} />
              </Flex>
            </Box>
            <Box sx={{ marginY: 2, marginRight: 4 }}>
              <Heading as="h4" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                DevOps
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech.filter(techTagFilter('type', TechTypes.devops))} renderItem={TechLogo} />
              </Flex>
            </Box>
            <Box sx={{ marginY: 2, marginRight: 4 }}>
              <Heading as="h4" sx={{ paddingBottom: 1, paddingLeft: 2 }}>
                Deployment
              </Heading>
              <Flex sx={{ fontSize: 4, flexWrap: 'wrap' }}>
                <TechLogoList tags={data.allTech.filter(techTagFilter('type', TechTypes.deployment))} renderItem={TechLogo} />
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
