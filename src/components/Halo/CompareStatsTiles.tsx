import { Box, Flex } from "theme-ui"
import { CompareStatsBody } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";

const Tile = ({ statKey, stats }: { statKey: OverviewStatsKeys, stats: CompareStatsBody | null }) => {
  const title = getStatOption(statKey).title
  const meValue = stats ? getFormattedStat(stats.me, statKey) : null
  const themValue = stats ? getFormattedStat(stats.tag.data, statKey) : null
  return (
    <Flex sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingY: 2,
      paddingX: 4,
      position: 'relative',
      width: ['100%', '50%', '33%'],
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
            color: 'text',
            lineHeight: 2,
            zIndex: 1,
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: 'mutedText',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
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
            color: 'text',
            lineHeight: 1,
            zIndex: 1,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {themValue}
        </Flex>
      </Flex>
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
