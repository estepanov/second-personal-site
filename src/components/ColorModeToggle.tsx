import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { keyframes } from "@emotion/react";
import { CustomColorModes } from "../styles/colors";
import Toggle from "./elements/Toggle";

const floatingAnimation = keyframes`
  from {
    opacity: 0.6;
    transform: translate3d(0em, 0em, 0em) scale(0.7) rotate(-90deg);
  }
  to {
    opacity: 1;
    transform: translate3d(3em, 3em, 0em) scale(1) rotate(-90deg);
  }
`;
const slidingCloudAnimation = keyframes`
  from {
    opacity: 0.7;
    transform: translate3d(0em, 0em, 0em);
  }
  to {
    opacity: 0.9;
    transform: translate3d(3em, 0em, 0em);
  }
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const DarkMode = () => {
  return (
    <span sx={{ height: "100%", width: "100%", position: "relative" }}>
      <svg
        sx={{
          opacity: 0.6,
          position: "absolute",
          right: "0em",
          top: "0em",
          height: "1em",
          width: "1em",
          transform: "rotate(90deg)",
          animation: `${rotateAnimation} 10s linear infinite`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          // eslint-disable-next-line max-len
          d="M 12 2 C 6.5 2 2 6.4787812 2 12.050781 C 2 17.622781 6.5 22 12 22 C 17.5 22 22 17.522781 22 12.050781 C 22 6.5787813 17.6 2 12 2 z M 11.199219 4.0898438 C 12.299219 4.6868438 13.299609 5.4835156 14.099609 6.4785156 C 14.499609 6.2795156 15 6.0800781 15.5 6.0800781 C 16.9 6.0800781 18 7.1753594 18 8.5683594 C 18 9.7623594 17.100391 10.857641 15.900391 11.056641 C 15.900391 11.355641 16 11.752781 16 12.050781 C 16 15.531781 13.999219 18.516766 11.199219 20.009766 C 7.1992188 19.611766 4 16.229781 4 12.050781 C 4 7.8717812 7.0992188 4.5868438 11.199219 4.0898438 z M 7.5 7 A 1.5 1.5 0 0 0 6 8.5 A 1.5 1.5 0 0 0 7.5 10 A 1.5 1.5 0 0 0 9 8.5 A 1.5 1.5 0 0 0 7.5 7 z M 9.5 12 A 2.5 2.5 0 0 0 7 14.5 A 2.5 2.5 0 0 0 9.5 17 A 2.5 2.5 0 0 0 12 14.5 A 2.5 2.5 0 0 0 9.5 12 z M 18 15.035156 C 18.6 15.035156 19 15.432297 19 16.029297 C 19 16.626297 18.6 17.025391 18 17.025391 C 17.4 17.025391 17 16.626297 17 16.029297 C 17 15.432297 17.4 15.035156 18 15.035156 z"
        />
      </svg>
      <svg
        sx={{
          opacity: 0.7,
          position: "absolute",
          left: "-0.4em",
          top: "-0.1em",
          height: "0.35em",
          width: "0.35em",
          animation: `${floatingAnimation} 18s ease-in`,
          animationIterationCount: "infinite",
          animationDelay: "7500ms",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,17.877L18.831,22l-1.813-7.77l6.035-5.228l-7.947-0.674L12,1L8.894,8.328L0.947,9.002l6.035,5.228L5.169,22L12,17.877z"
        />
      </svg>
      <svg
        sx={{
          opacity: 0.65,
          position: "absolute",
          left: "-0.5em",
          top: "-0.2",
          height: "0.4em",
          width: "0.4em",
          animation: `${floatingAnimation} 18s ease-in`,
          animationDelay: "3900ms",
          animationIterationCount: "infinite",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,17.877L18.831,22l-1.813-7.77l6.035-5.228l-7.947-0.674L12,1L8.894,8.328L0.947,9.002l6.035,5.228L5.169,22L12,17.877z"
        />
      </svg>
      <svg
        sx={{
          opacity: 0.7,
          position: "absolute",
          top: "-1em",
          left: "-1.5em",
          animation: `${floatingAnimation} 18s ease-out infinite`,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 26 26"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          // eslint-disable-next-line max-len
          d="M 25.34375 0.59375 L 21.4375 3.15625 L 16.8125 6.21875 L 18.375 3.3125 L 15.4375 4.90625 C 15.4375 4.90625 13.054688 6.203125 10.34375 7.84375 C 7.632813 9.484375 4.636719 11.402344 3.09375 13 C 0.320313 15.773438 0.320313 20.226563 3.09375 23 C 5.867188 25.773438 10.320313 25.773438 13.09375 23 C 14.636719 21.457031 16.398438 18.867188 17.8125 16.59375 C 19.226563 14.320313 20.28125 12.375 20.28125 12.375 L 21.5625 10.0625 L 19.0625 10.96875 L 18.6875 11.09375 L 22.84375 4.53125 Z M 18.65625 7.40625 L 15.46875 12.46875 L 13.90625 14.90625 L 16.625 13.9375 L 17.15625 13.75 C 16.742188 14.460938 16.691406 14.566406 16.09375 15.53125 C 14.707031 17.757813 12.945313 20.335938 11.6875 21.59375 C 9.660156 23.621094 6.527344 23.621094 4.5 21.59375 C 2.472656 19.566406 2.472656 16.433594 4.5 14.40625 L 4.53125 14.40625 C 5.6875 13.207031 8.710938 11.171875 11.375 9.5625 C 12.421875 8.929688 12.519531 8.90625 13.34375 8.4375 L 13.125 8.8125 L 11.21875 12.34375 L 14.5625 10.125 Z M 8 15 C 6.300781 15 5 16.300781 5 18 C 5 19.699219 6.300781 21 8 21 C 9.699219 21 11 19.699219 11 18 C 11 16.300781 9.699219 15 8 15 Z"
        />
      </svg>
    </span>
  );
};

const LightMode = () => {
  return (
    <span sx={{ height: "100%", width: "100%", position: "relative" }}>
      <svg
        version="1.1"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 612.001 612.001"
        sx={{
          opacity: 0.6,
          position: "absolute",
          right: "0.0em",
          top: "0.0em",
          height: "1em",
          width: "1em",
          animation: `${rotateAnimation} 12s linear infinite`,
        }}
      >
        <g>
          <path
            fill="currentColor"
            d="M306,149.341c-86.382,0-156.661,70.278-156.661,156.661c0,86.382,70.278,156.66,156.661,156.66
			s156.66-70.278,156.66-156.66C462.66,219.618,392.382,149.341,306,149.341z"
          />
          <path
            fill="currentColor"
            d="M274.194,117.278h63.612c5.032,0,9.356-2.101,11.863-5.763c2.508-3.662,2.9-8.453,1.079-13.146L315.749,8.257
			c-2.789-7.184-7.305-8.256-9.749-8.256s-6.96,1.073-9.749,8.255l-35,90.114c-1.821,4.692-1.427,9.482,1.079,13.145
			C264.837,115.178,269.162,117.278,274.194,117.278z"
          />
          <path
            fill="currentColor"
            d="M337.806,494.723h-63.612c-5.032,0-9.357,2.102-11.863,5.764c-2.506,3.663-2.9,8.453-1.079,13.145l34.999,90.114
			c2.789,7.182,7.305,8.254,9.749,8.254c2.444,0,6.96-1.072,9.749-8.254l34.999-90.115c1.821-4.69,1.429-9.48-1.079-13.144
			C347.162,496.825,342.838,494.723,337.806,494.723z"
          />
          <path
            fill="currentColor"
            d="M127.54,190.824c2.412,5.477,7.028,8.746,12.348,8.746c3.644,0,7.257-1.608,10.174-4.526l44.981-44.98
			c3.558-3.558,5.13-8.102,4.312-12.466c-0.819-4.362-3.928-8.028-8.532-10.056l-88.467-38.973c-2.233-0.983-4.336-1.482-6.25-1.482
			c-3.201,0-5.959,1.415-7.568,3.882c-1.357,2.081-2.454,5.747,0.031,11.389L127.54,190.824z"
          />
          <path
            fill="currentColor"
            d="M484.46,421.178c-2.412-5.477-7.027-8.746-12.346-8.746c-3.645,0-7.259,1.609-10.177,4.527l-44.981,44.98
			c-3.558,3.559-5.13,8.104-4.312,12.466c0.818,4.362,3.929,8.028,8.532,10.055l88.466,38.974c2.233,0.983,4.336,1.482,6.25,1.482
			c3.201,0,5.959-1.417,7.568-3.882c1.358-2.083,2.455-5.748-0.03-11.389L484.46,421.178z"
          />
          <path
            fill="currentColor"
            d="M461.937,195.044c2.918,2.918,6.532,4.526,10.176,4.526c5.319,0,9.934-3.269,12.348-8.746l38.972-88.465
			c2.486-5.643,1.389-9.308,0.031-11.389c-1.609-2.467-4.367-3.882-7.568-3.882c-1.914,0-4.017,0.499-6.251,1.483l-88.466,38.97
			c-4.604,2.029-7.715,5.694-8.532,10.057c-0.818,4.363,0.754,8.908,4.312,12.466L461.937,195.044z"
          />
          <path
            fill="currentColor"
            d="M150.063,416.959c-2.918-2.918-6.532-4.527-10.177-4.527c-5.319,0-9.934,3.269-12.346,8.746l-38.972,88.465
			c-2.486,5.643-1.389,9.308-0.031,11.39c1.609,2.466,4.368,3.882,7.568,3.882c1.914,0,4.017-0.499,6.251-1.484l88.466-38.972
			c4.604-2.028,7.715-5.694,8.532-10.056c0.818-4.362-0.753-8.907-4.312-12.466L150.063,416.959z"
          />
          <path
            fill="currentColor"
            d="M603.745,296.251l-90.111-34.996c-1.942-0.755-3.896-1.137-5.806-1.137c-7.593,0-13.104,5.921-13.104,14.078l0.001,63.613
			c0,8.157,5.511,14.078,13.104,14.078c1.912,0,3.866-0.382,5.806-1.136l90.112-34.999c7.182-2.79,8.254-7.306,8.254-9.751
			C612.001,303.558,610.926,299.04,603.745,296.251z"
          />
          <path
            fill="currentColor"
            d="M104.173,351.886c7.594,0,13.106-5.921,13.106-14.078v-63.613c0-8.157-5.511-14.078-13.106-14.078
			c-1.912,0-3.864,0.382-5.805,1.136L8.255,296.251C1.073,299.04,0,303.556,0,306.001c0,2.444,1.072,6.96,8.255,9.752l90.111,34.996
			C100.308,351.503,102.261,351.886,104.173,351.886z"
          />
        </g>
      </svg>
      <svg
        sx={{
          opacity: 0.75,
          position: "absolute",
          left: "-0.8em",
          bottom: "0.25em",
          height: "0.7em",
          width: "0.7em",
          animation: `${slidingCloudAnimation} 18s ease-in`,
          animationIterationCount: "infinite",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <path
          fill="currentColor"
          // eslint-disable-next-line max-len
          d="M 18 5 A 8 8 0 0 0 10.878906 9.3691406 A 5 5 0 0 0 9 9 A 5 5 0 0 0 4.0507812 13.333984 A 6 6 0 0 0 0 19 A 6 6 0 0 0 6 25 L 24 25 A 6 6 0 0 0 30 19 A 6 6 0 0 0 25.982422 13.345703 A 8 8 0 0 0 26 13 A 8 8 0 0 0 18 5 z"
        />
      </svg>
      <svg
        sx={{
          opacity: 0.7,
          position: "absolute",
          left: "-0.7em",
          bottom: "0%",
          height: "0.6em",
          width: "0.6em",
          animation: `${slidingCloudAnimation} 17s ease-in`,
          animationDelay: "10000ms",
          animationIterationCount: "infinite",
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
      >
        <path
          fill="currentColor"
          // eslint-disable-next-line max-len
          d="M 18 5 A 8 8 0 0 0 10.878906 9.3691406 A 5 5 0 0 0 9 9 A 5 5 0 0 0 4.0507812 13.333984 A 6 6 0 0 0 0 19 A 6 6 0 0 0 6 25 L 24 25 A 6 6 0 0 0 30 19 A 6 6 0 0 0 25.982422 13.345703 A 8 8 0 0 0 26 13 A 8 8 0 0 0 18 5 z"
        />
      </svg>
    </span>
  );
};

const Moon = () => (
  <svg
    version="1.1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      // eslint-disable-next-line max-len
      d="m500,113.1c-2.4-7.5-8.9-13-16.8-14.1l-55.2-7.9-24.6-48.9c-3.5-7-10.7-11.4-18.5-11.4-7.8,0-15,4.4-18.5,11.4l-24.6,48.9-55.2,7.9c-7.8,1.1-14.3,6.6-16.8,14.1-2.4,7.5-0.3,15.8 5.4,21.3l39.7,37.9-9.4,53.4c-1.4,7.7 1.8,15.6 8.1,20.2 6.3,4.7 14.7,5.3 21.7,1.7l49.5-25.5 49.5,25.5c3,1.5 6.2,2.3 9.5,2.3 4.3,0 8.6-1.4 12.2-4 6.3-4.6 9.5-12.5 8.1-20.2l-9.4-53.4 39.7-37.9c5.9-5.5 8-13.8 5.6-21.3zm-81.6,36.9c-5,4.8-7.3,11.7-6.1,18.5l4.1,23.3-22-11.3c-5.9-3-13-3-18.9,0l-22,11.3 4.1-23.3c1.2-6.8-1.1-13.7-6.1-18.5l-16.9-16.2 23.8-3.4c6.7-1 12.5-5.1 15.5-11.2l11-21.9 11,21.9c3,6 8.8,10.2 15.5,11.2l23.8,3.4-16.8,16.2z"
    />
    <path
      fill="currentColor"
      // eslint-disable-next-line max-len
      d="m442,361c-14.9,3.4-30.3,5.1-45.7,5.1-113.8,0-206.4-92.6-206.4-206.3 0-41.8 12.4-82 35.9-116.3 4.8-7 4.8-16.3 0-23.4-4.8-7.1-13.4-10.5-21.8-8.6-54,12.2-103,42.7-138,86-35.4,43.8-55,99.2-55,155.7 0,66.2 25.8,128.4 72.6,175.2 46.8,46.8 109.1,72.6 175.3,72.6 81.9,0 158.4-40.4 204.8-108.1 4.8-7 4.8-16.3 0-23.4-4.8-7-13.4-10.4-21.7-8.5zm-183.1,98.5c-113.8,0-206.4-92.6-206.4-206.3 0-78.2 45.3-149.1 112.8-183.8-11.2,28.6-17,59.1-17,90.4 0,66.2 25.8,128.4 72.6,175.2 46.7,46.7 108.8,72.5 174.9,72.6-37.3,33.1-85.8,51.9-136.9,51.9z"
    />
  </svg>
);

const Sun = () => (
  <svg
    version="1.1"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 612.001 612.001"
  >
    <g>
      <path
        fill="currentColor"
        d="M306,149.341c-86.382,0-156.661,70.278-156.661,156.661c0,86.382,70.278,156.66,156.661,156.66
			s156.66-70.278,156.66-156.66C462.66,219.618,392.382,149.341,306,149.341z"
      />
      <path
        fill="currentColor"
        d="M274.194,117.278h63.612c5.032,0,9.356-2.101,11.863-5.763c2.508-3.662,2.9-8.453,1.079-13.146L315.749,8.257
			c-2.789-7.184-7.305-8.256-9.749-8.256s-6.96,1.073-9.749,8.255l-35,90.114c-1.821,4.692-1.427,9.482,1.079,13.145
			C264.837,115.178,269.162,117.278,274.194,117.278z"
      />
      <path
        fill="currentColor"
        d="M337.806,494.723h-63.612c-5.032,0-9.357,2.102-11.863,5.764c-2.506,3.663-2.9,8.453-1.079,13.145l34.999,90.114
			c2.789,7.182,7.305,8.254,9.749,8.254c2.444,0,6.96-1.072,9.749-8.254l34.999-90.115c1.821-4.69,1.429-9.48-1.079-13.144
			C347.162,496.825,342.838,494.723,337.806,494.723z"
      />
      <path
        fill="currentColor"
        d="M127.54,190.824c2.412,5.477,7.028,8.746,12.348,8.746c3.644,0,7.257-1.608,10.174-4.526l44.981-44.98
			c3.558-3.558,5.13-8.102,4.312-12.466c-0.819-4.362-3.928-8.028-8.532-10.056l-88.467-38.973c-2.233-0.983-4.336-1.482-6.25-1.482
			c-3.201,0-5.959,1.415-7.568,3.882c-1.357,2.081-2.454,5.747,0.031,11.389L127.54,190.824z"
      />
      <path
        fill="currentColor"
        d="M484.46,421.178c-2.412-5.477-7.027-8.746-12.346-8.746c-3.645,0-7.259,1.609-10.177,4.527l-44.981,44.98
			c-3.558,3.559-5.13,8.104-4.312,12.466c0.818,4.362,3.929,8.028,8.532,10.055l88.466,38.974c2.233,0.983,4.336,1.482,6.25,1.482
			c3.201,0,5.959-1.417,7.568-3.882c1.358-2.083,2.455-5.748-0.03-11.389L484.46,421.178z"
      />
      <path
        fill="currentColor"
        d="M461.937,195.044c2.918,2.918,6.532,4.526,10.176,4.526c5.319,0,9.934-3.269,12.348-8.746l38.972-88.465
			c2.486-5.643,1.389-9.308,0.031-11.389c-1.609-2.467-4.367-3.882-7.568-3.882c-1.914,0-4.017,0.499-6.251,1.483l-88.466,38.97
			c-4.604,2.029-7.715,5.694-8.532,10.057c-0.818,4.363,0.754,8.908,4.312,12.466L461.937,195.044z"
      />
      <path
        fill="currentColor"
        d="M150.063,416.959c-2.918-2.918-6.532-4.527-10.177-4.527c-5.319,0-9.934,3.269-12.346,8.746l-38.972,88.465
			c-2.486,5.643-1.389,9.308-0.031,11.39c1.609,2.466,4.368,3.882,7.568,3.882c1.914,0,4.017-0.499,6.251-1.484l88.466-38.972
			c4.604-2.028,7.715-5.694,8.532-10.056c0.818-4.362-0.753-8.907-4.312-12.466L150.063,416.959z"
      />
      <path
        fill="currentColor"
        d="M603.745,296.251l-90.111-34.996c-1.942-0.755-3.896-1.137-5.806-1.137c-7.593,0-13.104,5.921-13.104,14.078l0.001,63.613
			c0,8.157,5.511,14.078,13.104,14.078c1.912,0,3.866-0.382,5.806-1.136l90.112-34.999c7.182-2.79,8.254-7.306,8.254-9.751
			C612.001,303.558,610.926,299.04,603.745,296.251z"
      />
      <path
        fill="currentColor"
        d="M104.173,351.886c7.594,0,13.106-5.921,13.106-14.078v-63.613c0-8.157-5.511-14.078-13.106-14.078
			c-1.912,0-3.864,0.382-5.805,1.136L8.255,296.251C1.073,299.04,0,303.556,0,306.001c0,2.444,1.072,6.96,8.255,9.752l90.111,34.996
			C100.308,351.503,102.261,351.886,104.173,351.886z"
      />
    </g>
  </svg>
);

const MODE_ICON = {
  [CustomColorModes.dark]: Moon,
  [CustomColorModes.light]: Sun,
};

interface ColorModeToggle {
  variant?: string;
}

const ColorModeToggle: React.FC<ColorModeToggle> = () => {
  const [mode, setMode] = useColorMode<CustomColorModes>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleMode = () => {
    setMode(mode === CustomColorModes.light ? CustomColorModes.dark : CustomColorModes.light);
  };
  /** hack to fix issue where dark mode is not triggering update */
  if (!mounted) return null;
  return (
    <Toggle
      checked={mode === CustomColorModes.dark}
      CheckedIcon={MODE_ICON.light}
      CheckedCircleIcon={DarkMode}
      UncheckedIcon={MODE_ICON.dark}
      UncheckedCircleIcon={LightMode}
      onChange={toggleMode}
      id="darkmode-toggle"
    />
  );
};

export default ColorModeToggle;
