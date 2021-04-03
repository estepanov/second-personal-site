import React from 'react'
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading, useThemeUI } from 'theme-ui'
import { Link } from 'gatsby'
import { lighten, darken } from '@theme-ui/color'

import TechLogo from './projects/TechLogo'
import TechLogoList from './projects/TechLogoList'

import Banner from './projects/Banners'
import { ProjectBannersEnum, ProjectSizeEnum } from '../interfaces/Project'
import { Images } from '../interfaces/Work'
import BannerImageList from './blog/BannerImageList'
import { Modes } from '../styles/colors'

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
  const theme = useThemeUI()
  const oppositeDeep = theme.colorMode === Modes.dark ? lighten : darken
  return (
    <Link
      to={linkTo}
      sx={{
        padding: 3,
        background: bgImg ? t => `linear-gradient(to bottom right, ${lighten('muted', 0.08)(t)}, ${darken('muted', 0.1)(t)})` : 'muted',
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
          background: t => `linear-gradient(to bottom right, ${lighten('text', 0.05)(t)}, ${darken('text', 0.1)(t)})`,
          color: 'background',
          boxShadow: t => `0px 0px 10px ${oppositeDeep('muted', 0.1)(t)}`,
          '& .proj-name': {
            color: 'background',
            textShadow: `0px 0px 0px ${theme.theme.colors?.background}`
          },
          '& .proj-body': {
            color: 'background',
            textShadow: `1px 1px 0px ${theme.theme.colors?.text}`
          },
          '& .proj-bg img': {
            transform: 'rotate3D(0,-0.5,-0.5,0.1turn) scale(1.43)',
            opacity: 0.15
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
        <img sx={{ transform: 'rotate3D(1,0,-3,-20deg) scale(2)', opacity: 0.10, width: '100%', transition: 'transform ease-in-out 2s' }} src={bgImg} />
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
            marginBottom: 3,
            textShadow: `1px 1px 1px ${theme.theme.colors?.background}`
          }}
        >
          {title}
        </Heading>
        <Text className="proj-body" sx={{
          fontSize: 1, color: 'text', flex: 1, textShadow: `1px 1px 1px ${theme.theme.colors?.background}`
        }}>{excerpt}</Text>
        <Flex sx={{ flexDirection: 'row', fontSize: 6, marginTop: 2, flexWrap: 'wrap-reverse', alignItems: 'center' }}>
          {date ? <TechLogoList tags={[date.toString()]} marginRight={3} marginBottom={2} /> : null}
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
