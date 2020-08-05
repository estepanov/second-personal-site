/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import { CookiesProvider } from 'react-cookie'

// highlight-start
export const wrapRootElement = ({ element }) => <CookiesProvider>{element}</CookiesProvider>
