import React from "react";
/** @jsx jsx */
import { jsx, Flex, Button, Box } from "theme-ui";
import Container from "../Layout/Container";
import useHaloStats, { HaloEndPoints } from "../../hooks/useHaloStats";
import { TrackerOverview } from "../../interfaces/Halo/Tracker";
import ChiefCroppedIcon from "./elements/ChiefCroppedIcon";

interface CompareStatsBannerProps {
  expanded: boolean;

  toggle(): void;

  fetchTag(input: { tag: string }, e?: any): void;
}

const CompareStatsBanner: React.FC<CompareStatsBannerProps> = ({ fetchTag, children, toggle, expanded }) => {
  const [trackerOverview] = useHaloStats<TrackerOverview>(HaloEndPoints.statsTrackerOverview);

  return (
    <Box
      sx={{
        backgroundColor: "background",
        marginY: 4,
      }}
    >
      <Container>
        <Flex
          sx={{
            paddingX: 2,
            paddingY: 2,
            flexDirection: "column",
          }}
        >
          <Flex
            sx={{
              flexDirection: ["column", "row"],
              justifyContent: ["space-between"],
            }}
          >
            <Flex
              sx={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Flex
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 4,
                  fontFamily: "nav",
                  fontWeight: "display",
                  color: "secondary",
                  paddingRight: 3,
                  height: [70, 50],
                }}
              >
                <ChiefCroppedIcon />
              </Flex>
              <Flex
                sx={{
                  flexDirection: "column",
                  marginBottom: [2, 0],
                }}
              >
                <Flex
                  sx={{
                    fontSize: 3,
                    fontFamily: "heading",
                    fontWeight: "display",
                    lineHeight: "1.5em",
                    // color: 'listHeader',
                    color: "secondary",
                  }}
                >
                  Who has better stats?
                </Flex>
                <Flex
                  sx={
                    {
                      // color: 'listContent'
                    }
                  }
                >
                  Enter another gamer tag to compare our Halo stats
                </Flex>
              </Flex>
            </Flex>

            <Flex>
              {expanded ? (
                <Button
                  variant="outline"
                  onClick={toggle}
                  sx={{
                    width: ["100%", 150],
                    borderColor: "text",
                    color: "text",
                  }}
                >
                  Close
                </Button>
              ) : (
                <Button
                  onClick={toggle}
                  sx={{
                    width: ["100%", 150],
                    backgroundColor: "secondary",
                  }}
                >
                  Lets Go
                </Button>
              )}
            </Flex>
          </Flex>
        </Flex>

        {trackerOverview && (
          <Box sx={{ marginY: 2 }}>
            <Flex sx={{ flexDirection: "row", alignItems: "center", fontSize: 0, flexWrap: "wrap" }}>
              <Box
                sx={{
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  color: "text",
                  paddingRight: 2,
                  width: ["auto", "120px"],
                  marginRight: 1,
                }}
              >
                Comparisons
              </Box>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",
                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.todayCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    paddingRight: [1, 2],
                    marginRight: [1, 2],
                    // , borderRightColor: 'muted', borderRightStyle: 'solid', borderRightWidth: '1px'
                  }}
                >
                  today
                </Box>
              </Flex>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",

                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.yesterdayCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    paddingRight: [1, 2],
                    marginRight: [1, 2],
                    // borderRightColor: 'muted',
                    // borderRightStyle: 'solid',
                    // borderRightWidth: '1px'
                  }}
                >
                  yesterday
                </Box>
              </Flex>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",
                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.weekCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    paddingRight: [1, 2],
                    marginRight: [1, 2],
                    // borderRightColor: 'muted', borderRightStyle: 'solid', borderRightWidth: '1px'
                  }}
                >
                  this week
                </Box>
              </Flex>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",

                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.lastWeekCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    paddingRight: [1, 2],
                    marginRight: [1, 2],
                    // borderRightColor: 'muted',
                    // borderRightStyle: 'solid',
                    // borderRightWidth: '1px'
                  }}
                >
                  last week
                </Box>
              </Flex>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",
                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.monthCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    paddingRight: [1, 2],
                    marginRight: [1, 2],
                    // borderRightColor: 'muted', borderRightStyle: 'solid', borderRightWidth: '1px'
                  }}
                >
                  this month
                </Box>
              </Flex>
              <Flex>
                <Box
                  sx={{
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // width: 'auto',
                    fontSize: 0,
                    fontWeight: "bold",

                    // margin: 1,
                    // paddingY: 1,
                    // paddingX: 2,
                    // backgroundColor: 'listBg'
                  }}
                >
                  {trackerOverview.lastMonthCount}&nbsp;
                </Box>
                <Box
                  sx={{
                    color: "mutedText",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                    // marginRight: 2,
                    // paddingRight: 2,
                    // borderRightColor: 'muted',
                    // borderRightStyle: 'solid',
                    // borderRightWidth: '1px'
                  }}
                >
                  last month
                </Box>
              </Flex>
            </Flex>
            <Flex sx={{ flexDirection: "row", alignItems: "center", fontSize: 0, marginTop: 1 }}>
              <Box sx={{ whiteSpace: "nowrap", flexShrink: 0, color: "text", paddingRight: 2, width: ["auto", "120px"] }}>
                Recent searches
              </Box>
              <Flex
                sx={{
                  width: "100%",
                  overflowX: "scroll",
                  overflow: " -moz-scrollbars-none",
                  flexWrap: "nowrap",
                  "&::-webkit-scrollbar": {
                    width: "0 !important",
                    height: "0 !important",
                  },
                }}
              >
                {trackerOverview.recentLookups.map(({ gamerTag, date }) => {
                  return (
                    <Box
                      as="button"
                      onClick={(e) => fetchTag({ tag: gamerTag }, e)}
                      sx={{
                        border: "none",
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                        width: "auto",
                        fontSize: 0,
                        margin: 1,
                        paddingY: 1,
                        paddingX: 2,
                        color: "text",
                        textDecoration: "none",
                        backgroundColor: "listBg",
                        cursor: "pointer",
                      }}
                      key={`${gamerTag}-${date}`}
                    >
                      {gamerTag}
                    </Box>
                  );
                })}
              </Flex>
            </Flex>
          </Box>
        )}
        <Box sx={{ display: expanded ? "block" : "none", marginBottom: 1 }}>{children}</Box>
      </Container>
    </Box>
  );
};

export default CompareStatsBanner;
