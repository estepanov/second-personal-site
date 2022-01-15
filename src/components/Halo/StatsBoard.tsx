import { Box, Flex } from "theme-ui"
import { OverviewStats } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";

const Tile = ({ statKey, stats }: { statKey: OverviewStatsKeys, stats: OverviewStats | null }) => {
  const title = getStatOption(statKey).title
  const value = stats ? getFormattedStat(stats, statKey) : null
  return (
    <Flex sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingY: 2,
      paddingX: 4,
      position: 'relative',
      marginRight: 1,
      marginBottom: 1,
      width: ['45%', '33%', '24%'],
      height: ['100px', '130px'],

    }}>
      <Box sx={{
        backgroundColor: 'background',
        opacity: 0.5,
        zIndex: -1,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }} />
      <Flex
        sx={{
          fontFamily: 'nav',
          fontWeight: 'display',
          fontSize: [3, 5],
          color: 'text',
          lineHeight: 1
        }}
      >
        {value}
      </Flex>
      <Flex
        sx={{
          color: 'text',
          textTransform: 'uppercase',
          fontSize: [1, 3],
          letterSpacing: 2,
          textAlign: 'center',
          lineHeight: 1,
          opacity: 0.7
        }}
      >
        {title}
      </Flex>
    </Flex>
  )
}

interface StatsBoardProps {
  stats: OverviewStats | null
}

const ROW_STATS = [
  OverviewStatsKeys.CoreSummaryKills,
  OverviewStatsKeys.CoreSummaryAssists,
  OverviewStatsKeys.CoreSummaryDeaths,
  OverviewStatsKeys.CoreSummaryBetrayals,
  OverviewStatsKeys.CoreSummaryMedals,
  OverviewStatsKeys.CoreSummarySuicides,
  OverviewStatsKeys.CoreSummaryVehiclesDestroys,
  OverviewStatsKeys.CoreSummaryVehiclesHijacks,
  OverviewStatsKeys.CoreShotsFired,
  OverviewStatsKeys.CoreShotsLanded,
  OverviewStatsKeys.CoreShotsMissed,
  OverviewStatsKeys.CoreShotsAccuracy,
]

const StatsBoard = ({ stats }: StatsBoardProps) => {
  return <Box>
    <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {ROW_STATS.map(statKey => <Tile key={statKey} statKey={statKey} stats={stats} />)}
    </Flex>
  </Box>
}

export default StatsBoard;
