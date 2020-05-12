import React from 'react'
import { Text } from 'theme-ui'

import Layout from '../layouts'

interface ContactProps {
  location: Location
}

const ContactPage: React.FC<ContactProps> = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      {/* <Flex sx={{ justifyContent: 'center', padding: 4 }}>
        <img src="/great-success.gif" />
      </Flex> */}
      <Text sx={{ fontSize: 3, textAlign: 'center', padding: 4 }}>
        I am still working on this page right now. <br />
      </Text>
    </Layout>
  )
}

export default ContactPage
