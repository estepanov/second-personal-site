import React from 'react'
/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui'
import { Modes } from '../styles/colors'
import Toggle from './elements/Toggle'

const options = Object.values(Modes)

// const MODE_TEXT = {
//   [Modes.dark]: 'Dark Mode',
//   [Modes.light]: 'Light Mode'
// }

// const MODE_TEXT_REVERSE = {
//   [Modes.dark]: MODE_TEXT.light,
//   [Modes.light]: MODE_TEXT.dark
// }

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
      d="m500,113.1c-2.4-7.5-8.9-13-16.8-14.1l-55.2-7.9-24.6-48.9c-3.5-7-10.7-11.4-18.5-11.4-7.8,0-15,4.4-18.5,11.4l-24.6,48.9-55.2,7.9c-7.8,1.1-14.3,6.6-16.8,14.1-2.4,7.5-0.3,15.8 5.4,21.3l39.7,37.9-9.4,53.4c-1.4,7.7 1.8,15.6 8.1,20.2 6.3,4.7 14.7,5.3 21.7,1.7l49.5-25.5 49.5,25.5c3,1.5 6.2,2.3 9.5,2.3 4.3,0 8.6-1.4 12.2-4 6.3-4.6 9.5-12.5 8.1-20.2l-9.4-53.4 39.7-37.9c5.9-5.5 8-13.8 5.6-21.3zm-81.6,36.9c-5,4.8-7.3,11.7-6.1,18.5l4.1,23.3-22-11.3c-5.9-3-13-3-18.9,0l-22,11.3 4.1-23.3c1.2-6.8-1.1-13.7-6.1-18.5l-16.9-16.2 23.8-3.4c6.7-1 12.5-5.1 15.5-11.2l11-21.9 11,21.9c3,6 8.8,10.2 15.5,11.2l23.8,3.4-16.8,16.2z"
    />
    <path
      fill="currentColor"
      d="m442,361c-14.9,3.4-30.3,5.1-45.7,5.1-113.8,0-206.4-92.6-206.4-206.3 0-41.8 12.4-82 35.9-116.3 4.8-7 4.8-16.3 0-23.4-4.8-7.1-13.4-10.5-21.8-8.6-54,12.2-103,42.7-138,86-35.4,43.8-55,99.2-55,155.7 0,66.2 25.8,128.4 72.6,175.2 46.8,46.8 109.1,72.6 175.3,72.6 81.9,0 158.4-40.4 204.8-108.1 4.8-7 4.8-16.3 0-23.4-4.8-7-13.4-10.4-21.7-8.5zm-183.1,98.5c-113.8,0-206.4-92.6-206.4-206.3 0-78.2 45.3-149.1 112.8-183.8-11.2,28.6-17,59.1-17,90.4 0,66.2 25.8,128.4 72.6,175.2 46.7,46.7 108.8,72.5 174.9,72.6-37.3,33.1-85.8,51.9-136.9,51.9z"
    />
  </svg>
)

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
)

const MODE_ICON = {
  [Modes.dark]: Moon,
  [Modes.light]: Sun
}
// const MODE_ICON_REVERSE = {
//   [Modes.dark]: MODE_ICON.light,
//   [Modes.light]: MODE_ICON.dark
// }

interface ColorModeToggle {
  variant: string
}

const ColorModeToggle: React.FC<ColorModeToggle> = ({ variant }) => {
  const [mode, setMode] = useColorMode<Modes>()
  const toggleMode = () => {
    const index = options.indexOf(mode)
    const next = options[(index + 1) % options.length]
    setMode(next)
  }
  return (
    <Toggle
      checked={mode === Modes.dark}
      CheckedIcon={MODE_ICON.light}
      UncheckedIcon={MODE_ICON.dark}
      onChange={toggleMode}
      id="darkmode-toggle"
    />
  )
}

export default ColorModeToggle
