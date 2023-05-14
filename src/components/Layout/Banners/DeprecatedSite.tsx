import React from "react";
/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Link } from "gatsby";
import { darken, lighten } from "@theme-ui/color";
import ControlledBanner from "./ControlledBanner";

const DeprecatedSite = () => {
  return (
    <ControlledBanner
      id="deprecated-banner"
      isClosable={false}
      heading="Attention"
      text={
        <React.Fragment>
          <Box sx={{ lineHeight: 1.5 }}>
            <Box>
              This old personal site of mine is no longer maintained. I only keep it up for demo purposes. All backend functionality is now
              mocked client side to simplify maintenance.
            </Box>
          </Box>
        </React.Fragment>
      }
      actions={
        <Link
          sx={{
            background: (t) => lighten("primary", 0.9)(t),
            borderColor: (t) => lighten("primary", 0.35)(t),
            borderWidth: 2,
            borderStyle: "solid",
            borderRadius: 10,
            paddingX: 3,
            paddingY: 2,
            // color: "primary",
            color: (t) => darken("primary", 0.4)(t),
            fontWeight: "bold",
            textDecoration: "none",
            transition: "all ease 0.2s",
            "&:hover": {
              background: (t) => lighten("primary", 0.35)(t),
            },
          }}
          to="https://builtbyevans.com"
        >
          View current site
        </Link>
      }
    />
  );
};

export default DeprecatedSite;
