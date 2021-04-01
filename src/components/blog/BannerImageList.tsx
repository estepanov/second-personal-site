import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Images } from '../../interfaces/Project'

interface BannerImageListProps {
  image: Images
}

const BannerImageList: React.FC<BannerImageListProps> = ({ image }) => {
  return (
    <div
      key={image.id}
      sx={{
        flexShrink: 0,
        overflow: 'hidden',
        marginX: [2, 3],
        display: 'flex',
        justifyContent: 'center',
        opacity: 1,
        transition: 'ease-in-out 0.3s'
        // '&:hover': {
        //   transform: 'scale(1.10)',
        // }
      }}
    >
      <img
        key={image.id}
        src={image.childImageSharp.resize.src}
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: [125, 150],
          maxWidth: [200, 400],
          objectFit: 'cover'
        }}
        alt=""
      />
    </div>
  )
}

export default BannerImageList
