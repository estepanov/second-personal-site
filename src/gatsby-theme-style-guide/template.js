import Layout from '../layouts'
import * as React from 'react'
import Header from './header'
import Typography from './typography'
import Colors from './colors'

const LayoutPage = () => {
  return (
    <Layout title="My design system" description="design lingua franca" pathname="/design-system" >
      <Header />
      <Typography />
      <Colors />
    </Layout>
  )
}

export default LayoutPage
