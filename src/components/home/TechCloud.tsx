/** @jsx jsx */
import { jsx, Box, Flex, Heading, useThemeUI } from 'theme-ui'
import { useMemo, useState } from 'react'
import { css } from '@emotion/react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { StaticQuery, graphql, Link } from 'gatsby'
import { readableColor, opacify } from 'polished'
import { Work } from '../../interfaces/Work'
import TAG_MAP from '../logos/constants'
import { TechRunTimeEnv, TechTypes, TechTag } from '../../interfaces/TechTag'
import TechLogo from '../projects/TechLogoBig'
import TinyButton from '../elements/TinyButton'

interface NodeWork {
  node: Work
}

const TIMEOUT = 1000

const TRANSITION = 'ease'

const transitionStyles = {
  entering: {
    opacity: 0,
    transform: 'scale(0.5)',
    maxWidth: 0
  },
  entered: {
    opacity: 1,
    transform: 'none',
    maxWidth: '20em'
  },
  exiting: {
    opacity: 0,
    transform: 'scale(0.5)',
    maxWidth: 0
  },
  exited: {
    opacity: 0,
    transform: 'scale(0)',
    maxWidth: 0
  }
}

const baseStyle = {
  display: 'inline-block',
  transition: `all ${TRANSITION} ${TIMEOUT}ms`
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
const highlightFilter = (highlight?: TechFilter) => (a: string) => {
  if (!highlight) return true
  return TAG_MAP[a].includes.includes(highlight.target)
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
  backgroundColor: string | any
  tag: keyof typeof TAG_MAP
  highlight?: TechFilter
  isLink?: boolean
}

const LogoContainer: React.FC<LogoContrainerProps> = ({ tag, highlight, backgroundColor, isLink }) => {
  const isHighlighted = highlight && TAG_MAP[tag].includes?.includes(highlight.target)

  const logo = (
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
        backgroundColor,
        transition: 'all 0.3s ease-in-out',
        svg: {
          cursor: isLink ? 'pointer' : 'default',
          transition: 'all 0.3s ease-in-out',
          color: 'text'
        },
        '&:hover': {
          backgroundColor: TAG_MAP[tag].color,
          svg: {
            color: readableColor(TAG_MAP[tag].color)
          },
          '& > span': {
            zIndex: 1,
            maxHeight: '13em',
            maxWidth: '13em',
            bottom: '100%',
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'flex',
            opacity: 1
          }
        },
        '&:focus': {
          backgroundColor: TAG_MAP[tag].color,
          svg: {
            color: readableColor(TAG_MAP[tag].color)
          },
          '& span': {
            bottom: '100%',
            maxHeight: '13em',
            maxWidth: '13em',
            transform: 'scale(1)',
            visibility: 'visible',
            display: 'flex',
            opacity: 1
          }
        }
      }}
    >
      <Box
        sx={{
          zIndex: 1,
          opacity: highlight && !isHighlighted ? 0.2 : 1
        }}
      >
        <TechLogo tag={tag} />
      </Box>
      <span
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          maxHeight: 0,
          maxWidth: 0,
          zIndex: 2,
          overflow: 'hidden',
          fontFamily: 'heading',
          fontWeight: 'heading',
          color: readableColor(TAG_MAP[tag].color),
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          transition: 'ease 0.3s',
          wordBreak: 'keep-all',
          paddingX: 2,
          paddingY: 1,
          position: 'absolute',
          bottom: '70%',
          left: 0,
          visibility: 'hidden',
          backgroundColor: opacify(0.4)(TAG_MAP[tag].color),
          opacity: 0,
          fontSize: 1,
          transform: 'scale(1)'
        }}
      >
        {TAG_MAP[tag].name}
      </span>
    </Box>
  )

  if (isLink) {
    return <Link to={`/technology/${tag}`} sx={{ color: 'unset' }}>
      {logo}
    </Link>
  }
  return logo
}

const TechCloudSection: React.FC<WorkProps> = () => (
  <StaticQuery
    query={currentQuery}
    render={({ allMdx }) => {
      const { theme } = useThemeUI()

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

        const allTechArr = Array.from(allTech).sort(techSort)
        const allLanguagesArr = Array.from(allLanguages).sort(techSort)
        return {
          all: [...allLanguagesArr, ...allTechArr],
          allLanguages: allLanguagesArr,
          allTech: allTechArr
        }
      }, [list])

      const [highlight, setHighlight] = useState<TechFilter>()
      let tags = data.all
      if (highlight) {
        tags = tags.filter(highlightFilter(highlight))
      }
      const boxBackgroundColor = theme.colors?.muted
      return (
        <Box
          sx={{
            marginTop: 4
          }}
        >
          <Heading id="technologies" as="h2">
            Technologies&nbsp;
          </Heading>
          <div sx={{ fontSize: 1, fontFamily: 'heading', color: 'mutedText', marginBottom: 2, marginTop: 2 }}>
            {FILTERS.map(filter => {
              const isSelected = highlight && filter.name === highlight.name
              return (
                <TinyButton key={filter.name} onClick={() => setHighlight(isSelected ? undefined : filter)} isSelected={isSelected}>
                  {filter.name.toLowerCase()}
                </TinyButton>
              )
            })}
          </div>
          <Flex
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingY: 0
            }}
          >
            <TransitionGroup component={null}>
              {tags.map(tag => {
                const isHighlighted = highlight && TAG_MAP[tag].includes?.includes(highlight.target)
                return (
                  <Transition key={tag} in={!highlight || (highlight && isHighlighted)} mountOnEnter unmountOnExit timeout={TIMEOUT}>
                    {state => {
                      return (
                        <div css={css({ ...baseStyle, ...transitionStyles[state] })}>
                          <LogoContainer backgroundColor={boxBackgroundColor} highlight={highlight} tag={tag} isLink={true} />
                        </div>
                      )
                    }}
                  </Transition>
                )
              })}
            </TransitionGroup>
          </Flex>
        </Box>
      )
    }}
  />
)

export default TechCloudSection
