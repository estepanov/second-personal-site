import React from 'react'
import { Global } from '@emotion/react'

import 'modern-normalize'

import SEO from '../components/SEO'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import globalStyle from '../styles/globalStyle'
import Container from '../components/Layout/Container'

interface Props {
  container?: boolean
  title?: string
  description?: string
  image?: string
  pathname?: string
  article?: boolean
}

const IndexLayout: React.FC<Props> = ({ children, container = true, title, description, image, article, pathname }) => (
  <>
    <Global styles={globalStyle} />
    <SEO title={title} description={description} image={image} article={article} pathname={pathname} />
    <Header />
    {container ? <Container sx={{ flex: '1 0 auto' }}>{children}</Container> : children}
    <Footer />
  </>
)

export default IndexLayout
