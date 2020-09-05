import React from 'react'
/** @jsx jsx */
import { jsx, Box, SxStyleProp } from 'theme-ui'
import { lighten, darken } from '@theme-ui/color'

import { ProjectBannersEnum } from '../../interfaces/Project'

interface BannerProps {
  type: ProjectBannersEnum
}

const Banner: React.FC<BannerProps> = ({ type }) => {
  const sx: SxStyleProp = {
    backgroundColor: undefined,
    backgroundImage: undefined,
    color: 'text',
    flexShrink: 0,
    paddingX: 2,
    paddingY: 1,
    fontSize: 0,
    textTransform: 'uppercase',
    marginRight: 1,
    marginY: 1
  }
  switch (type) {
    case ProjectBannersEnum.hackathon:
      sx.backgroundColor = 'secondary'
      sx.backgroundImage = t => `linear-gradient(to bottom right, ${lighten('secondary', 0.15)(t)}, ${darken('secondary', 0.2)(t)})`
      sx.color = 'white'
      break
    case ProjectBannersEnum.boilerplate:
      sx.backgroundColor = 'pink'
      sx.backgroundImage = t => `linear-gradient(to bottom right, ${lighten('pink', 0.15)(t)}, ${darken('pink', 0.2)(t)})`
      sx.color = 'white'
      break
    default:
      sx.color = 'text'
      break
  }

  return <Box sx={{ ...sx }}>{type}</Box>
}

export default Banner
