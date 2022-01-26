import dayjs from "dayjs";
import { Box, Flex, Message, Spinner } from "theme-ui";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { OverviewStats } from "../../interfaces/Halo/Stats";
import StatsBoard from "./StatsBoard";
import { OverviewStatsKeys } from "../../utils/haloStatFormatter";
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import MedalsBoard from "./MedalsBoard";

dayjs.extend(localizedFormat);

interface SoloStatsBoardProps {
  statKeys: OverviewStatsKeys[];
}

const SoloStatsBoard = ({ statKeys }: SoloStatsBoardProps) => {
  const [stats, loading, error] = useHaloStats<OverviewStats>(HaloEndPoints.overview);

  if (error) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            fontSize: 2,
            paddingTop: 3,
            zIndex: 1,
          }}
        >
          <Message
            sx={{
              backgroundColor: "red",
              borderLeftWidth: 0,
              color: "white",
              marginBottom: 2,
              borderRadius: 0,
            }}
          >
            There was an error fetching my stats. Please try again later.
          </Message>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            backgroundColor: "background",
            opacity: 0.8,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Flex>
    );
  }
  if (!stats && loading) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Spinner
          size={50}
          sx={{
            color: "secondary",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            fontSize: 2,
            paddingTop: 3,
            zIndex: 1,
          }}
        >
          Fetching latest multiplayer stats
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            backgroundColor: "background",
            opacity: 0.8,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Flex>
    );
  }
  return (
    <Box sx={{ marginBottom: 4 }}>
      <StatsBoard statKeys={statKeys} stats={stats} />
      <MedalsBoard stats={stats} />
      {stats?.fetchedOn && (
        <Box sx={{ fontSize: "10px", paddingY: 2, opacity: 0.8 }}>Stats as of {dayjs(stats?.fetchedOn).format("LLLL")}</Box>
      )}
    </Box>
  );
};

export default SoloStatsBoard;
