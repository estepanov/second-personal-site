import React from 'react'
/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { DemoImages } from '../../interfaces/Project'

interface DemosProps {
  items: DemoImages[]
}

const Demos: React.FC<DemosProps> = ({ items = [] }) => {
  if (!items || !items.length || !Array.isArray(items)) return null
  return (
    <Flex>
      {items.map(item => {
        // return <img key={item.id} alt="project demo" src={item.publicURL} ratio={2 / 1} />
        return (
          <Box key={item.id} sx={{ width: '100%' }}>
            <img alt="project demo" src={item.publicURL} sx={{ objectFit: 'contain', height: '100%', width: '100%' }} />
          </Box>
        )
      })}
    </Flex>
  )
}

export default Demos
