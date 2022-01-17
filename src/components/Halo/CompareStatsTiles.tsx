import { Box, Flex } from "theme-ui"
import { CompareStatsBody } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";

const Tile = ({ statKey, stats }: { statKey: OverviewStatsKeys, stats: CompareStatsBody | null }) => {
  const { title, biggerBetter } = getStatOption(statKey)
  const rawMeValue = stats ? getStat(stats.me, statKey) : null
  const rawThemValue = stats ? getStat(stats.tag.data, statKey) : null
  const meValue = stats ? getFormattedStat(stats.me, statKey) : null
  const themValue = stats ? getFormattedStat(stats.tag.data, statKey) : null
  const isDraw = stats && rawMeValue === rawThemValue
  const iWon = biggerBetter ? rawMeValue > rawThemValue : rawMeValue < rawThemValue;
  return (
    <Flex sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingY: 2,
      paddingX: 4,
      position: 'relative',
      width: ['100%', '50%', '33.33%'],
      height: ['100px', '130px'],

    }}>
      <Box sx={{
        backgroundColor: 'background',
        opacity: 0.8,
        zIndex: 0,
        position: 'absolute',
        left: '2px',
        right: '2px',
        top: '2px',
        bottom: '2px'
      }} />
      <Flex
        sx={{
          color: 'text',
          textTransform: 'uppercase',
          fontSize: [1, 3],
          letterSpacing: 2,
          textAlign: 'center',
          lineHeight: 1,
          opacity: 0.7,
          zIndex: 1,
        }}
      >
        {title}
      </Flex>
      <Flex sx={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
      }}>
        <Flex
          sx={{
            flexDirection: 'column',
            fontFamily: 'nav',
            fontWeight: 'display',
            fontSize: [2, 3],
            color: iWon ? 'primary' : 'text',
            lineHeight: 2,
            zIndex: 1,
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: 'mutedText',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          {meValue}
        </Flex>
        <Flex
          sx={{
            flexDirection: 'column',
            fontFamily: 'nav',
            fontWeight: 'display',
            fontSize: [2, 3],
            lineHeight: 2,
            zIndex: 1,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            color: !iWon && !isDraw ? 'secondary' : 'text',
          }}
        >
          {themValue}
        </Flex>
      </Flex>
      <Box sx={{
        zIndex: 1,
        padding: 1,
        fontSize: 0,
        color: isDraw ? 'text' : iWon ? 'primary' : 'secondary',

      }}>
        {isDraw ? 'DRAW' : iWon ? 'EVANS' : `${stats?.tag.name}`.toUpperCase()}
      </Box>
    </Flex>
  )
}

interface CompareStatsTilesProps {
  stats: CompareStatsBody | null;
  statKeys: OverviewStatsKeys[]
}

const CompareStatsTiles = ({ statKeys, stats }: CompareStatsTilesProps) => {
  return <Box>
    <Flex sx={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {statKeys.map(statKey => <Tile key={statKey} statKey={statKey} stats={stats} />)}
    </Flex>
  </Box>
}

export default CompareStatsTiles;
