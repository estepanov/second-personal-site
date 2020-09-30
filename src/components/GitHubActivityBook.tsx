import React, { useMemo, Fragment } from 'react'
import dayjs from 'dayjs'
import { StaticQuery, graphql } from 'gatsby'
import { lighten } from '@theme-ui/color'
/** @jsx jsx */
import { jsx, Flex, Box, Heading, useThemeUI } from 'theme-ui'
import relativeTime from 'dayjs/plugin/relativeTime'
import { scaleLinear } from 'd3-scale'
import { mix, readableColor } from 'polished'
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

const SIZES = [18, 22]

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
      const { theme } = useThemeUI()

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
          <Heading as="h2" sx={{ paddingBottom: 1 }}>
            Github Activity
            <span sx={{ fontSize: 0, color: 'mutedText', marginLeft: 2 }}>as of {build.from(now, false)}</span>
          </Heading>
          <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {months.map(month => {
              return (
                <Fragment key={`${month.year}${month.month}`}>
                  {month.days.map((day, dayInd) => {
                    const scaled = day.contributionCount > 0 ? contributionRange.scale(day.contributionCount) : 0
                    const backgroundColor =
                      scaled > 0
                        ? mix(scaled / contributionRange.levels, theme.colors.primary, theme.colors.background)
                        : mix(0.04, theme.colors.text, theme.colors.background)
                    return (
                      <Box
                        key={`${dayInd}-${day}`}
                        sx={{
                          height: SIZES,
                          width: SIZES,
                          fontSize: 0,
                          backgroundColor,
                          marginBottom: 1,
                          marginRight: 1,

                          position: 'relative',
                          '& span': {
                            overflow: 'hidden',
                            zIndex: 1,
                            pointerEvents: 'none',
                            maxHeight: SIZES,
                            maxWidth: SIZES,
                            whiteSpace: 'nowrap',
                            // transform: 'scale(1)',
                            paddingX: 2,
                            paddingY: 1,
                            transition: 'ease-out 0.5s',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            visibility: 'hidden',
                            color:
                              scaled !== 0
                                ? theme.colors.white
                                : readableColor(backgroundColor, theme.colors.white, theme.colors.black, true),
                            backgroundColor,
                            backgroundImage:
                              scaled > 0
                                ? `linear-gradient(to bottom left, ${lighten('primary', 0.0)(theme)}, ${backgroundColor})`
                                : undefined,
                            opacity: 0,
                            fontSize: 0
                          },
                          '&:hover': {
                            '& span': {
                              maxHeight: '4em',
                              whiteSpace: 'nowrap',
                              maxWidth: '10em',
                              // transform: 'scale(1)',
                              visibility: 'visible',
                              display: 'block',
                              opacity: 1
                            },
                            color: 'primary'
                          },
                          '&:focus': {
                            '& span': {
                              maxHeight: '4em',
                              whiteSpace: 'nowrap',
                              maxWidth: '10em',
                              // transform: 'scale(1)',
                              visibility: 'visible',
                              display: 'block',
                              opacity: 1
                            },
                            color: 'primary'
                          }
                        }}
                      >
                        <span>
                          <b sx={{ fontSize: '1.1em' }}>{day.contributionCount}</b>&nbsp;commit
                          {day.contributionCount > 1 || day.contributionCount === 0 ? 's' : ''}
                          <br />
                          {dayjs(day.date).format('MMM D YYYY')}
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
