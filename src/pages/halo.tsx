/** @jsx jsx */
import { jsx } from 'theme-ui'
import Layout from '../layouts'

import Container from '../components/Layout/Container'
import { StatsOverview } from '../components/Halo/StatsOverview'

interface HaloPageProps {
  location: Location
}

const HaloPage: React.FC<HaloPageProps> = ({ location }) => {
  return (
    <Layout container={false} pathname={location.pathname}>
      <Container>
        <StatsOverview />
      </Container>
    </Layout>
  )
}

export default HaloPage
