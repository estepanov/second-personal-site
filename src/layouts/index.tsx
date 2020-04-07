import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
import { Box, Flex } from 'rebass'
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
    <Flex flexDirection="column" height="100%">
      <Container>
        <Header />
      </Container>
      <Flex flex="1 1 auto" flexDirection="column">
        <Container>{children}</Container>
      </Flex>
      <Container>
        <Footer />
      </Container>
    </Flex>
  </>
)

export default IndexLayout
