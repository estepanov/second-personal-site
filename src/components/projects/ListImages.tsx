import React, { useMemo } from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'

import { Images } from '../../interfaces/Project'

interface ListImagesProps {
  items: Images[]
}

const MAX_ITEMS = 3

const ListImages: React.FC<ListImagesProps> = ({ items }) => {
  const itemsToRender = useMemo(() => (items.length > MAX_ITEMS ? items.slice(0, MAX_ITEMS) : items), [items])
  return itemsToRender.map(img => {
    return (
      <div
        key={img.id}
        sx={{
          flexShrink: 0,
          overflowX: 'scroll',
          overflow: 'hidden',
          marginX: [2, 3],
          height: [125, 150],
          width: [125, 150],
          opacity: 1,
          transition: 'ease-in-out 0.3s'
          // '&:hover': {
          //   transform: 'scale(1.10)',
          // }
        }}
      >
        <img
          key={img.id}
          src={img.childImageSharp.resize.src}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
          }}
          alt=""
        />
      </div>
    )
  })
}

export default ListImages
