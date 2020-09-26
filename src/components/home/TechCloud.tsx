import React, { Fragment, useMemo, useState } from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading, useThemeUI } from 'theme-ui'
// import { lighten } from '@theme-ui/color'

import { StaticQuery, graphql } from 'gatsby'

import { mix, readableColor } from 'polished'
import { Work } from '../../interfaces/Work'
import TAG_MAP from '../logos/constants'
import { TechRunTimeEnv, TechTypes, TechTag } from '../../interfaces/TechTag'
import TechLogo from '../projects/TechLogoBig'

interface NodeWork {
  node: Work
}

const currentQuery = graphql`
  query TechCloudSection {
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

const techSort = (a: string, b: string) => {
  const left = TAG_MAP[a] || {}
  const right = TAG_MAP[b] || {}
  if (left.order > right.order) return 1
  if (left.order < right.order) return -1
  if (a > b) return 1
  if (a < b) return -1
  return 0
}

interface TechFilter {
  name: string
  key: keyof TechTag
  target: string | number | TechTypes | TechRunTimeEnv
}

const highlightSort = (highlight?: TechFilter) => (a: string, b: string) => {
  if (!highlight) return 0
  const left = TAG_MAP[a].includes.includes(highlight.target)
  const right = TAG_MAP[b].includes.includes(highlight.target)
  return left === right ? 0 : left ? -1 : 1
}

const FILTERS: TechFilter[] = [
  { name: 'Languages', key: 'type', target: TechTypes.language },
  {
    name: 'Backend',
    key: 'environment',
    target: TechRunTimeEnv.backend
  },
  {
    name: 'Frontend',
    key: 'environment',
    target: TechRunTimeEnv.frontend
  },
  { name: 'Database', key: 'type', target: TechTypes.database },
  { name: 'Testing', key: 'type', target: TechTypes.testing },
  { name: 'DevOps', key: 'type', target: TechTypes.devops },
  { name: 'Deployment', key: 'type', target: TechTypes.deployment }
]

interface LogoContrainerProps {
  tag: keyof typeof TAG_MAP
  highlight?: TechFilter
}

const LogoContainer: React.FC<LogoContrainerProps> = ({ tag, highlight }) => {
  const { theme } = useThemeUI()
  const isHighlighted = highlight && TAG_MAP[tag].includes?.includes(highlight.target)
  // const isHighlighted = highlight && TAG_MAP[tag][highlight.key] === highlight.target
  return (
    <Box
      sx={{
        marginRight: 1,
        marginBottom: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        fontSize: ['2.5em', '2.8em'],
        height: '2em',
        width: '2em',
        backgroundColor:
          !highlight || (highlight && isHighlighted) ? mix(0.04, theme.colors.text, theme.colors.background) : theme.colors?.background,
        '&:hover': {
          '& #sub': {
            // maxHeight: '1.7em',
            // minWidth: '1.7em',
            maxHeight: '13em',
            maxWidth: '13em',
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'flex',
            opacity: 1
            // bottom: '105%'
          }
        },
        '&:focus': {
          '& #sub': {
            maxHeight: '13em',
            maxWidth: '13em',
            // minWidth: '1.7em',
            // maxWidth: '13em',
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'flex',
            opacity: 1
            // bottom: '105%'
          }
        }
      }}
    >
      <Box
        sx={{
          opacity: highlight && !isHighlighted ? 0.2 : 1
        }}
      >
        <TechLogo tag={tag} />
      </Box>
      <span
        id="sub"
        sx={{
          display: 'flex',
          alignItems: 'center',
          maxHeight: 0,
          maxWidth: 0,
          zIndex: 1,
          // height: '100%',
          color: readableColor(TAG_MAP[tag].color),
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          transition: 'ease-in-out 0.7s',
          wordBreak: 'keep-all',
          padding: 2,
          position: 'absolute',
          bottom: 0,
          left: 0,
          visibility: 'hidden',
          backgroundColor: TAG_MAP[tag].color,
          opacity: 0,
          fontSize: 1,
          transform: 'scale(1)'
        }}
      >
        {TAG_MAP[tag].name}
      </span>
    </Box>
  )
}

const TechCloudSection: React.FC<WorkProps> = () => (
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

        const unsortedAllTech = Array.from(allTech)
        return {
          allLanguages: Array.from(allLanguages).sort(techSort),
          allTech: unsortedAllTech.sort(techSort)
        }
      }, [list])

      const [highlight, setHighlight] = useState<TechFilter>()

      return (
        <Box
          sx={{
            marginTop: 4
            // backgroundImage: t => `linear-gradient(to bottom left, ${lighten('orange', 0.1)(t)}, ${lighten('yellow', 0.1)(t)})`
          }}
        >
          <Heading id="technologies" as="h2" sx={{ paddingBottom: 1 }}>
            Technologies&nbsp;
            <span sx={{ display: ['block', 'inline-block'], fontSize: 0, color: 'mutedText' }}>
              filter by:&nbsp;
              {FILTERS.map((filter, ind) => {
            const isSelected = highlight && filter.name === highlight.name
            return (
              <Fragment key={filter.name}>
                <span
                  sx={{
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                      textDecoration: 'underline'
                    },
                    color: isSelected ? 'text' : 'mutedText'
                  }}
                  onClick={() => setHighlight(isSelected ? undefined : filter)}
                >
                  {filter.name.toLowerCase()}
                </span>
                    &nbsp;
                {FILTERS.length - 1 !== ind ? ' / ' : null}
              </Fragment>
            )
          })}
            </span>
          </Heading>
          <Flex
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingY: 0
            }}
          >
            {[...data.allLanguages, ...data.allTech.sort(techSort)].sort(highlightSort(highlight)).map(tag => (
              <LogoContainer highlight={highlight} key={tag} tag={tag} />
            ))}
          </Flex>
        </Box>
      )
    }}
  />
)

export default TechCloudSection
