import React from 'react'

import Layout from '../layouts'
import { Contact } from '../components/Contact'
import SectionHeader from '../components/Layout/SectionHeader'

interface ContactProps {
  location: Location
}

const ContactPage: React.FC<ContactProps> = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <SectionHeader
        title="Contact"
        subtitle="Interested in working together or just want to chat about cool tech? Feel free to reach out to me :)"
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
