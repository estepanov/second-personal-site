import React from "react"
import dayjs from "dayjs";
import { Box, Flex, Spinner } from "theme-ui";
import { OverviewStats } from "../../interfaces/Halo/Stats";
import StatsBoard from "./StatsBoard";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { OverviewStatsKeys } from "../../utils/haloStatFormatter";
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";

dayjs.extend(localizedFormat)

interface SoloStatsBoardProps {
  statKeys: OverviewStatsKeys[];
}

const SoloStatsBoard = ({ statKeys }: SoloStatsBoardProps) => {
  const [stats, loading] = useHaloStats<OverviewStats>(HaloEndPoints.overview)

  if (loading) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Spinner size={50} sx={{
          color: 'secondary',
          zIndex: 1
        }} />
        <Box sx={{
          fontSize: 2,
          paddingTop: 3,
          zIndex: 1
        }}>
          Fetching latest multiplayer stats
        </Box>
        <Box sx={{
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'background',
          opacity: 0.8,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }} />
      </Flex>
    )
  }
  return (
    <>
      <StatsBoard statKeys={statKeys} stats={stats} />
      {stats?.fetchedOn && <Box sx={{ fontSize: '10px', paddingY: 2, opacity: 0.8 }}>
        Stats as of {dayjs(stats?.fetchedOn).format('LLLL')}
      </Box>
      }
    </>
  )
}

export default SoloStatsBoard;
