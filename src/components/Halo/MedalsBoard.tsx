import { Box, Button, Flex, Image } from "theme-ui";
import { useMemo } from "react";
import { HaloApiMedal, OverviewStats } from "../../interfaces/Halo/Stats";
import useToggle from "../../hooks/useToggle";

const Tile = ({ medal }: { medal: HaloApiMedal }) => {
  return (
    <Box
      sx={{
        color: "text",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: 2,
        paddingX: 2,
        position: "relative",
        width: ["50%", "33%", "25%"],
      }}
      key={medal.id}
    >
      <Box
        sx={{
          backgroundColor: "background",
          opacity: 0.8,
          zIndex: 0,
          position: "absolute",
          left: "2px",
          right: "2px",
          top: "2px",
          bottom: "2px",
        }}
      />
      <Box sx={{ zIndex: 1, flexShrink: 0 }}>
        <Image
          sx={{ flexShrink: 0, maxHeight: ["40px", "60px"] }}
          src={medal.image_urls.small}
          alt={`halo infinite ${medal.name} medal icon`}
        />
      </Box>
      <Flex sx={{ zIndex: 1, flexDirection: "column", alignItems: "flex-end" }}>
        <Flex
          sx={{
            flex: 1,
            textAlign: "right",
            color: "text",
            textTransform: "uppercase",
            fontSize: [0, 2],
            wordBreak: "break-word",
            letterSpacing: 2,
            lineHeight: 1,
            marginBottom: 1,
            opacity: 0.8,
          }}
        >
          {medal.name}
        </Flex>
        <Box
          sx={{
            zIndex: 1,
            fontFamily: "nav",
            fontWeight: "display",
            fontSize: [2, 4],
            color: "text",
            lineHeight: 1,
          }}
        >
          {medal.count}
        </Box>
      </Flex>
    </Box>
  );
};

const sortByCount = (a: HaloApiMedal, b: HaloApiMedal) => (a.count > b.count ? -1 : 1);

interface MedalsBoardProps {
  stats: OverviewStats | undefined | null;
  collapsedCount?: number;
}

const DEFAULT_SHOWN_MEDAL_COUNT = 8;

const MedalsBoard = ({ stats, collapsedCount = DEFAULT_SHOWN_MEDAL_COUNT }: MedalsBoardProps) => {
  const [expanded, toggleExapnd] = useToggle();
  const sorted = useMemo(() => stats?.core?.breakdowns?.medals.sort(sortByCount) || [], [stats]);
  const collapsedItems = useMemo(() => sorted.slice(0, collapsedCount), [sorted, collapsedCount]);
  const hasExtra = stats?.core?.breakdowns?.medals ? stats?.core?.breakdowns?.medals.length - DEFAULT_SHOWN_MEDAL_COUNT : 0;
  return (
    <Box sx={{}}>
      <Flex sx={{ flexDirection: "row", flexWrap: "wrap" }} key={`${expanded}`}>
        {(expanded ? sorted : collapsedItems).map((medal) => (
          <Tile key={medal.id} medal={medal} />
        ))}
      </Flex>
      {hasExtra && (
        <Button
          sx={{
            display: "flex",
            cursor: "pointer",
            width: "100%",
            marginTop: 1,
            marginX: "2px",
            fontWeight: "bold",
            textAlign: "center",
            justifyContent: "center",
          }}
          onClick={toggleExapnd}
          type="button"
        >
          {expanded ? "Hide extra medals" : `Show ${hasExtra} more medals`}
        </Button>
      )}
    </Box>
  );
};

export default MedalsBoard;
