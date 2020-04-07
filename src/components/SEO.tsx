import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
      }
    }
  }
`

export interface SEOProps {
  title?: string | null
  description?: string | null
  image?: string | null
  pathname?: string | null
  article?: boolean
}

const SEO: React.FC<SEOProps> = ({ title, description, image, pathname, article }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: { defaultTitle, titleTemplate, defaultDescription, siteUrl, defaultImage, twitterUsername }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`
      }

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <script src="https://kit.fontawesome.com/20cb3e86f0.js" crossOrigin="anonymous" />
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
}
