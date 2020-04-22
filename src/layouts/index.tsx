import React from 'react'
import { Flex } from 'theme-ui'
import { Global } from '@emotion/core'

import 'modern-normalize'

import SEO from '../components/SEO'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import globalStyle from '../styles/globalStyle'
import Container from '../components/Layout/Container'

const IndexLayout: React.FC = ({ children }) => (
  <>
    <Global styles={globalStyle} />
    <SEO />
    <Flex
      sx={{
        height: '100%',
        flexDirection: 'column'
      }}
    >
      <Header />
      <Container sx={{ flex: '1 0 auto' }}>{children}</Container>
      <Container>
        <Footer />
      </Container>
    </Flex>
  </>
)

export default IndexLayout
