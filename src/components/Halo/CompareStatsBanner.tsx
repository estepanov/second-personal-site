import { Link } from 'gatsby';
import React, { useCallback } from 'react'
/** @jsx jsx */
import { jsx, Flex, Button, Box } from "theme-ui";
import Container from '../../components/Layout/Container'
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import { TrackerOverview } from "../../interfaces/Halo/Tracker";
import ChiefCroppedIcon from "./elements/ChiefCroppedIcon";

interface CompareStatsBannerProps {
  toggle(): void;
  expanded: boolean;
}

const CompareStatsBanner: React.FC<CompareStatsBannerProps> = ({ children, toggle, expanded }) => {
  const [trackerOverview] = useHaloStats<TrackerOverview>(HaloEndPoints.statsTrackerOverview)
  const expandIfNeccessary = useCallback(
    () => {
      if (!expanded) toggle()
    },
    [expanded],
  )
  return (
    <Box sx={{
      backgroundColor: 'background',
      marginBottom: 2,
    }}>
      <Container>
        <Flex sx={{
          paddingX: 2,
          paddingY: 2,
          flexDirection: 'column'
        }}>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              justifyContent: ['space-between']
            }}>
            <Flex
              sx={{
                flexDirection: 'row',
                alignItems: 'center'
              }}
            >
              <Flex sx={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 4,
                fontFamily: 'nav',
                fontWeight: 'display',
                color: 'secondary',
                paddingRight: 3,
                height: [70, 50],
              }}>
                <ChiefCroppedIcon />
              </Flex>
              <Flex sx={{

                flexDirection: 'column',
                marginBottom: [2, 0]
              }}>
                <Flex sx={{
                  fontSize: 3,
                  fontFamily: 'heading',
                  fontWeight: 'display',
                  lineHeight: '1.5em',
                  // color: 'listHeader',
                  color: 'secondary',

                }}>
                  Who has better stats?
                </Flex>
                <Flex sx={{
                  // color: 'listContent'
                }}>
                  Enter another gamer tag to compare our Halo stats
                </Flex>
              </Flex>
            </Flex>

            <Flex>
              {
                expanded ?
                  <Button
                    variant="outline"
                    onClick={toggle}
                    sx={{
                      width: ['100%', 150],
                      borderColor: 'text',
                      color: 'text'
                    }}
                  >
                    Close
                  </Button>
                  :
                  <Button
                    onClick={toggle}
                    sx={{
                      width: ['100%', 150],
                      backgroundColor: 'secondary'
                    }}
                  >
                    Lets Go
                  </Button>
              }
            </Flex>
          </Flex>
        </Flex>
        <Box sx={{ display: expanded ? 'block' : 'none' }}>
          {children}
        </Box>
        {trackerOverview &&
          <>
            <Flex sx={{ flexDirection: 'row', alignItems: 'center', fontSize: 0, marginY: 2 }}>
              <Box
                sx={{
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  // width: 'auto',
                  fontSize: 0,
                  fontWeight: 'bold'
                  // margin: 1,
                  // paddingY: 1,
                  // paddingX: 2,
                  // backgroundColor: 'listBg'
                }}
              >{trackerOverview.todaysCount}&nbsp;</Box>
              <Box
                sx={{
                  color: 'mutedText',
                  whiteSpace: 'nowrap', flexShrink: 0, paddingRight: 2,
                  marginRight: 2, borderRightColor: 'muted', borderRightStyle: 'solid', borderRightWidth: '1px'
                }}
              >Lookups today</Box>
              <Box
                sx={{
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  // width: 'auto',
                  fontSize: 0,
                  fontWeight: 'bold'

                  // margin: 1,
                  // paddingY: 1,
                  // paddingX: 2,
                  // backgroundColor: 'listBg'
                }}
              >{trackerOverview.monthCount}&nbsp;</Box>
              <Box
                sx={{
                  color: 'mutedText',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  marginRight: 2,
                  paddingRight: 2,
                  // borderRightColor: 'muted',
                  // borderRightStyle: 'solid',
                  // borderRightWidth: '1px'
                }}
              >Lookups this month</Box>

            </Flex>
            <Flex sx={{ flexDirection: 'row', alignItems: 'center', fontSize: 0, marginBottom: 2 }}>
              <Box
                sx={{ whiteSpace: 'nowrap', flexShrink: 0, color: 'mutedText', paddingRight: 2 }}
              >Recent searches</Box>
              <Flex sx={{
                width: '100%',
                overflowX: 'scroll',
                overflow: ' -moz-scrollbars-none',
                flexWrap: 'nowrap',
                '&::-webkit-scrollbar': {
                  width: '0 !important',
                  height: '0 !important',
                }
              }}>
                {trackerOverview.recentLookups.map(({ gamerTag, date }) => {
                  return (
                    <Link
                      to={`/halo?tag=${encodeURI(gamerTag)}`}
                      onClick={expandIfNeccessary}
                      sx={{
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                        width: 'auto',
                        fontSize: 0,
                        margin: 1,
                        paddingY: 1,
                        paddingX: 2,
                        color: 'text',
                        textDecoration: 'none',
                        backgroundColor: 'listBg'
                      }}
                      key={`${gamerTag}-${date}`}>{gamerTag}
                    </Link>
                  )
                })}
              </Flex>
            </Flex>
          </>
        }
      </Container>
    </Box>
  )
}

export default CompareStatsBanner;
