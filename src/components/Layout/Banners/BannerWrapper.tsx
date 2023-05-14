import React from "react";
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { lighten } from "@theme-ui/color";
import Container from "../Container";

const BannerWrapper: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        paddingY: 2,
        // backgroundImage: theme => `linear-gradient(to bottom right, ${theme.colors.primary}, ${theme.colors.secondary})`,
        backgroundImage: (t) => `linear-gradient(to bottom, ${lighten("primary", 0)(t)}, ${lighten("primary", 0.2)(t)})`,
        color: "white",
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
};

export default BannerWrapper;
