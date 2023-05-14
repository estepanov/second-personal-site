/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useRef } from "react";
/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import { keyframes } from "@emotion/react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const bounce = keyframes`
  from {
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  to {
    transform: translateY(-30px) scale(0.9);
    opacity: 0.5;
  }
`;

const Hero = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement>();
  const arrowRef = useRef();
  const { isIntersecting } = useIntersectionObserver(arrowRef, {
    rootMargin: "-90% 0px 0px 0px",
  });
  const { isIntersecting: isIntersectingVideo } = useIntersectionObserver(videoRef, {
    rootMargin: "-30% 0px 0px 0px",
  });
  const { isIntersecting: isIntersectingVideoPlayback } = useIntersectionObserver(videoRef, {
    rootMargin: "-35% 0px 0px 0px",
  });
  useEffect(() => {
    if (videoRef.current) {
      if (videoRef.current.paused && isIntersectingVideoPlayback) {
        videoRef.current.play().catch(() => {
          // ARCHIVED SITE -- VIDEOS no longer exist. thus they will not load or play
        });
      }
      if (!videoRef.current.paused && !isIntersectingVideoPlayback) {
        videoRef.current.pause();
      }
    }
  }, [isIntersectingVideoPlayback]);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);
  return (
    <>
      <video
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          left: 0,
          backgroundImage: "url(/uplift.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          // top: isIntersectingVideo ? 0 : -10,
          top: 0,
          zIndex: -3,
          opacity: isIntersectingVideo ? 0.55 : 0.3,
          transition: "all ease-in-out 300ms",
          filter: "grayscale(100%)",
        }}
        playsInline
        autoPlay
        muted
        loop
        ref={videoRef}
      >
        {/* ARCHIVED PROJECT - REMOVED VIDEOS TO SAVE $
        <source src="https://estepanov.s3.amazonaws.com/fallMini.webm" type="video/webm" />
        <source src="https://estepanov.s3.amazonaws.com/fallMini.mp4" type="video/mp4" /> */}
      </video>
      <Flex
        sx={{
          position: "relative",
          // minHeight: [`calc(100vh - ${110 + 82}px)`, `calc(100vh - ${110 + 58}px)`],
          minHeight: [`calc(100vh - ${62}px)`, `calc(100vh - ${62}px)`],
          flex: "1 0 auto",
        }}
      >
        {/* <video
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", left: 0, top: 0, zIndex: -1, opacity: 0.8 }}
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
            position: "absolute",
            bottom: [0, 1],
            left: 0,
            right: 0,
            justifyContent: "center",
            fontSize: [4, 5],
            animation: `${bounce} 1.5s infinite alternate`,
            animationPlayStat: isIntersecting ? "running" : "paused",
            animationTimingFunction: "ease-in-out",
          }}
        >
          <Box
            sx={{
              opacity: isIntersecting ? 0.85 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            <i className="fas fa-chevron-down" />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Hero;
