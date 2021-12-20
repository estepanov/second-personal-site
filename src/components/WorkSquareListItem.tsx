/** @jsxRuntime classic */ // real-dumb-fix https://github.com/system-ui/theme-ui/issues/1160#issuecomment-786822435
/** @jsx jsx */
import { jsx, Text, Box, Flex, Heading, useThemeUI } from 'theme-ui'
import TechLogoList from './projects/TechLogoList'
import Banner from './projects/Banners'
import { ProjectBannersEnum } from '../interfaces/Project'
import { Images } from '../interfaces/Work'
import BannerImageList from './blog/BannerImageList'

interface WorkSquareListItemProps {
  size?: string
  banner?: Images
  images?: Images[]
  tech?: string[] | null
  startDate?: string | number
  endDate?: string | number
  excerpt?: string
  position?: string
  companyName: string
  banners?: ProjectBannersEnum[]
}

const WorkSquareListItem: React.FC<WorkSquareListItemProps> = ({ banner, banners, position, excerpt, startDate, endDate, size, tech, companyName, images }) => {
  const bgImg = images?.[0].childImageSharp?.resize?.src
  const { theme } = useThemeUI()
  return (
    <Flex
      sx={{
        padding: 3,
        marginRight: [0, 1],
        marginBottom: 1,
        flex: 1,
        flexBasis: ['100%', '45%'],
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
          '& .proj-name': {
            color: 'background',
            textShadow: `0px 0px 0px ${theme?.colors?.text}`
          },
          '& .proj-body': {
            color: 'background',
            textShadow: `1px 1px 0px ${theme?.colors?.text}`
          },
          '& .proj-bg img': {
            transform: 'rotate3D(0,-0.5,-0.5,0.1turn) scale(1.43)',
            opacity: 0.15
          }
        }
      }}
    >
      <Flex
        className="proj-bg"
        sx={{
          position: 'absolute',
          zIndex: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <img
          sx={{ transform: 'rotate3D(1,0,-3,-20deg) scale(2)', opacity: 0.1, width: '100%', transition: 'transform ease-in-out 2s' }}
          src={bgImg}
        />
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
            // textShadow: t => `1px 1px 1px ${getColor(t, 'background')}`
          }}
        >
          {companyName}
        </Heading>
        <Flex sx={{ marginBottom: 2, alignItems: 'flex-start', justifyContent: 'center', flexDirection: ['column', 'row'] }}>
          <Flex
            sx={{
              flexGrow: 1
            }}
          >
            <Heading
              className="proj-name"
              sx={{
                width: ['100%', 'auto'],
                fontSize: [2, 3],
                fontFamily: 'heading',
                fontWeight: 'display',
                lineHeight: '1.1em',
                color: 'listHeader',
                // textShadow: t => `1px 1px 1px ${getColor(t, 'background')}`
              }}
            >
              {position}
            </Heading>
          </Flex>
          <Flex sx={{ flexDirection: 'row' }}>
            {startDate ? (
              <Box
                className="proj-name"
                sx={{
                  lineHeight: '1.5em',
                  fontSize: 2,
                  fontWeight: 'heading',
                  fontFamily: 'body',
                  color: 'mutedText',
                  flexShrink: 0,
                  padding: 0,
                  marginLeft: 0
                }}
              >
                {startDate.toString()}
              </Box>
            ) : null}
            {startDate && endDate ?
              <Box
                className="proj-name"
                sx={{
                  lineHeight: '1.5em',
                  fontSize: 2,
                  fontWeight: 'heading',
                  fontFamily: 'body',
                  color: 'mutedText',
                  flexShrink: 0,
                  padding: 0,
                  marginLeft: [1, 0],
                  marginRight: [1, 0]
                }}
              >
                &nbsp; &ndash; &nbsp;
              </Box> : null}
            {endDate ? (
              <Box
                className="proj-name"
                sx={{
                  lineHeight: '1.5em',
                  fontSize: 2,
                  fontWeight: 'heading',
                  fontFamily: 'body',
                  color: 'mutedText',
                  flexShrink: 0,
                  padding: 0,
                  marginLeft: 0
                }}
              >
                {endDate.toString()}
              </Box>
            ) : null}
          </Flex>
        </Flex>
        <Text
          className="proj-body"
          sx={{
            fontSize: 1,
            color: 'text',
            flex: 1,
            textShadow: `1px 1px 1px ${theme.colors?.background}`
          }}
        >
          {excerpt}
        </Text>
        {banners ? (
          <Flex
            sx={{
              fontSize: 2,
              flexShrink: 0,
              flexWrap: 'no-wrap',
              alignItems: 'center'
            }}
          >
            {banners.map(item => (
              <span key={item}>
                <Banner type={item} marginRight={3} marginBottom={2} />
              </span>
            ))}
          </Flex>
        ) : null}
        <Flex sx={{ flexDirection: 'row', fontSize: 6, marginTop: 2, flexWrap: 'wrap-reverse', alignItems: 'center' }}>
          {tech && tech.length ? <TechLogoList tags={tech} marginRight={3} marginBottom={2} /> : null}
        </Flex>
      </Flex>
      {banner && <BannerImageList image={banner} />}
    </Flex>
  )
}

export default WorkSquareListItem
