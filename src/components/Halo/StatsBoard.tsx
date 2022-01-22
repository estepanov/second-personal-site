import { Box, Flex } from "theme-ui";
import { OverviewStats } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";

const Tile = ({ statKey, stats }: { statKey: OverviewStatsKeys; stats: OverviewStats | null }) => {
  const { title } = getStatOption(statKey);
  const value = stats ? getFormattedStat(stats, statKey) : null;
  return (
    <Flex
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingY: 2,
        paddingX: 4,
        position: "relative",
        width: ["50%", "50%", "25%"],
        height: ["100px", "130px"],
      }}
    >
      <Box
        sx={{
          backgroundColor: "background",
          opacity: 0.8,
          zIndex: 0,
          position: "absolute",
          left: "2px",
          right: "2px",
          top: "2px",
          bottom: "2px",
        }}
      />
      <Flex
        sx={{
          color: "text",
          textTransform: "uppercase",
          fontSize: [1, 3],
          letterSpacing: 2,
          textAlign: "center",
          lineHeight: 1,
          opacity: 0.7,
          zIndex: 1,
        }}
      >
        {title}
      </Flex>
      <Flex
        sx={{
          fontFamily: "nav",
          fontWeight: "display",
          fontSize: [3, 5],
          color: "text",
          lineHeight: 1,
          zIndex: 1,
        }}
      >
        {value}
      </Flex>
    </Flex>
  );
};

interface StatsBoardProps {
  stats: OverviewStats | null;
  statKeys: OverviewStatsKeys[];
}

const StatsBoard = ({ statKeys, stats }: StatsBoardProps) => {
  return (
    <Box>
      <Flex sx={{ flexDirection: "row", flexWrap: "wrap" }}>
        {statKeys.map((statKey) => (
          <Tile key={statKey} statKey={statKey} stats={stats} />
        ))}
      </Flex>
    </Box>
  );
};

export default StatsBoard;
