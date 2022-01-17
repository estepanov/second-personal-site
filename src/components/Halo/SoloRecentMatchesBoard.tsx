import React from "react"
import dayjs from "dayjs";
import { Badge, Box, Flex, Spinner } from "theme-ui";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import { RecentMatchesBody } from "../../interfaces/Halo/Stats";

dayjs.extend(localizedFormat)


const SoloRecentMatchesBoard = () => {
  const [stats, loading] = useHaloStats<RecentMatchesBody>(HaloEndPoints.recentMatches)
  if (loading) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        <Spinner size={50} sx={{
          color: 'secondary',
          zIndex: 1
        }} />
        <Box sx={{
          fontSize: 2,
          paddingTop: 3,
          zIndex: 1
        }}>
          Fetching latest multiplayer stats
        </Box>
        <Box sx={{
          position: 'absolute',
          zIndex: 0,
          backgroundColor: 'background',
          opacity: 0.8,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }} />
      </Flex>
    )
  }
  return (
    <>
      <Flex sx={{
        flexWrap: 'wrap',

      }}>

        {stats?.games?.map(game => {
          return (
            <Flex key={game.id}
              sx={{
                flexDirection: 'column',
                position: 'relative',
                width: ['calc(100% - 4px)', 'calc(50% - 4px)', 'calc(33.33% - 4px)'],
                height: [190, 230],
                margin: '2px',
                // borderColor: 'background',
                // borderStyle: 'solid',
                // borderWidth: 1
              }}
            >

              <Flex sx={{
                position: 'relative',
                zIndex: 1, color: 'text', flexDirection: 'column', padding: 3
              }}>
                <Box sx={{
                  position: 'absolute',
                  // left: 0,
                  // right: 0,
                  // top: 0,
                  // bottom: 0,
                  left: 1,
                  right: 1,
                  top: 1,
                  bottom: 1,
                  opacity: 0.9,
                  zIndex: -1,
                  backgroundColor: 'background'
                }} />
                <Flex sx={{
                  flexDirection: 'row'
                }}>
                  <Flex sx={{
                    flexDirection: 'column',
                    flex: 1,
                  }}>
                    <Box sx={{
                      fontFamily: 'heading',
                      fontWeight: 'display',
                      lineHeight: '1.1em',
                      color: 'text',
                    }}>
                      {game.details.category.name} on {game?.details?.map?.name}
                    </Box>
                    <Box sx={{
                      // fontFamily: 'heading',
                      // fontWeight: 'display',
                      // lineHeight: '1.1em',
                      color: 'text',
                      fontSize: 0,
                    }}>
                      {game?.details?.playlist?.name}
                    </Box>
                  </Flex>
                  <Flex sx={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    {game?.player?.outcome && <Badge sx={{
                      marginX: 2,
                      lineHeight: 2,
                      backgroundColor: game?.player?.outcome === 'win' ? 'success' : 'warning'
                    }}>{game?.player?.outcome?.toUpperCase()}</Badge>}
                  </Flex>

                </Flex>

              </Flex>
              <Flex sx={{
                position: 'relative',
                flex: 1,
                zIndex: 1, color: 'text', flexDirection: 'column', padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
              }}>
                <Flex sx={{
                  margin: 1,
                  flexDirection: 'column',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 2,
                  color: 'white'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0.25,
                    zIndex: -1,
                    backgroundColor: 'background'
                  }} />
                  <Box sx={{
                    zIndex: 0, fontSize: 3, marginBottom: 1,
                    fontFamily: 'nav',
                    fontWeight: 'display',
                    color: 'white',
                    lineHeight: 1,
                    textShadow: '0px 0px 5px black',
                  }}>
                    {game?.player?.stats?.core?.summary?.kills}
                  </Box>
                  <Box sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontSize: 1,
                    textAlign: 'center',
                    lineHeight: 1,
                    // height: 35,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textShadow: '1px 1px 2px black'
                  }}>
                    Kills
                  </Box>
                </Flex>
                <Flex sx={{
                  margin: 1,
                  flexDirection: 'column',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 2,
                  color: 'white'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0.25,
                    zIndex: -1,
                    backgroundColor: 'background'
                  }} />
                  <Box sx={{
                    zIndex: 0, fontSize: 3, marginBottom: 1,
                    fontFamily: 'nav',
                    fontWeight: 'display',
                    color: 'white',
                    lineHeight: 1,
                    textShadow: '0px 0px 5px black',
                  }}>
                    {game?.player?.stats?.core?.score}
                  </Box>
                  <Box sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontSize: 1,
                    textAlign: 'center',
                    lineHeight: 1,
                    // height: 35,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textShadow: '1px 1px 2px black'
                  }}>
                    Score
                  </Box>
                </Flex>
                <Flex sx={{
                  margin: 1,
                  flexDirection: 'column',
                  position: 'relative',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 2,
                  color: 'white'
                }}>
                  <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    opacity: 0.25,
                    zIndex: -1,
                    backgroundColor: 'background'
                  }} />
                  <Box sx={{
                    zIndex: 0, fontSize: 3, marginBottom: 1,
                    fontFamily: 'nav',
                    fontWeight: 'display',
                    color: 'white',
                    lineHeight: 1,
                    textShadow: '0px 0px 5px black',
                  }}>
                    {game?.player?.stats?.core?.kda}
                  </Box>
                  <Box sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontSize: 1,
                    textAlign: 'center',
                    lineHeight: 1,
                    // height: 35,
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textShadow: '1px 1px 2px black'
                  }}>
                    KDA
                  </Box>
                </Flex>
              </Flex>
              <Flex sx={{
                position: 'relative',
                fontSize: 0,
                zIndex: 1,
                color: 'white',
                flexDirection: ['column', 'row'],
                padding: 3
              }}>
                <Box sx={{
                  position: 'absolute',
                  left: 1,
                  right: 1,
                  top: 1,
                  bottom: 1,
                  opacity: 0.78,
                  zIndex: -1,
                  backgroundColor: 'black'
                }} />
                <Flex sx={{ flex: 1 }}>
                  {game?.player?.stats?.core?.breakdowns?.medals?.length} medals
                </Flex>
                <Flex>
                  {dayjs(game.played_at).format('MMM D YYYY HH:mm')}
                </Flex>
              </Flex>

              <Box sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: -1,
                // opacity: 0.3,
                backgroundImage: `url("${game?.details?.map?.asset.thumbnail_url}")`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionY: 'center',
                backgroundPositionX: 'center',
              }} />

            </Flex>
          )
        })}
      </Flex>
      {stats?.fetchedOn && <Box sx={{ fontSize: '10px', paddingY: 2, opacity: 0.8 }}>
        Stats as of {dayjs(stats?.fetchedOn).format('LLLL')}
      </Box>
      }
    </>
  )
}

export default SoloRecentMatchesBoard;
