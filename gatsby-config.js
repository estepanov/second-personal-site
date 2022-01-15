const defaultTheme = require('./src/styles/theme')
const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
console.log(`Using environment config: '${activeEnv}'`)

require('dotenv').config({
  path: `.env.${activeEnv}`
})

const githubQuery = `query {
  viewer {
    login
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`

const plugins = [
  {
    resolve: 'gatsby-plugin-theme-ui',
    options: {
      preset: defaultTheme
    },
  },
  {
    resolve: 'gatsby-theme-style-guide',
    options: {
      // sets path for generated page
      basePath: '/design-system',
    },
  },
  {
    resolve: `gatsby-source-github-api`,
    options: {
      url: 'https://api.github.com/graphql',
      token: process.env.GITHUB_TOKEN,
      graphQLQuery: githubQuery,
      variables: {}
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'pages',
      path: `${__dirname}/src/content/pages`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'projects',
      path: `${__dirname}/src/content/projects`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'blog',
      path: `${__dirname}/src/content/blog`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'work',
      path: `${__dirname}/src/content/work`
    }
  },
  // not using json at the moment...
  // {
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     name: `about`,
  //     path: `${__dirname}/src/content/about`,
  //     plugins: [`gatsby-transformer-json`]
  //   }
  // },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-responsive-iframe',
          options: {
            wrapperStyle: 'margin-bottom: 1rem'
          }
        },
        'gatsby-remark-copy-linked-files',
        'gatsby-remark-smartypants',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
            quality: 100,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_self',
            rel: 'nofollow'
          }
        }
      ]
    }
  },
  'gatsby-transformer-json',
  {
    resolve: 'gatsby-plugin-canonical-urls',
    options: {
      siteUrl: 'https://estep.nyc'
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-typescript',
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      defaultQuality: 100
    }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-netlify-cms'
]

if (process.env.GA_ID) {
  plugins.push({
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: process.env.GA_ID
    }
  })
}

module.exports = {
  siteMetadata: {
    titleTemplate: '%s | Evans Stepanov',
    title: 'Full Stack Engineer',
    description: 'Some information and a collection of musings.',
    keywords: 'javascript, react, node, portfolio, resume, coding',
    siteUrl: 'https://estep.nyc',
    image: '',
    twitterUsername: '',
    author: {
      name: 'Evans Stepanov',
      url: 'https://estep.nyc'
    },
    postsPerPage: 10,
    buildDate: new Date().toISOString()
  },
  plugins
}
