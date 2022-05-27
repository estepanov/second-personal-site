import React from "react";
/** @jsx jsx */
import { jsx, Box, Text, Flex } from "theme-ui";
import { lighten, darken } from "@theme-ui/color";
import Layout from "../layouts";

import Work from "../components/home/Work";
import Container from "../components/Layout/Container";
import GitHubActivity from "../components/GitHubActivityBook";
import TechSection from "../components/home/TechCloud";
import Hero from "../components/home/Hero";
import LatestProjects from "../components/home/LatestProjects";
import { StatsOverview } from "../components/Halo/StatsOverview";

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
                  fontFamily: "monospace",
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
                  fontFamily: "monospace",
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
                  fontFamily: "monospace",
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
      <Box sx={{ marginY: 6 }}>
        <Container>
          <Box sx={{ fontSize: [4], lineHeight: 2 }}>
            Usually you can find me coding or reading about software. Winter is my favorite season and ⛷ or 🏂 on fresh pow 🌨 is the
            highlight of every winter. Occasionally, I can be found binge-playing Halo Infinite on 🎮.
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          borderTopColor: "secondary",
          borderTopStyle: "solid",
          borderTopWidth: 3,
          borderBottomColor: "secondary",
          borderBottomStyle: "solid",
          borderBottomWidth: 3,
          paddingY: 4,
          backgroundColor: "backgroundAlt",
        }}
      >
        <Container>
          <Work />
        </Container>
      </Box>
      <Box sx={{ paddingY: 6 }}>
        <Container>
          <TechSection />
          <Box marginTop={6} />
          <Flex sx={{ justifyContent: "center", alignItems: "center", marginTop: 4 }}>
            <GitHubActivity />
          </Flex>
          <Box marginTop={6} />
          <LatestProjects />
        </Container>
      </Box>
      <StatsOverview />
    </Layout>
  );
};

export default IndexPage;
