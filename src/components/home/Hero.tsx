import React from 'react'
import { Flex } from 'theme-ui'

const Hero = ({ children }) => {
  return (
    <Flex
      sx={{
        position: 'relative',
        backgroundImage: 'url(/uplift.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: ['70% 50%', '50% 50%'],
        minHeight: 400,
        height: 'calc(100vh - 90px - 160px - 120px)',
        flex: '1 0 auto'
      }}
    >
      <video
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        playsinline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="https://estepanov.s3.amazonaws.com/fallMini.webm" type="video/webm" />
        <source src="https://estepanov.s3.amazonaws.com/fallMini.mp4" type="video/mp4" />
      </video>
      {children}
    </Flex>
  )
}

export default Hero
