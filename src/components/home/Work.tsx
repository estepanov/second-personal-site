import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import WorkItem from './WorkItem'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query WorkSection {
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
        const currentPositions: Work[] = []
        const previousPositions: Work[] = []
        list.forEach(item => {
          if (item.node.fields.type === 'work') {
            // is it current or previous job?
            if (item.node.frontmatter.endDate === '') {
              currentPositions.push(item.node)
            } else {
              previousPositions.push(item.node)
            }
          }
        })
        return {
          currentPositions: currentPositions.sort((a, b) => {
            return new Date(b.frontmatter.startDate) - new Date(a.frontmatter.startDate)
          }),
          previousPositions: previousPositions.sort((a, b) => {
            return new Date(b.frontmatter.endDate) - new Date(a.frontmatter.endDate)
          })
        }
      }, [list])

      return (
        <Box
          sx={{
            marginTop: 2
            // color: 'white'
          }}
        >
          {data.currentPositions.length ? (
            <Flex sx={{ marginBottom: 2, flex: 1, flexWrap: 'wrap' }}>
              <Text as="h4" sx={{ marginRight: 2, fontSize: 2, color: 'mutedText' }}>
                Currently
              </Text>
              {/* <Heading as="h4" sx={{ paddingBottom: 1, fontSize: 3 }}>
                    Currently
                  </Heading> */}
              {data.currentPositions.map(item => {
                return <WorkItem item={item} key={item.id} />
              })}
            </Flex>
          ) : null}
          {data.previousPositions.length ? (
            <Flex sx={{ marginBottom: 2, flex: 1, flexWrap: 'wrap' }}>
              <Text as="h4" sx={{ marginRight: 2, fontSize: 2, color: 'mutedText' }}>
                Previously
              </Text>
              {data.previousPositions.map(item => {
                return <WorkItem item={item} key={item.id} />
              })}
            </Flex>
          ) : null}
        </Box>
      )
    }}
  />
)

export default WorkSection

WorkSection.defaultProps = {}
