import React from 'react'
/** @jsx jsx */
import { jsx, Heading, Text, Flex } from 'theme-ui'

interface SectionHeaderProps {
  title: string
  subtitle: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div
      sx={{
        // marginBottom: 3,
        paddingY: 3
      }}
    >
      <Heading as="h1" sx={{ margin: 0 }}>
        {title}
      </Heading>
      <Text
        sx={{
          fontSize: 1,
          // marginLeft: 3,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {subtitle}
      </Text>
      {/* <hr
        sx={{
          borderBottomStyle: 'solid',
          borderBottomWidth: 1,
          borderBottomColor: 'text',
          height: 1
        }}
      /> */}
    </div>
  )
}

export default SectionHeader
