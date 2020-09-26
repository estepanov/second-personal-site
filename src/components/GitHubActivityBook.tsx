import React, { useMemo, Fragment } from 'react'
import dayjs from 'dayjs'
import { StaticQuery, graphql } from 'gatsby'
import { transparentize, lighten } from '@theme-ui/color'
/** @jsx jsx */
import { jsx, Flex, Box, Heading } from 'theme-ui'
import relativeTime from 'dayjs/plugin/relativeTime'
import { scaleLinear } from 'd3-scale'
import { ContributionCount } from '../interfaces/GitHub'

dayjs.extend(relativeTime)

const query = graphql`
  query GitHubActivityBook {
    site {
      siteMetadata {
        buildDate
      }
    }

    githubData {
      data {
        viewer {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
                firstDay
              }
            }
          }
        }
      }
    }
  }
`

interface GitHubActivityMonths {
  month: string
  year: string | number
  weeks: ContributionCount[][]
  days: ContributionCount[]
}
export interface GitHubActivityProps {
  title?: string | null
  description?: string | null
  image?: string | null
  pathname?: string | null
  article?: boolean
}

const GitHubActivity: React.FC<GitHubActivityProps> = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { buildDate }
      },
      githubData: {
        data: {
          viewer: {
            contributionsCollection: { contributionCalendar }
          }
        }
      }
    }) => {
      const data: ContributionCalendarWeeks = contributionCalendar

      const contributionRange = useMemo(() => {
        const allPossibleValues = []
        let max = 0
        data.weeks.forEach(week => {
          week.contributionDays.forEach(day => {
            if (day.contributionCount > max) max = day.contributionCount
            if (day.contributionCount > max) max = day.contributionCount
            allPossibleValues.push(day.contributionCount)
          })
        })
        const levels = 5
        const scale = scaleLinear([0, max], [1, levels])
        return {
          levels,
          max,
          scale
        }
      }, [data])

      const now = dayjs()
      const build = dayjs(buildDate)

      const months: GitHubActivityMonths[] = useMemo(() => {
        const MonthsMap = new Map<string, GitHubActivityMonths>()
        data.weeks.forEach(week => {
          const firstDay = dayjs(week.firstDay)
          const year = firstDay.year()
          const key = `${year}-${firstDay.month()}`
          const target = MonthsMap.get(key) || {
            month: firstDay.format('MMMM'),
            year,
            weeks: [],
            days: []
          }
          target.weeks.push(week.contributionDays)
          target.days = target.days
            .concat(week.contributionDays)
            .sort((a, b) => {
              const first = new Date(a.date).getTime()
              const second = new Date(b.date).getTime()
              return first > second ? 1 : -1
            })
            .reverse()
          MonthsMap.set(key, target)
        })

        return Array.from(MonthsMap.values()).reverse()
      }, [data.weeks])

      return (
        <Box>
          <Heading as="h4" sx={{ paddingBottom: 1, fontSize: 3 }}>
            Github Activity
            <span sx={{ fontSize: 0, color: 'mutedText', marginLeft: 2 }}>as of {build.from(now, false)}</span>
          </Heading>
          <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {months.map(month => {
              return (
                <Fragment key={`${month.year}${month.month}`}>
                  {month.days.map((day, dayInd) => {
                    const scaled = day.contributionCount > 0 ? contributionRange.scale(day.contributionCount) : 0
                    return (
                      <Box
                        key={`${dayInd}-${day}`}
                        sx={{
                          height: 15,
                          width: 15,
                          fontSize: 0,
                          backgroundColor:
                            scaled > 0 ? transparentize('primary', 1 - scaled / contributionRange.levels) : transparentize('text', 0.9),
                          marginBottom: 1,
                          marginRight: 1,

                          position: 'relative',
                          cursor: 'pointer',
                          transition: 'ease-in 0.3s',
                          '& span': {
                            width: '110px',
                            transform: 'scale(0.95)',
                            padding: 2,
                            transition: 'ease-in 0.3s',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            visibility: 'hidden',
                            pointerEvents: 'none',
                            color: 'white',
                            // backgroundColor: 'primary',
                            backgroundImage: t => `linear-gradient(to bottom right, ${lighten('primary', 0.2)(t)}, ${t.colors.primary})`,
                            // backgroundImage: t =>
                            //   `linear-gradient(to top left, ${lighten('primary', 0.1)(t)}, ${darken('primary', 0.1)(t)})`,
                            opacity: 0,
                            fontSize: 0
                          },
                          '&:hover': {
                            '& span': {
                              transform: 'scale(1)',
                              pointerEvents: 'auto',
                              visibility: 'visible',
                              display: 'block',
                              opacity: 1,
                              bottom: '110%'
                            },
                            color: 'primary'
                          },
                          '&:focus': {
                            '& span': {
                              transform: 'scale(1)',
                              pointerEvents: 'auto',
                              visibility: 'visible',
                              display: 'block',
                              opacity: 1,
                              bottom: '110%'
                            },
                            color: 'primary'
                          }
                        }}
                      >
                        <span>
                          <b>{day.contributionCount}</b>&nbsp; {dayjs(day.date).format('MMM D YYYY')}
                        </span>
                      </Box>
                    )
                  })}
                </Fragment>
              )
            })}
          </Flex>
        </Box>
      )
    }}
  />
)

export default GitHubActivity

GitHubActivity.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
}
