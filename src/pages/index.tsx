import React, { useRef } from "react";
/** @jsx jsx */
import { jsx, Box, Text, Flex } from "theme-ui";
import { lighten, darken } from "@theme-ui/color";
import useIntersectionObserver from "@react-hook/intersection-observer";
import Layout from "../layouts";

import Work from "../components/home/Work";
import Container from "../components/Layout/Container";
import GitHubActivity from "../components/GitHubActivityBook";
import TechSection from "../components/home/TechCloud";
import Hero from "../components/home/Hero";
import LatestProjects from "../components/home/LatestProjects";
import { StatsOverview } from "../components/Halo/StatsOverview";

const ColorTextSection = ({ message, backgroundColor }) => {
  const contRef = useRef();
  const { isIntersecting: isIntersectingContRef } = useIntersectionObserver(contRef, {
    rootMargin: "-10%",
  });
  return (
    <Box
      ref={contRef}
      sx={{
        paddingY: 6,
        transition: "all ease 0.5s",
        opacity: isIntersectingContRef ? 1 : 0.3,
        backgroundColor,
        color: "white",
        fontFamily: "writing",
      }}
    >
      <Container>
        <Box sx={{ fontSize: [6, 7], lineHeight: 2, paddingX: [2, 0], fontWeight: 700, textAlign: "center" }}>{message}</Box>
      </Container>
    </Box>
  );
};

interface IndexProps {
  location: Location;
}

const IndexPage: React.FC<IndexProps> = ({ location }) => {
  return (
    <Layout container={false} pathname={location.pathname}>
      <Hero>
        <Container>
          <Flex
            sx={{
              flexDirection: "column",
              justifyContent: "center",
              paddingY: 3,
              alignItems: "center",
              flex: 1,
            }}
          >
            <Text
              sx={{
                textAlign: ["center", "left"],
                color: "text",
                lineHeight: "1.5em",
                fontSize: [5, 9],
                fontFamily: "heading",
                fontWeight: "display",
                background: (t) => `linear-gradient(135deg, ${lighten("text", 0.3)(t)}, ${darken("text", 0.3)(t)})`,
                backgroundClip: "text",
              }}
            >
              Howdy, I'm{" "}
              <span
                sx={{
                  color: "primary",
                  fontFamily: "writing",
                  background: (t) => `linear-gradient(90deg, ${lighten("primary", 0.01)(t)}, ${darken("warning", 0.01)(t)})`,
                  backgroundClip: "text",
                }}
              >
                Evans
              </span>
              . <br />I love{" "}
              <span
                sx={{
                  color: "highlight",
                  fontFamily: "writing",
                  background: (t) => `linear-gradient(90deg, ${lighten("highlight", 0.01)(t)}, ${darken("primary", 0.01)(t)})`,
                  backgroundClip: "text",
                }}
              >
                crafting
              </span>{" "}
              full stack web applications that{" "}
              <span
                sx={{
                  color: "secondary",
                  fontFamily: "writing",
                  background: (t) => `linear-gradient(90deg, ${lighten("teal", 0.01)(t)}, ${darken("green", 0.01)(t)})`,
                  backgroundClip: "text",
                }}
              >
                delight
              </span>{" "}
              users.
            </Text>
          </Flex>
        </Container>
      </Hero>
      <Box sx={{ paddingY: 6 }}>
        <Container>
          <TechSection />
        </Container>
      </Box>
      <ColorTextSection backgroundColor="yellow" message="I also really love to ⛷ or 🏂 on fresh pow 🌨" />
      <Box
        sx={{
          paddingY: 6,
          // backgroundColor: "backgroundAlt",
        }}
      >
        <Container>
          <Work />
        </Container>
      </Box>
      {/* <Box sx={{ paddingY: 6, backgroundColor: "primary", color: "white" }}>
        <Container>
          <Box sx={{ fontSize: [4, 6], lineHeight: 2, paddingX: 3 }}>
            Usually you can find me coding or reading about software. Winter is my favorite season and ⛷ or 🏂 on fresh pow 🌨 is the
            highlight of every winter. Occasionally, I can be found binge-playing Halo Infinite on 🎮.
          </Box>
        </Container>
      </Box> */}
      <ColorTextSection backgroundColor="primary" message="Usually you can find me coding or learning" />
      <Box sx={{ paddingY: 6 }}>
        <Container>
          <Flex sx={{ justifyContent: "center", alignItems: "center" }}>
            <GitHubActivity />
          </Flex>
        </Container>
      </Box>
      <Box
        sx={{
          paddingY: 6,
          backgroundColor: "backgroundAlt",
        }}
      >
        <Container>
          <LatestProjects />
        </Container>
      </Box>

      {/* <Box sx={{ paddingY: 6 }}>
        <Container>
          <TechSection />
          <Box marginTop={6} />
          <Flex sx={{ justifyContent: "center", alignItems: "center", marginTop: 4 }}>
            <GitHubActivity />
          </Flex>
          <Box marginTop={6} />
          <LatestProjects />
        </Container>
      </Box> */}
      <ColorTextSection backgroundColor="secondary" message="Occasionally, I binge-play Halo Infinite on 🎮" />
      {/* <Box sx={{ paddingY: 6 }}> */}
      <StatsOverview />
      {/* </Box> */}
    </Layout>
  );
};

export default IndexPage;
