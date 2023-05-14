import React, { ReactNode } from "react";
/** @jsx jsx */
import { jsx, Heading, Text, Flex, Box } from "theme-ui";

import BannerWrapper from "./BannerWrapper";

export interface BasicBanerProps {
  heading: string | ReactNode;
  text: string | ReactNode;
}

const BasicBanner: React.FC<BasicBanerProps> = ({ heading, text, children }) => {
  return (
    <BannerWrapper>
      <Flex
        sx={{
          flexDirection: ["column", "row"],
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            flexGrow: 1,
          }}
        >
          <Heading
            sx={{
              fontSize: 2,
              display: "inline-flex",
              marginRight: 4,
            }}
          >
            {heading}
          </Heading>
          <Text sx={{ fontSize: 1 }}>{text}</Text>
        </Box>
        {children}
      </Flex>
    </BannerWrapper>
  );
};

export default BasicBanner;
