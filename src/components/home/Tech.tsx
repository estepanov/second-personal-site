import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { Work } from '../../interfaces/Work'
import TechLogoGroup from '../projects/TechLogoGroup'
import { techTagFilter } from '../logos/constants'
import { TechRunTimeEnv, TechTypes } from '../../interfaces/TechTag'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query TechSection {
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

const TechSection: React.FC<WorkProps> = () => (
  <StaticQuery
    query={currentQuery}
    render={({ allMdx }) => {
      const list: NodeWork[] = allMdx.edges
      const data = useMemo(() => {
        const allLanguages = new Set<string>()
        const allTech = new Set<string>()
        list.forEach(item => {
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
          allTech: Array.from(allTech)
        }
      }, [list])

      return (
        <React.Fragment>
          <Box
            sx={{
              marginTop: 2
              // backgroundImage: t => `linear-gradient(to bottom left, ${lighten('orange', 0.1)(t)}, ${lighten('yellow', 0.1)(t)})`
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                // flexDirection: ['column', 'row'], flexWrap: 'wrap',
                paddingY: 0,
                fontSize: 5,
                marginTop: 3
              }}
            >
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
            </Flex>
          </Box>
        </React.Fragment>
      )
    }}
  />
)

export default TechSection

TechSection.defaultProps = {}
