import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Box, Flex, Container } from "theme-ui"
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats"
import { useStatsCycleHook } from "../../hooks/useStatsCycleHook"
import { OverviewStats } from "../../interfaces/Halo/Stats"
import { OverviewStatsKeys } from "../../utils/haloStatFormatter"
import { shuffleArray } from "../../utils/shuffle"
import { StatSquareMini } from "./elements/StatSquareMini"

const STAT_OPTIONS: OverviewStatsKeys[] = shuffleArray([
  OverviewStatsKeys.MatchesPlayed,
  OverviewStatsKeys.CoreSummaryAssists,
  OverviewStatsKeys.CoreShotsFired,
  OverviewStatsKeys.CoreShotsMissed,
  OverviewStatsKeys.CoreShotsLanded,
  OverviewStatsKeys.CoreShotsAccuracy,
  OverviewStatsKeys.CoreSummaryVehiclesDestroys,
  OverviewStatsKeys.CoreSummaryVehiclesHijacks,
  OverviewStatsKeys.CoreSummaryMedals,
  OverviewStatsKeys.CoreBreakdownsMatchesWins,
  OverviewStatsKeys.CoreBreakdownsAssistsDriver,
  OverviewStatsKeys.CoreBreakdownsAssistsCallouts,
  OverviewStatsKeys.WinRate,
])

const INTERVAL = 4200
export const StatsOverview = () => {
  const stats = useHaloStats<OverviewStats>(HaloEndPoints.overview)
  const [option, stat] = useStatsCycleHook(STAT_OPTIONS, stats, INTERVAL)

  return <Flex
    sx={{
      borderTopWidth: 1,
      borderTopColor: 'muted',
      borderTopStyle: 'solid',
      borderBottomWidth: 1,
      borderBottomColor: 'muted',
      borderBottomStyle: 'solid',
      paddingY: [4, 4],
      paddingX: 3,
      height: ['100vh', '350px'],
      minHeight: [400, 350],
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',

    }}
  >
    <Box
      sx={{
        position: 'absolute',
        zIndex: -1,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        minHeight: '100%',
        minWidth: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
      }}
    >
      <video
        id="background-video"
        autoPlay
        loop
        muted
        playsInline
        poster="/halo-infinite-chief-helmet.jpeg"
        sx={{ minWidth: '100vw', minHeight: ['100vh', '300px'] }}
      >
        <source src="https://estepanov.s3.amazonaws.com/halo-infinite-mini-mod.webm" type="video/webm" />
        <source src="https://estepanov.s3.amazonaws.com/halo-infinite-mini-mod.mp4" type="video/mp4" />
      </video>
    </Box>
    <Container sx={{
      position: 'relative',
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      height: ['100%'],
      maxWidth: '1024px',
      display: 'flex'
    }}>
      {
        option &&
        <Flex sx={{
          flexDirection: 'column',
          width: ['100%', 'auto']
        }}>
          <StatSquareMini key={option.title} title={option.title} value={stat} />
          <Link
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: 'black',
              alignItems: 'center',
              color: 'white',
              paddingX: 3,
              paddingY: 2,
              width: ['100%', '170'],
              textDecoration: 'none',
              lineHeight: '1rem',
              fontWeight: 'bold',
              fontSize: 1,
              borderColor: 'white',
              borderWidth: 1,
              borderStyle: 'solid',
              transform: 'scale(1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'white',
                color: 'black'
              }
            }}
            to="/halo"><span>View More</span><span sx={{ paddingLeft: 2 }}>&#10095;</span>
          </Link>
        </Flex>
      }
    </Container >
    <Flex
      sx={{
        position: 'absolute',
        right: 2,
        bottom: 1,
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9
      }}
    >
      <Box sx={{
        color: 'white',
        fontSize: '10px',
      }}>
        Halo © Microsoft
      </Box>
    </Flex>
  </Flex >
}

