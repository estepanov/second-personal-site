import React, { useState } from 'react'
import { Text, Box } from 'theme-ui'
import Layout from '../layouts'
import useInterval from '../hooks/useInterval'

const whatIAmDoing = [
  {
    icon: 'far fa-code',
    title: 'coding'
  },
  {
    icon: 'fal fa-skiing',
    title: 'enjoying fresh pow'
  },
  {
    icon: 'fal fa-truck-container',
    title: 'deploying a new project'
  },
  {
    icon: 'fal fa-bullseye-arrow',
    title: 'setting new goals'
  },
  {
    icon: 'fal fa-gamepad-alt',
    title: 'playing Halo'
  },
  {
    icon: 'fal fa-hat-cowboy',
    title: 'collecting hats'
  },
  {
    icon: 'far fa-plane-departure',
    title: 'going somehwere now'
  }
]

const getNextIndex = (currentIndex: number): number => {
  return currentIndex === whatIAmDoing.length - 1 ? 0 : currentIndex + 1
}

const IndexPage = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  useInterval(() => {
    setActiveIndex(getNextIndex(activeIndex))
  }, 6000)
  return (
    <Layout>
      <Box mx="auto" my="auto" p={4} sx={{ fontSize: 4 }}>
        Right now I am{' '}
        <Box color="primary" css={{ display: 'inline-block', minWidth: 200 }}>
          <Text sx={{ fontSize: 6, paddingX: 1 }} key={whatIAmDoing[activeIndex].icon}>
            <i className={whatIAmDoing[activeIndex].icon} />
          </Text>
          <Text>{whatIAmDoing[activeIndex].title}</Text>
        </Box>
      </Box>
    </Layout>
  )
}

export default IndexPage
