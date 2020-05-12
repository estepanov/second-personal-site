import React from 'react'
import Layout from '../layouts'

// import useInterval from '../hooks/useInterval'

import About from '../components/home/About'
import Hero from '../components/home/Hero'
import Work from '../components/home/Work'

// const whatIAmDoing = [
//   {
//     icon: 'far fa-code',
//     title: 'building night mode features'
//   },
//   {
//     icon: 'fal fa-skiing',
//     title: 'enjoying fresh pow'
//   },
//   {
//     icon: 'fad fa-snowflakes',
//     title: 'praying for snow'
//   },
//   {
//     icon: 'fad fa-snowboarding',
//     title: 'thinking about fresh pow'
//   },
//   {
//     icon: 'fal fa-truck-container',
//     title: 'signing for a package'
//   },
//   {
//     icon: 'fal fa-bullseye-arrow',
//     title: 'setting new goals'
//   },
//   {
//     icon: 'fal fa-gamepad-alt',
//     title: 'playing Halo'
//   },
//   {
//     icon: 'fal fa-hat-cowboy',
//     title: 'collecting hats'
//   },
//   {
//     icon: 'far fa-plane-departure',
//     title: 'going somehwere now'
//   }
// ]

// const getNextIndex = (currentIndex: number): number => {
//   return currentIndex === whatIAmDoing.length - 1 ? 0 : currentIndex + 1
// }

interface IndexProps {
  location: Location
}

const IndexPage: React.FC<IndexProps> = ({ location }) => {
  // const [activeIndex, setActiveIndex] = useState(0)
  // useInterval(() => {
  //   setActiveIndex(getNextIndex(activeIndex))
  // }, 6000)
  return (
    <Layout container={false} pathname={location.pathname}>
      <Hero>
        {/* <Box mx="auto" my="auto" p={4} sx={{ fontSize: 4 }}>
      Right now I am{' '}
      <Box color="primary" css={{ display: 'inline-block', minWidth: 200 }}>
        <Text sx={{ fontSize: 6, paddingX: 1 }} key={whatIAmDoing[activeIndex].icon}>
          <i className={whatIAmDoing[activeIndex].icon} />
        </Text>
        <Text>{whatIAmDoing[activeIndex].title}</Text>
      </Box>
    </Box> */}
      </Hero>

      <About />
      <Work />
    </Layout>
  )
}

export default IndexPage
