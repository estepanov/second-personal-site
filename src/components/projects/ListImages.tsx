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
          overflow: 'hidden',
          margin: [2, 3],
          // borderColor: 'white',
          // borderStyle: 'solid',
          // borderWidth: 4,
          height: [125, 150],
          width: [125, 150],
          objectFit: 'cover',
          opacity: 1,
          transition: 'ease-in 0.5s',
          transform: 'scale(1)',
          '&:hover': {
            transform: 'scale(1.20)',
            opacity: 1,
            '& img': {
              transform: 'rotate(0deg) scale(1) translate(0%, 0%)'
            }
          }
        }}
      >
        <img
          key={img.id}
          src={img.publicURL}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transform: 'rotate(-25deg) scale(1.5) translate(5%, 5%)',
            transition: 'ease-out 1s'
          }}
          alt=""
        />
      </div>
    )
  })
}

export default ListImages
