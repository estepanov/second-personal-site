import dayjs from "dayjs";
import { Fragment } from "react";
import { Badge, Box, Flex, Spinner } from "theme-ui";
import localizedFormat from "dayjs/plugin/localizedFormat";
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import { OverviewStats, RecentMatch, RecentMatchesBody } from "../../interfaces/Halo/Stats";
import { getFormattedStat, getStatOption, OverviewStatsKeys } from "../../utils/haloStatFormatter";

dayjs.extend(localizedFormat);

const StatLineItem = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <Flex sx={{ width: ["25%", "25%"], alignItems: "center" }}>
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
  const [stats, loading] = useHaloStats<RecentMatchesBody>(HaloEndPoints.recentMatches);
  if (loading) {
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
          Fetching latest multiplayer stats
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
                position: "relative",
                width: ["calc(100% - 4px)", "calc(50% - 4px)", "calc(33.33% - 4px)"],
                padding: 3,
                margin: "0px",
              }}
            >
              <Flex
                sx={{
                  flexDirection: "row",
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
                    {/* <Box */}
                    {/*  sx={{ */}
                    {/*    // fontFamily: 'heading', */}
                    {/*    // fontWeight: 'display', */}
                    {/*    // lineHeight: '1.1em', */}
                    {/*    color: "text", */}
                    {/*    fontSize: "10px", */}
                    {/*    // borderLeftColor: "text", */}
                    {/*    // borderLeftStyle: "solid", */}
                    {/*    // borderLeftWidth: 1, */}
                    {/*    marginLeft: 1, */}
                    {/*    opacity: 0.5, */}
                    {/*  }} */}
                    {/* > */}
                    {/*  ({dayjs(game.played_at).format("MM/DD/YY HH:mm")}) */}
                    {/* </Box> */}
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
                        backgroundColor: game?.player?.outcome === "win" ? "success" : "warning",
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
                  color: "white",
                  // flexDirection: ["column", "row"],
                  marginTop: 1,
                }}
              >
                <Flex sx={{ flex: 1 }}>
                  <StatLineItem title="XP" value={game?.player?.stats?.core?.score} />
                  <StatLineItem title="KILLS" value={game?.player?.stats?.core?.summary.kills} />
                  <StatLineItem title="ASSISTS" value={game?.player?.stats?.core?.summary.assists} />
                  <StatLineItem title="MEDALS" value={game?.player?.stats?.core?.breakdowns?.medals.length} />
                </Flex>
              </Flex>
              <Box
                sx={{
                  position: "absolute",
                  // left: 0,
                  // right: 0,
                  // top: 0,
                  // bottom: 0,
                  left: 1,
                  right: 1,
                  top: 1,
                  bottom: 1,
                  opacity: 0.75,
                  zIndex: -1,
                  backgroundColor: "background",
                }}
              />
              {/* <Box */}
              {/*  sx={{ */}
              {/*    position: "absolute", */}
              {/*    left: 0, */}
              {/*    right: 0, */}
              {/*    top: 0, */}
              {/*    bottom: 0, */}
              {/*    zIndex: -1, */}
              {/*    // opacity: 0.3, */}
              {/*    backgroundImage: `url("${game?.details?.map?.asset.thumbnail_url}")`, */}
              {/*    backgroundSize: "cover", */}
              {/*    backgroundRepeat: "no-repeat", */}
              {/*    backgroundPositionY: "center", */}
              {/*    backgroundPositionX: "center", */}
              {/*  }} */}
              {/* /> */}
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
