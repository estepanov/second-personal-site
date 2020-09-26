import React, { useMemo } from 'react'
import dayjs from 'dayjs'
import { StaticQuery, graphql } from 'gatsby'
/** @jsx jsx */
import { jsx, Flex, Box, Text, Heading } from 'theme-ui'
import relativeTime from 'dayjs/plugin/relativeTime'
import { scaleLinear } from 'd3-scale'
import { ContributionCount } from '../interfaces/GitHub'

dayjs.extend(relativeTime)

const query = graphql`
  query GitHubActivityCalendar {
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
        const levels = 10
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
            weeks: []
          }
          target.weeks.push(week.contributionDays)
          MonthsMap.set(key, target)
        })
        return Array.from(MonthsMap.values()).reverse()
      }, [data.weeks])

      return (
        <Box>
          <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {/* <Heading as="h4" sx={{ paddingBottom: 1, fontSize: 3 }}>
            Github Activity
          </Heading> */}
            {months.map(month => {
              return (
                <Flex sx={{ marginRight: 2 }}>
                  <Flex key={month.month} sx={{ flexDirection: 'column', flexShrink: 0 }}>
                    <Box sx={{ minHeight: '20px', position: 'relative', opacity: 0.3 }}>
                      <Text
                        sx={{
                          fontSize: 0,
                          //  position: 'absolute',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {month.month} {month.year}
                        {/* {displayYear ? <span sx={{ fontWeight: 'bold', marginLeft: 1 }}>{displayYear}</span> : null} */}
                      </Text>
                    </Box>
                    <Flex sx={{ flexShrink: 0, flexDirection: 'column' }}>
                      {month.weeks.map((week, weekInd) => {
                        return (
                          <Flex key={weekInd} sx={{ flexDirection: 'row' }}>
                            {week.map((day, dayInd) => {
                              const scaled = day.contributionCount > 0 ? contributionRange.scale(day.contributionCount) : 0
                              return (
                                <Box
                                  key={`${dayInd}-${day}`}
                                  sx={{
                                    height: 10,
                                    width: 10,
                                    fontSize: 0,
                                    opacity: scaled / contributionRange.levels,
                                    backgroundColor: 'primary',
                                    marginBottom: 1,
                                    marginRight: 1
                                  }}
                                />
                              )
                            })}
                          </Flex>
                        )
                      })}
                    </Flex>
                  </Flex>
                </Flex>
              )
            })}
            {/* <Flex sx={{ flexWrap: 'wrap' }}>
            {data.weeks.map((week, ind, weekArray) => {
              const previousMonth = ind !== 0 ? dayjs(weekArray[ind - 1].firstDay) : null
              const currentMonth = dayjs(week.firstDay)
              const nextMonth = ind !== weekArray.length - 1 ? dayjs(weekArray[ind + 1].firstDay) : null
              const displayMonth =
                (!previousMonth && nextMonth && nextMonth.month() === currentMonth.month()) ||
                  (previousMonth && previousMonth.month() !== currentMonth.month())
                  ? currentMonth.format('MMM')
                  : null
              const displayYear =
                (!previousMonth && nextMonth && nextMonth.year() !== currentMonth.year()) ||
                  (previousMonth && previousMonth.year() !== currentMonth.year())
                  ? currentMonth.format('YYYY')
                  : null

              return (
                <Flex key={week.firstDay} sx={{ flexDirection: 'column', flexShrink: 0 }}>
                  <Box sx={{ minHeight: '20px', position: 'relative', opacity: 0.3 }}>
                    <Text
                      sx={{
                        fontSize: 0,
                        //  position: 'absolute',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      {displayMonth}
                      {displayYear ? <span sx={{ fontWeight: 'bold', marginLeft: 1 }}>{displayYear}</span> : null}
                    </Text>
                  </Box>
                  <Flex sx={{ flexShrink: 0 }}>
                    {week.contributionDays.map((day, dayInd) => {
                      const scaled = day.contributionCount > 0 ? contributionRange.scale(day.contributionCount) : 0
                      return (
                        <Box
                          key={dayInd}
                          sx={{
                            height: 10,
                            width: 10,
                            fontSize: 0,
                            opacity: scaled / contributionRange.levels,
                            backgroundColor: 'primary',
                            marginBottom: 1,
                            marginRight: 1
                          }}
                        />
                      )
                    })}
                  </Flex>
                </Flex>
              )
            })}
          </Flex> */}
          </Flex>
          <Text sx={{ fontStyle: 'italic', marginTop: 2, fontSize: 0, color: 'mutedText', textAlign: 'right' }}>
            GitHub data as of {build.from(now, false)}
          </Text>
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
