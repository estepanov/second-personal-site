import dayjs from "dayjs";
import { Fragment } from "react";
import { Badge, Box, Flex, Message, Spinner } from "theme-ui";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import { RecentMatchesBody } from "../../interfaces/Halo/Stats";

dayjs.extend(localizedFormat);

const StatLineItem = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <Flex sx={{ width: ["33.33%"], alignItems: "center" }}>
      <Box
        sx={{
          fontWeight: "bold",
        }}
      >
        {value}
      </Box>
      <Box
        sx={{
          lineHeight: 1,
          marginLeft: 1,
          fontSize: "10px",
          // marginRight: 2,
          opacity: 0.8,
        }}
      >
        {title}
      </Box>
    </Flex>
  );
};

const SoloRecentMatchesBoard = () => {
  const [stats, loading, error] = useHaloStats<RecentMatchesBody>(HaloEndPoints.recentMatches);

  if (error) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            fontSize: 2,
            paddingTop: 3,
            zIndex: 1,
          }}
        >
          <Message
            sx={{
              backgroundColor: "red",
              borderLeftWidth: 0,
              color: "white",
              marginBottom: 2,
              borderRadius: 0,
            }}
          >
            There was an error fetching my recent matches. Please try again later.
          </Message>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            backgroundColor: "background",
            opacity: 0.8,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Flex>
    );
  }

  if (loading && !stats) {
    return (
      <Flex
        sx={{
          marginTop: 2,
          paddingY: 4,
          paddingX: 2,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Spinner
          size={50}
          sx={{
            color: "secondary",
            zIndex: 1,
          }}
        />
        <Box
          sx={{
            fontSize: 2,
            paddingTop: 3,
            zIndex: 1,
          }}
        >
          Fetching latest multiplayer matches
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            backgroundColor: "background",
            opacity: 0.8,
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />
      </Flex>
    );
  }
  return (
    <Fragment>
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        {stats?.games?.map((game) => {
          return (
            <Flex
              key={game.id}
              sx={{
                flexDirection: "column",
                paddingY: 3,
                paddingX: 3,
                position: "relative",
                width: ["50%", "50%", "25%"],
              }}
            >
              <Flex
                sx={{
                  flexDirection: "row",
                  zIndex: 1,
                }}
              >
                <Flex
                  sx={{
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <Box
                    sx={{
                      fontFamily: "heading",
                      fontWeight: "display",
                      lineHeight: "1.1em",
                      color: "text",
                    }}
                  >
                    {game.details.category.name} on {game?.details?.map?.name}
                  </Box>
                  <Flex sx={{ marginTop: 1 }}>
                    <Box
                      sx={{
                        flex: 1,
                        // fontFamily: 'heading',
                        // fontWeight: 'display',
                        // lineHeight: '1.1em',
                        color: "text",
                        fontSize: 0,
                      }}
                    >
                      {game?.details?.playlist?.name}
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  sx={{
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  {game?.player?.outcome && (
                    <Badge
                      sx={{
                        marginLeft: 2,
                        textAlign: "center",
                        paddingX: 2,
                        width: [60, 70],
                        lineHeight: 2,
                        backgroundColor: game?.player?.outcome === "win" ? "success" : "red",
                      }}
                    >
                      {game?.player?.outcome?.toUpperCase()}
                    </Badge>
                  )}
                </Flex>
              </Flex>
              <Flex
                sx={{
                  position: "relative",
                  fontSize: 0,
                  zIndex: 1,
                  color: "text",
                  marginTop: 1,
                }}
              >
                <Flex sx={{ flex: 1, flexWrap: "wrap", marginTop: 2, lineHeight: "1.5em" }}>
                  <StatLineItem title="XP" value={game?.player?.stats?.core?.score} />
                  <StatLineItem title="MEDALS" value={game?.player?.stats?.core?.breakdowns?.medals.length} />
                  <StatLineItem title="KDA" value={game?.player?.stats?.core?.kda} />
                  <StatLineItem title="KILLS" value={game?.player?.stats?.core?.summary.kills} />
                  <StatLineItem title="ASSISTS" value={game?.player?.stats?.core?.summary.assists} />
                  <StatLineItem title="DEATHS" value={game?.player?.stats?.core?.summary.deaths} />
                </Flex>
              </Flex>
              <Box
                sx={{
                  position: "absolute",
                  left: "2px",
                  right: "2px",
                  top: "2px",
                  bottom: "2px",
                  opacity: 0.8,
                  zIndex: 0,
                  backgroundColor: "background",
                }}
              />
            </Flex>
          );
        })}
      </Flex>
      {stats?.fetchedOn && (
        <Box sx={{ fontSize: "10px", paddingY: 2, opacity: 0.8 }}>Stats as of {dayjs(stats?.fetchedOn).format("LLLL")}</Box>
      )}
    </Fragment>
  );
};

export default SoloRecentMatchesBoard;
