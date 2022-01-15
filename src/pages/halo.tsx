import React from 'react'
/** @jsx jsx */
import { Box, jsx } from 'theme-ui'
import Layout from '../layouts'

import Container from '../components/Layout/Container'
import SectionHeader from '../components/Layout/SectionHeader'
import StatsBoard from '../components/Halo/StatsBoard'
import useHaloStats, { HaloEndPoints } from '../hooks/useHaloStats'
import { OverviewStats } from '../interfaces/Halo/Stats'
import CompareStatsBoard from '../components/Halo/CompareStatsBoard'

interface HaloPageProps {
  location: Location
}

const HaloPage: React.FC<HaloPageProps> = ({ location }) => {
  const stats = useHaloStats<OverviewStats>(HaloEndPoints.overview);
  return (
    <>
      <Box
        sx={{
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
          backgroundPositionX: 'center',
          backgroundImage: 'url(/halo-infinite-chief-helmet.jpeg)',
          height: '100vh',
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -2,
          opacity: 0.4
        }}
      />
      <Layout wrapped={true} container={false} pathname={location.pathname}>
        <Container>
          <SectionHeader title="My Halo Infinite Stats" />
          <StatsBoard stats={stats} />
          <SectionHeader title="Compare Stats" />
          <CompareStatsBoard />
        </Container>
      </Layout>
    </>

  )
}

export default HaloPage
