import React from "react"
import dayjs from "dayjs";
import { Box, Flex, Spinner } from "theme-ui";
import { CompareStatsBody } from "../../interfaces/Halo/Stats";
import CompareStatsTiles from "./CompareStatsTiles";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { OverviewStatsKeys } from "../../utils/haloStatFormatter";

dayjs.extend(localizedFormat)

interface CompareStatsBoardProps {
  stats: CompareStatsBody | null;
  loading: boolean;
  statKeys: OverviewStatsKeys[];
}

const CompareStatsBoard = ({ statKeys, stats, loading }: CompareStatsBoardProps) => {
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
          Fetching multiplayer stats
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
  if (!stats) {
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
        <Box sx={{
          fontSize: 3,
          zIndex: 1,
          fontWeight: 'bold',
        }}>
          Lets see who is better
        </Box>
        <Box sx={{
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'background',
          opacity: 0.6,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }} />
      </Flex>
    )
  }
  const hasFetchedOn = stats?.me?.fetchedOn || stats?.tag.data?.fetchedOn
  return (
    <>
      <CompareStatsTiles statKeys={statKeys} stats={stats} />
      {hasFetchedOn && <Box sx={{ fontSize: '10px', paddingY: 2, opacity: 0.8 }}>
        {stats?.me?.fetchedOn && <Box>My stats as of {dayjs(stats?.me?.fetchedOn).format('LLLL')}</Box>}
        {stats?.tag.data?.fetchedOn && <Box>{stats?.tag?.name} stats as of {dayjs(stats?.me?.fetchedOn).format('LLLL')}</Box>}
        <Box>
          To minimize impact on various services and tools, data is cached for atleast one hour.
        </Box>
      </Box>
      }
    </>
  )
}

export default CompareStatsBoard;
