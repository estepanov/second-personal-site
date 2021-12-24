import { Link } from "gatsby"
import { useState, useEffect } from "react"
/** @jsx jsx */
import { jsx, Box, Donut, Flex, Image } from "theme-ui"
import { useCountDown } from "../../hooks/useCountDown"
import { StatOption, useStatsHook } from "../../hooks/useStatsHook"
import { OverviewStats, OverviewStatsResponse } from "../../interfaces/Halo/Stats"
import { api } from "../../Request"
import { shuffleArray } from "../../utils/shuffle"
import { StatSquare } from "./elements/StatSquare"

const STAT_OPTIONS: StatOption[] = shuffleArray([
  {
    accessor: 'matches_played',
    title: 'Matches',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.summary.assists',
    title: 'Assists',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.shots.fired',
    title: 'Shots Fired',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.shots.missed',
    title: 'Shots Missed',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.shots.landed',
    title: 'Shots Landed',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.shots.accuracy',
    title: 'accuracy',
    format: val => `${val?.toFixed(2)}%`
  },
  {
    accessor: 'core.summary.vehicles.destroys',
    title: 'Vehicles Destroyed',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.summary.vehicles.hijacks',
    title: 'Vehicles Hijacked',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.summary.medals',
    title: 'Medals',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.breakdowns.matches.wins',
    title: 'Wins',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.breakdowns.assists.driver',
    title: 'Driver Assists',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'core.breakdowns.assists.callouts',
    title: 'Callout Assists',
    format: val => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  },
  {
    accessor: 'win_rate',
    title: 'Win Rate',
    format: val => `${val?.toFixed(2)}%`
  },
])

const INTERVAL = 3500
export const StatsOverview = () => {
  const [stats, setStats] = useState<null | OverviewStats>(null)
  useEffect(() => {
    const fetch = async () => {
      const response = await api.get<OverviewStatsResponse>('/halo/stats/overview')
      setStats(response.data.data)
    }
    fetch()
  }, []);
  const [option, stat] = useStatsHook(STAT_OPTIONS, stats, INTERVAL)
  const [timeLeft] = useCountDown(INTERVAL, 50)

  return <Flex
    sx={{
      borderTopWidth: 1,
      borderTopColor: 'muted',
      borderTopStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: 'muted',
      borderBottomStyle: 'solid',
      paddingY: 10,
      paddingX: 3,
      minHeight: 200,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative'
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: '30%',
        backgroundImage: 'url(/halo-infinite-chief-helmet.jpeg)',
      }}
    />
    <Flex
      sx={{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        width: '100%'
      }}
    >
      <Image sx={{ marginBottom: 3 }} width="130px" src="/halo-infinite-logo.png" alt="Halo Infinite logo" />
      {option ? <StatSquare title={option.title} value={stat} /> : 'There was a problem fetching my stats'}
      {option && <Flex
        sx={{
          position: ['relative', 'absolute'],
          left: 0,
          bottom: 0,
          flexDirection: ['column', 'row'],
          justifyContent: 'center',
          alignItems: 'center',
          marginY: [2, 3]
        }}
      >
        <Link
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black',
            color: 'white',
            // borderRadius: 10,
            paddingX: 4,
            paddingY: 2,
            textDecoration: 'none',
            lineHeight: '1rem',
            fontSize: 0,
          }}
          to="/halo">view more</Link>
      </Flex>}
      {option ? <Donut
        sx={{
          position: 'absolute',
          right: 1,
          bottom: 1,
          color: 'muted'
        }}
        size={40}
        strokeWidth={5}
        value={timeLeft ? timeLeft / INTERVAL : 0}
      /> : null}
    </Flex>
  </Flex>
}

