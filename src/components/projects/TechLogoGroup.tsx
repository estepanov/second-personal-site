import React from 'react'
/** @jsx jsx */
import { jsx, Box, Flex, Heading } from 'theme-ui'
// import TechLogo from './TechLogo'
import TechLogoList from './TechLogoList'

// import TAG_MAP from '../logos/constants'

interface TechLogoGroupProps {
  tags: string[]
  title: string
  headerSize: number
  renderItem?: React.ReactNode
}

const TechLogoGroup: React.FC<TechLogoGroupProps> = ({ tags, title, renderItem, headerSize }) => {
  return (
    <Box sx={{ marginY: 2, marginRight: 4 }}>
      <Heading as="h4" sx={{ paddingBottom: 1, fontSize: headerSize }}>
        {title}
      </Heading>
      <Flex sx={{ flexWrap: 'wrap' }}>
        <TechLogoList marginRight={3} marginBottom={3} tags={tags} renderItem={renderItem} />
      </Flex>
    </Box>
  )
}

export default TechLogoGroup
