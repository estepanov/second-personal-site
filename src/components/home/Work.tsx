import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import Container from '../Layout/Container'
import TechLogoGroup from '../projects/TechLogoGroup'
// import TechLogoList from '../projects/TechLogoList'
import WorkItem from './WorkItem'
// import TechLogo from '../projects/TechLogo'
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
          <Container sx={{ flexDirection: ['column', 'row'], flexWrap: 'wrap', paddingY: 4, fontSize: 5 }}>
            <TechLogoGroup headerSize={3} title="Languages" tags={data.allLanguages} />
            <TechLogoGroup
              headerSize={3}
              title="Frontend"
              tags={data.allTech.filter(techTagFilter('environment', TechRunTimeEnv.frontend))}
            />
            <TechLogoGroup
              headerSize={3}
              title="Backend"
              tags={data.allTech.filter(techTagFilter('environment', TechRunTimeEnv.backend))}
            />
            <TechLogoGroup headerSize={3} title="Data" tags={data.allTech.filter(techTagFilter('type', TechTypes.database))} />
            <TechLogoGroup headerSize={3} title="DevOps" tags={data.allTech.filter(techTagFilter('type', TechTypes.devops))} />
            <TechLogoGroup headerSize={3} title="Deployment" tags={data.allTech.filter(techTagFilter('type', TechTypes.deployment))} />
          </Container>
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
        </React.Fragment>
      )
    }}
  />
)

export default WorkSection

WorkSection.defaultProps = {}
