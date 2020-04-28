import * as React from 'react'
/** @jsx jsx */
import { jsx, Flex, Image, Text } from 'theme-ui'

import { Images } from '../../interfaces/Project'
import useNavigationKeys from '../../hooks/useNavigationKeys'

enum ButtonSizes {
  small = 120,
  medium = 250
}

interface ButtonImageProps {
  img: Images
  onClick: Function
  size: ButtonSizes
}

const ButtonImage: React.FC<ButtonImageProps> = ({ img, onClick, size = ButtonSizes.small }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      sx={{
        cursor: 'pointer',
        // float: 'left',
        flexShrink: 0,
        overflow: 'hidden',
        padding: 0,
        marginRight: [2, 4],
        borderWidth: 0,
        height: [ButtonSizes.small, ButtonSizes.medium],
        width: [ButtonSizes.small, ButtonSizes.medium],
        objectFit: 'cover',
        opacity: 1,
        transition: 'ease-in-out 0.3s',
        transform: 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
          opacity: 1
        },
        '&:focus': {
          transform: 'scale(1.05)',
          opacity: 1
        }
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
    </button>
  )
}

interface ImageGallery {
  items: Images[]
}

const ImageGallery: React.FC<ImageGallery> = ({ items = [] }) => {
  const [active, setActive] = React.useState<Images>(null)
  const reset = React.useCallback(() => setActive(null), [setActive])
  const nextImage = () => {
    if (!active) return
    const index = items.findIndex(img => img.id === active.id)
    const next = index + 1 < items.length ? index + 1 : 0
    setActive(items[next])
  }

  const previousImage = () => {
    if (!active) return
    const index = items.findIndex(img => img.id === active.id)
    const previous = index - 1 > 0 ? index - 1 : items.length - 1
    setActive(items[previous])
  }

  useNavigationKeys([37, 38], previousImage)
  useNavigationKeys([39, 40], nextImage)
  useNavigationKeys([27], reset)

  return (
    <>
      {/* {active ? ( */}
      <Flex
        onClick={() => setActive()}
        sx={{
          opacity: active ? 1 : 0,
          // display: active ? 'flex' : 'none',
          visibility: active ? 'visible' : 'hidden',
          transition: 'ease-in-out 0.3s',
          zIndex: 1,
          backdropFilter: 'blur(10px)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
          flexDirection: 'column'
        }}
      >
        {active ? (
          <>
            <Image src={active.publicURL} sx={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }} />
            <Text
              sx={{
                color: 'white',
                paddingTop: [2, 4],
                fontSize: 0
              }}
            >
              Touch anywhere to close
            </Text>
            <Text
              sx={{
                color: 'white',
                paddingTop: [0, 1],
                fontSize: 0,
                display: ['none', 'block']
              }}
            >
              Use keyboard arrow keys ◀ ▶ to change images.
            </Text>
          </>
        ) : null}
      </Flex>
      {/* ) : null} */}
      <Flex
        sx={{
          flexDirection: 'row',
          // flexWrap: 'wrap',
          display: 'inline-flex',
          // maxHeight: ButtonSizes.small * 2,
          overflow: 'hidden',
          overflowX: 'scroll',
          paddingY: 3,
          '::-webkit-scrollbar': {
            height: 3
          },
          /* Arrow buttons */
          '::-webkit-scrollbar-button': {
            display: 'none'
          },
          /* Track */
          '::-webkit-scrollbar-track': {
            backgroundColor: 'background'
          },
          /* Handle */
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'listBg'
          },
          /* Handle on hover */
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'listBgAlt'
          }
        }}
      >
        {items.map((img, index) => {
          const size = ButtonSizes.small
          // if (index === 0 || (index === 1 && items.length === 6)) size = ButtonSizes.medium
          // if ([0, 1, 2].includes(index)) size = ButtonSizes.medium
          return <ButtonImage key={img.id} size={size} img={img} onClick={() => setActive(img)} />
        })}
      </Flex>
    </>
  )
}

export default ImageGallery
