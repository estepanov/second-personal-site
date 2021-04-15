import React, { useRef } from 'react'
/** @jsx jsx */
import { jsx, Flex, Box } from 'theme-ui'
import { keyframes } from '@emotion/core'
import useIntersectionObserver from '@react-hook/intersection-observer'

const bounce = keyframes`
  from {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-30px) scale(0.9);
    opacity: 0.5;
  }
`

const Hero = ({ children }) => {
  const arrowRef = useRef()
  const { isIntersecting } = useIntersectionObserver(arrowRef, {
    rootMargin: "-90% 0px 0px 0px"
  })
  return (
    <Flex
      sx={{
        position: 'relative',
        minHeight: [`calc(100vh - ${110 + 82}px)`, `calc(100vh - ${110 + 58}px)`],
        flex: '1 0 auto'
      }}
    >
      {/* <video
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        playsInline="playsinline"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source src="https://estepanov.s3.amazonaws.com/fallMini.webm" type="video/webm" />
        <source src="https://estepanov.s3.amazonaws.com/fallMini.mp4" type="video/mp4" />
      </video> */}
      {children}
      <Flex
        ref={arrowRef}
        sx={{
          position: 'absolute',
          bottom: [2, 4],
          left: 0,
          right: 0,
          justifyContent: 'center',
          fontSize: [4, 5],
          animation: `${bounce} 1s infinite alternate`,
          animationPlayStat: isIntersecting ? 'running' : 'paused',
          animationTimingFunction: 'ease-in-out'
        }} >
        <Box sx={{
          opacity: isIntersecting ? 0.15 : 0,
          transition: 'opacity 0.5s ease'
        }}>
          <i className="fas fa-chevron-down" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default Hero
