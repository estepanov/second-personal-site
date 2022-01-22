/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from "react";
import { SWRConfig } from "swr";
import { CookiesProvider } from "react-cookie";

// highlight-start
export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <SWRConfig
      value={{
        fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
      }}
    >
      {element}
    </SWRConfig>
  </CookiesProvider>
);
