import React from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading } from 'theme-ui'
import { Link } from 'gatsby'
// import { lighten, darken } from '@theme-ui/color'

import TechLogo from './projects/TechLogo'
import TechLogoList from './projects/TechLogoList'

import Banner from './projects/Banners'
import { ProjectBannersEnum, ProjectSizeEnum } from '../interfaces/Project'
import { Images } from '../interfaces/Work'
import BannerImageList from './blog/BannerImageList'

interface SquareListItemProps {
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

const SquareListItem: React.FC<SquareListItemProps> = ({ banner, banners, excerpt, date, size, tech, title, images, linkTo }) => {
  let bgImg = images?.[0].childImageSharp?.resize?.src
  return (
    <Link
      to={linkTo}
      sx={{
        padding: 3,
        backgroundColor: 'muted',
        marginRight: [0, 3],
        marginBottom: 3,
        flex: 1,
        flexBasis: ['100%', '30%'],
        minHeight: bgImg ? ['unset', '300px'] : undefined,
        color: 'listContent',
        textDecoration: 'none',
        position: 'relative',
        display: 'flex',
        flexDirection: ['column', 'row'],
        flexWrap: 'wrap',
        '&:hover': {
          backgroundColor: 'text',
          color: 'background',
          // backgroundImage: t => `linear-gradient(to bottom right, ${lighten('listBg', 0.01)(t)}, ${darken('listBg', 0.1)(t)})`,
          // boxShadow: t => `0px 0px 20px ${lighten('gray', 0.1)(t)}`
          '& .proj-name': {
            color: 'background',
            // textShadow: `0px 0px 0px ${theme.theme.colors?.background}`
          },
          '& .proj-body': {
            color: 'background'
          },
          '& .proj-bg img': {
            transform: 'rotate(-35deg) scale(1.8)',
            opacity: 0.2
          }
        }
      }}
    >
      <Flex className="proj-bg" sx={{
        position: 'absolute',
        zIndex: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img sx={{ transform: 'rotate(-20deg) scale(1.29)', opacity: 0.1, width: '100%', transition: 'all ease 2.5s' }} src={bgImg} />
      </Flex>
      <Flex
        sx={{
          zIndex: 1,
          minWidth: 200,
          flex: 2,
          flexShrink: 0,
          flexDirection: 'column'
        }}
      >
        <Heading
          className="proj-name"
          sx={{
            width: ['100%', 'auto'],
            fontSize: [3, 4],
            fontFamily: 'heading',
            fontWeight: 'display',
            lineHeight: '1.5em',
            color: 'listHeader',
            transition: 'ease 0.3s',
            marginBottom: 3,
            // textShadow: `3px 3px 5px ${theme.theme.colors?.background}`
          }}
        >
          {title}
        </Heading>
        <Text className="proj-body" sx={{ fontSize: 1, color: 'text', flex: 1 }}>{excerpt}</Text>
        <Flex sx={{ flexDirection: 'row', fontSize: 6, marginTop: 2, flexWrap: 'wrap-reverse', alignItems: 'center' }}>
          {tech && tech.length ? <TechLogoList tags={tech} marginRight={3} marginBottom={2} /> : null}
          {banners ? (
            <React.Fragment>
              {banners.map(item => (
                <span><Banner key={item} type={item} marginRight={3} marginBottom={2} /></span>
              ))}
            </React.Fragment>
          ) : null}
        </Flex>
      </Flex>
      {banner && <BannerImageList image={banner} />}
    </Link >
  )
}

export default SquareListItem
