import React from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'
// import { lighten, darken } from '@theme-ui/color'

import TechLogo from './projects/TechLogo'
import TechLogoList from './projects/TechLogoList'
import ListImages from './projects/ListImages'

import Banner from './projects/Banners'
import { ProjectBannersEnum, ProjectSizeEnum } from '../interfaces/Project'
import { Images } from '../interfaces/Work'
import BannerImageList from './blog/BannerImageList'

interface PageListItemProps {
  size?: string
  banner?: Images
  images?: Images[]
  tech?: string[] | null
  date?: string | number
  excerpt?: string
  linkTo: string
  title: string
  banners?: ProjectBannersEnum[]
}

const PageListItem: React.FC<PageListItemProps> = ({ banner, banners, excerpt, date, size, tech, title, images, linkTo }) => {
  return (
    <Link
      to={linkTo}
      sx={{
        paddingY: [1, 2],
        my: 2,
        color: 'listContent',
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        // overflow: 'hidden',
        transition: 'ease-in-out 200ms',
        // backgroundColor: 'background',
        '&:hover': {
          // transform: 'scale(1.02)',
          // backgroundColor: t => darken('listBg', 0.1)(t),
          // backgroundImage: t => `linear-gradient(to bottom right, ${lighten('listBg', 0.01)(t)}, ${darken('listBg', 0.1)(t)})`,
          // boxShadow: t => `0px 0px 20px ${lighten('gray', 0.1)(t)}`
          h1: {
            color: 'secondary'
            // textDecoration: 'underline'
          }
        }
      }}
    >
      <Flex
        sx={{
          minWidth: 200,
          flex: 2,
          flexShrink: 0,
          flexDirection: 'column'
        }}
      >
        <Flex
          sx={{
            alignItems: 'center',
            flexDirection: 'row',
            // alignItems: ['flex-start', 'center'],
            // flexDirection: ['column', 'row'],
            flexWrap: 'wrap'
          }}
        >
          <Heading
            as="h1"
            my={2}
            sx={{
              width: ['100%', 'auto'],
              fontSize: 3,
              color: 'listHeader',
              transition: 'ease-in-out 0.3s',
              float: 'left'
              // textDecoration: 'none'
            }}
          >
            {title}
          </Heading>
          {banners ? (
            <React.Fragment>
              <Box sx={{ marginRight: [0, 3] }} />
              {banners.map(item => (
                <Banner key={item} type={item} />
              ))}
            </React.Fragment>
          ) : null}
        </Flex>
        <Text sx={{ fontSize: 1, color: 'text' }}>{excerpt}</Text>
        <Flex my={2} sx={{ flexDirection: 'row', fontSize: 4 }}>
          {date && <TechLogo marginRight={3} marginBottom={3} tag={date} />}
          {tech && tech.length ? <TechLogoList tags={tech} marginRight={3} marginBottom={3} /> : null}
        </Flex>
      </Flex>
      {banner && <BannerImageList image={banner} />}
      {ProjectSizeEnum.small !== size && images && images.length && (
        <Flex
          sx={{
            flexDirection: 'row',
            width: '100%',
            flexShrink: 0,
            alignItems: 'center',
            overflowX: 'scroll',
            flex: 3,
            paddingY: 2,
            '::-webkit-scrollbar': {
              cursor: 'all-scroll',
              height: 5
            },
            /* Arrow buttons */
            '::-webkit-scrollbar-button': {
              display: 'none'
            },
            /* Track */
            '::-webkit-scrollbar-track': {
              background: 'none'
            },
            /* Handle */
            '::-webkit-scrollbar-thumb': {
              backgroundColor: 'listBgAlt'
            },
            /* Handle on hover */
            '::-webkit-scrollbar-thumb:hover': {
              backgroundColor: 'listBgAlt'
            }
          }}
        >
          <ListImages items={images} />
        </Flex>
      )}
    </Link>
  )
}

export default PageListItem
